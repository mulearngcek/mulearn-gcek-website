/**
 * Hand-crafted SVG illustrations for the Home page.
 * Flat/modern style using the μLearn brand palette.
 */

/* ------------------------------------------------------------------ */
/*  Hero illustration — students collaborating with technology          */
/* ------------------------------------------------------------------ */

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background shape — soft rounded blob */}
      <ellipse cx="260" cy="210" rx="240" ry="190" fill="#f5f3ff" />

      {/* Desk / table surface */}
      <rect x="80" y="250" width="360" height="12" rx="6" fill="#ede9fe" />
      <rect x="100" y="262" width="8" height="80" rx="4" fill="#ddd6fe" />
      <rect x="412" y="262" width="8" height="80" rx="4" fill="#ddd6fe" />

      {/* ---- Student left (sitting, typing) ---- */}
      {/* Body */}
      <rect x="110" y="200" width="60" height="52" rx="12" fill="#7c3aed" />
      {/* Head */}
      <circle cx="140" cy="178" r="24" fill="#fcd9b6" />
      {/* Hair */}
      <path
        d="M116 172c0-16 10-28 24-28s24 12 24 28c0 2-8 2-24 2s-24 0-24-2z"
        fill="#3d2c1e"
      />
      {/* Eyes */}
      <circle cx="132" cy="180" r="2.5" fill="#3d2c1e" />
      <circle cx="148" cy="180" r="2.5" fill="#3d2c1e" />
      {/* Smile */}
      <path
        d="M133 188c2 2 6 2 8 0"
        stroke="#3d2c1e"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Arms reaching to laptop */}
      <rect x="140" y="220" width="40" height="10" rx="5" fill="#fcd9b6" />

      {/* Laptop left */}
      <rect x="130" y="234" width="60" height="4" rx="2" fill="#a78bfa" />
      <rect x="136" y="216" width="48" height="20" rx="4" fill="#6d28d9" />
      {/* Screen content — code lines */}
      <rect x="142" y="222" width="20" height="2" rx="1" fill="#c4b5fd" />
      <rect x="142" y="227" width="30" height="2" rx="1" fill="#a78bfa" />
      <rect x="142" y="232" width="14" height="2" rx="1" fill="#c4b5fd" />

      {/* ---- Student center (standing, presenting) ---- */}
      {/* Body */}
      <rect x="230" y="180" width="60" height="72" rx="14" fill="#8b5cf6" />
      {/* Head */}
      <circle cx="260" cy="155" r="26" fill="#c68642" />
      {/* Hair */}
      <path
        d="M234 148c0-18 12-32 26-32s26 14 26 32c0 3-10 3-26 3s-26 0-26-3z"
        fill="#1a1a2e"
      />
      {/* Eyes */}
      <circle cx="252" cy="157" r="2.5" fill="#1a1a2e" />
      <circle cx="268" cy="157" r="2.5" fill="#1a1a2e" />
      {/* Smile */}
      <path
        d="M253 165c2 2 6 2 8 0"
        stroke="#1a1a2e"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Arm pointing up */}
      <rect
        x="286"
        y="185"
        width="36"
        height="10"
        rx="5"
        fill="#c68642"
        transform="rotate(-30 286 185)"
      />

      {/* Whiteboard / screen behind center student */}
      <rect x="220" y="100" width="80" height="60" rx="6" fill="white" stroke="#ede9fe" strokeWidth="2" />
      {/* Screen content — diagram */}
      <circle cx="248" cy="124" r="8" fill="#ede9fe" />
      <circle cx="272" cy="124" r="8" fill="#ede9fe" />
      <line x1="256" y1="124" x2="264" y2="124" stroke="#c4b5fd" strokeWidth="1.5" />
      <rect x="240" y="140" width="40" height="4" rx="2" fill="#ddd6fe" />

      {/* ---- Student right (with tablet) ---- */}
      {/* Body */}
      <rect x="350" y="200" width="60" height="52" rx="12" fill="#2563eb" />
      {/* Head */}
      <circle cx="380" cy="178" r="24" fill="#fcd9b6" />
      {/* Hair — long */}
      <path
        d="M356 172c0-16 10-28 24-28s24 12 24 28c0 2-8 2-24 2s-24 0-24-2z"
        fill="#5c3317"
      />
      <path d="M356 172c-2 10-2 20 0 28" stroke="#5c3317" strokeWidth="6" strokeLinecap="round" />
      <path d="M404 172c2 10 2 20 0 28" stroke="#5c3317" strokeWidth="6" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="372" cy="180" r="2.5" fill="#5c3317" />
      <circle cx="388" cy="180" r="2.5" fill="#5c3317" />
      {/* Smile */}
      <path
        d="M373 188c2 2 6 2 8 0"
        stroke="#5c3317"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Arms holding tablet */}
      <rect x="360" y="220" width="36" height="10" rx="5" fill="#fcd9b6" />

      {/* Tablet */}
      <rect x="365" y="228" width="32" height="24" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" />
      {/* Tablet screen */}
      <rect x="369" y="232" width="24" height="16" rx="2" fill="white" />
      <rect x="373" y="236" width="16" height="2" rx="1" fill="#93c5fd" />
      <rect x="373" y="241" width="10" height="2" rx="1" fill="#bfdbfe" />

      {/* ---- Decorative floating elements ---- */}

      {/* μ symbol — top left */}
      <g transform="translate(60, 80)">
        <circle cx="0" cy="0" r="22" fill="#ede9fe" />
        <text
          x="0"
          y="7"
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
          fill="#7c3aed"
        >
          μ
        </text>
      </g>

      {/* Lightbulb — top right */}
      <g transform="translate(440, 70)">
        <circle cx="0" cy="0" r="18" fill="#fef3c7" />
        <path
          d="M-6 2v8M6 2v8M-3 12h6"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M-5-6a7 7 0 0 1 10 0"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <line x1="0" y1="-10" x2="0" y2="-16" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="-8" x2="12" y2="-12" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-8" y1="-8" x2="-12" y2="-12" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Code brackets — left middle */}
      <g transform="translate(48, 180)">
        <text
          fontSize="28"
          fontFamily="monospace"
          fill="#c4b5fd"
          fontWeight="bold"
        >
          {'</>'}
        </text>
      </g>

      {/* Chat bubbles — right */}
      <g transform="translate(450, 180)">
        <rect x="0" y="0" width="32" height="18" rx="9" fill="#ede9fe" />
        <rect x="4" y="6" width="16" height="2" rx="1" fill="#c4b5fd" />
        <rect x="4" y="10" width="10" height="2" rx="1" fill="#ddd6fe" />
      </g>

      {/* Plant / growth — bottom left */}
      <g transform="translate(70, 310)">
        <rect x="-4" y="0" width="8" height="14" rx="4" fill="#ddd6fe" />
        <path
          d="M0 0c-8-10-4-20 0-24"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0-8c6-4 12-2 14 4"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M0-14c-5-3-10-1-12 3"
          stroke="#86efac"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Plant / growth — bottom right */}
      <g transform="translate(450, 310)">
        <rect x="-4" y="0" width="8" height="14" rx="4" fill="#ddd6fe" />
        <path
          d="M0 0c4-12 2-22 0-26"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="0" cy="-28" r="4" fill="#86efac" />
        <circle cx="6" cy="-22" r="3" fill="#22c55e" />
        <circle cx="-5" cy="-20" r="2.5" fill="#bbf7d0" />
      </g>

      {/* Star / sparkles — scattered */}
      <g transform="translate(160, 80)">
        <path d="M0-6L1.5-1.5 6 0 1.5 1.5 0 6-1.5 1.5-6 0-1.5-1.5z" fill="#fbbf24" />
      </g>
      <g transform="translate(380, 100)">
        <path d="M0-5L1.2-1.2 5 0 1.2 1.2 0 5-1.2 1.2-5 0-1.2-1.2z" fill="#c4b5fd" />
      </g>
      <g transform="translate(300, 60)">
        <path d="M0-4L1-1 4 0 1 1 0 4-1 1-4 0-1-1z" fill="#fcd9b6" />
      </g>

      {/* Small connecting dots — community feel */}
      <circle cx="200" cy="320" r="3" fill="#ede9fe" />
      <circle cx="320" cy="318" r="3" fill="#ede9fe" />
      <line x1="203" y1="320" x2="317" y2="318" stroke="#ede9fe" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Small decorative μMark for section dividers                        */
/* ------------------------------------------------------------------ */

export function MuDecorative({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="20" fill="#f5f3ff" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
        fill="#7c3aed"
      >
        μ
      </text>
    </svg>
  );
}
