export function WaveDivider({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`block h-16 w-full sm:h-24 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d="M0,60 C240,110 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" fill={fill} />
    </svg>
  );
}

export function BrushDivider({ fill }: { fill: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className="block h-12 w-full sm:h-20"
    >
      <path d="M0 40C160 65 320 20 480 40C640 60 800 25 960 40C1120 55 1280 30 1440 40V80H0V40Z" fill={fill} />
      <path d="M0 50C180 30 360 60 540 45C720 30 900 55 1080 42C1260 29 1350 50 1440 45V80H0V50Z" fill={fill} opacity="0.5" />
    </svg>
  );
}

export function MultiWaveDivider() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="block h-12 w-full sm:h-20"
    >
      <path d="M0 100V60C120 80 240 40 360 30C480 20 600 50 720 55C840 60 960 35 1080 25C1200 15 1320 45 1440 55V100H0Z" fill="#0B3C1A" />
      <path d="M0 100V70C180 50 360 80 540 75C720 70 900 40 1080 45C1260 50 1380 65 1440 70V100H0Z" fill="#0B3C1A" opacity="0.6" />
    </svg>
  );
}
