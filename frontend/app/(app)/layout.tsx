'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ReusableNavbarForThree from '../components/ReusableNavbarForThree';

function formatTimeRemaining(expiresAt: string): string {
  const ms = new Date(expiresAt).getTime() - Date.now();
  if (ms <= 0) return 'expired';
  const totalMinutes = Math.floor(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  
  const pathname = usePathname();
  

  return (
    <div className="min-h-screen bg-surface">
      <ReusableNavbarForThree
          mobileLinks={[
            { label: "Ana Sayfa", href: "/irsad-home" },
            { label: "Kısas'ul Enbiya, Türkçe", href: "/kisas-trk" },
            { label: "Qisas al-anbiya, Özbekça", href: "/qisas-uzb" },
            { label: "Döküman Yönetimi", href: "/irsad-docs" },
            { label: "Öğrenme Platformu", href: "/ogrenme-platformu" },
          ]}
        />
      <div className='h-[30px]'></div>
      <main className="">{children}</main>
      <div className='h-[80px]'></div>
    </div>
  );
}
