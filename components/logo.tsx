/** Wordmark plus a small three-node mark (language, vision, generative). */
export function Logo() {
  return (
    <span className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-fg">
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <path
          d="M8 9 L24 9 L16 24 Z"
          fill="none"
          stroke="url(#logo-g)"
          strokeWidth="1.6"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <circle cx="8" cy="9" r="3.4" fill="url(#logo-g)" />
        <circle cx="24" cy="9" r="3.4" fill="url(#logo-g)" />
        <circle cx="16" cy="24" r="3.4" fill="url(#logo-g)" />
      </svg>
      Usaha AI
    </span>
  );
}
