export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="50" cy="50" r="46" stroke="url(#logoGrad)" strokeWidth="3" />
      {/* Pulse wave */}
      <path
        d="M15 50 L30 50 L36 30 L44 70 L52 25 L60 65 L66 40 L70 50 L85 50"
        stroke="url(#logoGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner glow dot */}
      <circle cx="50" cy="50" r="4" fill="#00D4FF" opacity="0.8" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#6C3CE1" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
