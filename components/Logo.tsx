import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link href="/" className={`inline-flex items-center select-none ${className}`}>
      {/* Icon mark — teal shield / lock shape */}
      <svg
        width={size === "sm" ? 28 : size === "md" ? 36 : 52}
        height={size === "sm" ? 28 : size === "md" ? 36 : 52}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        aria-hidden="true"
      >
        {/* Gradient definition */}
        <defs>
          <linearGradient id="synfin-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00BFB3" />
            <stop offset="100%" stopColor="#0A7EC4" />
          </linearGradient>
        </defs>
        {/* Shield shape */}
        <path
          d="M20 3L5 9v10c0 8.5 6.4 16.4 15 18.4C28.6 35.4 35 27.5 35 19V9L20 3z"
          fill="url(#synfin-grad)"
        />
        {/* Lock body */}
        <rect x="13" y="20" width="14" height="10" rx="2" fill="white" fillOpacity="0.95" />
        {/* Lock shackle */}
        <path
          d="M15 20v-3a5 5 0 0 1 10 0v3"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.95"
        />
        {/* Keyhole */}
        <circle cx="20" cy="25" r="1.8" fill="#00BFB3" />
      </svg>

      {/* Wordmark */}
      <span className={`font-bold tracking-tight leading-none ${sizes[size]}`}>
        <span className="text-gray-900">Syn</span>
        <span style={{ color: "#00BFB3" }}>Fin</span>
      </span>
    </Link>
  );
}
