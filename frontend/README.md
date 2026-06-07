# TeachAndReach Frontend

Next.js 14 frontend with real-time chat, presence, and live video broadcasting.

## Prerequisites

- Node.js 18+
- Backend API running (see `api/`)
- LiveKit server running (see root `livekit.sh`)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env`

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3. Start the development server

```bash
npm run dev
```

App runs at http://localhost:3000

## Scripts

| Command         | Description        |
| --------------- | ------------------ |
| `npm run dev`   | Development server |
| `npm run build` | Production build   |
| `npm start`     | Production server  |
| `npm run lint`  | ESLint             |

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx                  # Root layout — wraps app in AuthInitializer
│   ├── login/page.tsx              # Login page
│   ├── register/page.tsx           # Registration page
│   └── (app)/                      # Auth-protected route group
│       ├── layout.tsx              # Auth guard + socket listener init
│       ├── page.tsx                # Dashboard
│       ├── groups/
│       │   ├── page.tsx            # My groups list
│       │   ├── create/page.tsx     # Create group
│       │   ├── [id]/page.tsx       # Group detail, chat, broadcast
│       │   └── [id]/edit/page.tsx  # Edit group (owner only)
│       └── notifications/page.tsx  # Invitations + join requests
├── components/
│   ├── AuthInitializer.tsx         # Restores session on app load
│   ├── Navbar.tsx                  # Sticky nav with notification badge
│   └── call/
│       └── BroadcastRoom.tsx       # Full-screen LiveKit broadcast overlay
├── stores/
│   ├── authStore.ts                # Auth state (login, logout, checkAuth)
│   ├── groupsStore.ts              # Groups CRUD + invitation/request actions
│   ├── messagesStore.ts            # Chat messages + presence
│   └── broadcastStore.ts           # LiveKit broadcast lifecycle
└── lib/
    ├── api.ts                      # Typed fetch wrapper + all API calls
    └── socket.ts                   # Socket.IO singleton
```

## State Management (Zustand)

### `authStore`

Manages authentication state.

```tsx
import { useAuth } from "@/stores/authStore";

const { user, isAuthenticated, isLoading, login, logout } = useAuth();
```

| Export                 | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| `useAuth()`            | Convenience hook — user, isAuthenticated, isLoading, login, register, logout |
| `useUser()`            | Current user object                                                          |
| `useIsAuthenticated()` | Boolean auth status                                                          |

### `groupsStore`

Groups CRUD, invitation and join request flows.

```tsx
import { useGroupsStore } from "@/stores/groupsStore";

const { myGroups, fetchMyGroups, createGroup, joinGroup, leaveGroup } =
  useGroupsStore();
```

`initSocketListeners()` must be called once after auth — done automatically by `(app)/layout.tsx`.

### `messagesStore`

Real-time chat messages and presence per group.

```tsx
import { useMessagesStore } from "@/stores/messagesStore";

const { joinGroup, leaveGroup, sendMessage, messagesByGroup, presenceByGroup } =
  useMessagesStore();
```

Call `joinGroup(groupId)` when mounting a chat view and `leaveGroup(groupId)` on unmount. Automatically re-joins rooms after a socket reconnect.

### `broadcastStore`

LiveKit broadcast lifecycle — token fetching, socket signaling, room state.

```tsx
import { useBroadcastStore } from "@/stores/broadcastStore";

const {
  activeBroadcastsByGroup, // Record<groupId, boolean> — is there a live broadcast?
  isInBroadcast, // is current user inside the LiveKit room?
  isLoading,
  error,
  startBroadcast, // owner: fetch token + notify group + open room
  joinBroadcast, // member: fetch token + open room
  endBroadcast, // owner: close room + notify group
  leaveBroadcast, // member: leave room (broadcast stays active)
} = useBroadcastStore();
```

## Broadcasting Flow

1. Owner opens a group and clicks **Start Broadcast**
2. Frontend calls `POST /api/livekit/token` — receives a token with `canPublish: true`
3. Socket emits `broadcast_start` → server stores the active broadcast and emits `broadcast_started` to all group members
4. Owner's browser opens the full-screen `BroadcastRoom` with camera/mic/screenshare controls
5. Members see a live indicator and **Join Broadcast** button
6. Member clicks **Join Broadcast** → gets a token with `canPublish: false` (viewer only)
7. Owner clicks **End Broadcast** → `broadcast_end` socket event ends the broadcast for everyone
8. If the owner closes the browser, the server auto-ends the broadcast on socket disconnect
9. A member who leaves can still see **Join Broadcast** and rejoin while the broadcast is active

## Socket Events

The frontend uses a single Socket.IO connection shared across all stores via `lib/socket.ts`.

### Emitted by frontend

| Event             | When                                   |
| ----------------- | -------------------------------------- |
| `join_group`      | ChatBox mounts, or on socket reconnect |
| `leave_group`     | ChatBox unmounts                       |
| `send_message`    | User sends a message                   |
| `broadcast_start` | Owner starts a broadcast               |
| `broadcast_end`   | Owner ends a broadcast                 |

### Received by frontend

| Event               | Handler                                                         |
| ------------------- | --------------------------------------------------------------- |
| `message_history`   | `messagesStore` — loads history into state                      |
| `new_message`       | `messagesStore` — appends message                               |
| `presence_update`   | `messagesStore` — updates online user list                      |
| `notification`      | `groupsStore` — refreshes invitations / requests                |
| `broadcast_started` | `broadcastStore` — shows Join button to members                 |
| `broadcast_ended`   | `broadcastStore` — hides Join button, closes room if viewing    |
| `broadcast_active`  | `broadcastStore` — late joiner learns broadcast is already live |

## Auth Flow

1. `AuthInitializer` calls `checkAuth()` on every page load
2. `checkAuth()` hits `GET /api/auth/session` → `GET /api/auth/me` to restore user from the session cookie
3. `(app)/layout.tsx` redirects to `/login` if not authenticated
4. All API calls use `credentials: 'include'` to send the session cookie
5. Socket.IO connects with `withCredentials: true` — the server rejects unauthenticated connections
