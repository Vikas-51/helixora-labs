type HelixoraLogoProps = {
  variant?: "dark" | "light";
};

export function HelixoraLogo({
  variant = "dark",
}: HelixoraLogoProps) {
  const isLight = variant === "light";

  return (
    <span className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="helixora-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#1a6fd4" />
          </linearGradient>
        </defs>

        <g transform="translate(250,250)">
          <g
            stroke="url(#helixora-gradient)"
            strokeWidth="34"
            strokeLinecap="round"
            fill="none"
          >
            <line x1="0" y1="0" x2="0" y2="-95" />
            <line x1="0" y1="0" x2="0" y2="95" />
            <line x1="0" y1="0" x2="-95" y2="0" />
            <line x1="0" y1="0" x2="95" y2="0" />
            <line x1="0" y1="0" x2="-67" y2="-67" />
            <line x1="0" y1="0" x2="67" y2="-67" />
            <line x1="0" y1="0" x2="-67" y2="67" />
            <line x1="0" y1="0" x2="67" y2="67" />
          </g>

          <circle cx="0" cy="0" r="30" fill="url(#helixora-gradient)" />

          <circle cx="0" cy="-95" r="20" fill="url(#helixora-gradient)" />
          <circle cx="0" cy="95" r="20" fill="url(#helixora-gradient)" />
          <circle cx="-95" cy="0" r="20" fill="url(#helixora-gradient)" />
          <circle cx="95" cy="0" r="20" fill="url(#helixora-gradient)" />

          <circle cx="-67" cy="-67" r="20" fill="url(#helixora-gradient)" />
          <circle cx="67" cy="-67" r="20" fill="url(#helixora-gradient)" />
          <circle cx="-67" cy="67" r="20" fill="url(#helixora-gradient)" />
          <circle cx="67" cy="67" r="20" fill="url(#helixora-gradient)" />

          <circle cx="0" cy="-150" r="16" fill="url(#helixora-gradient)" />
          <circle cx="0" cy="150" r="16" fill="url(#helixora-gradient)" />
          <circle cx="-150" cy="0" r="16" fill="url(#helixora-gradient)" />
          <circle cx="150" cy="0" r="16" fill="url(#helixora-gradient)" />

          <circle
            cx="-106"
            cy="-106"
            r="16"
            fill="url(#helixora-gradient)"
          />
          <circle
            cx="106"
            cy="-106"
            r="16"
            fill="url(#helixora-gradient)"
          />
          <circle
            cx="-106"
            cy="106"
            r="16"
            fill="url(#helixora-gradient)"
          />
          <circle
            cx="106"
            cy="106"
            r="16"
            fill="url(#helixora-gradient)"
          />
        </g>
      </svg>

      <span>
        <span
          className={`block font-display text-lg font-semibold leading-none tracking-normal ${
            isLight ? "text-bone" : "text-ink"
          }`}
        >
          Helixora
        </span>

        <span
          className={`block text-[10px] font-bold uppercase tracking-[0.26em] ${
            isLight ? "text-bone/45" : "text-ink/38"
          }`}
        >
          Labs
        </span>
      </span>
    </span>
  );
}