// components/AS.tsx

type ASProps = {
  className?: string;
};

export default function AS({ className = "" }: ASProps) {
  return (
    <span
      className={`as-symbol ${className}`}
      title="عليه السلام"
      aria-label="عليه السلام"
    >
      u
    </span>
  );
}