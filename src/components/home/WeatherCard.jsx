const ICONS = {
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />,
  cloud: <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
  partly: (
    <>
      <path d="M7 3.5V2M2.6 5.6L1.5 4.5M1.5 10H0M12.4 5.6l1.1-1.1" />
      <path d="M5 11a3 3 0 015.2-2" />
      <path d="M6 20a3.5 3.5 0 010-7 4.5 4.5 0 018.6-1A4 4 0 0116 20z" />
    </>
  ),
  fog: <path d="M4 8h16M2 12h20M5 16h14M8 20h8" />,
  rain: (
    <>
      <path d="M3 13a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 13z" />
      <path d="M8 19l-1 3M12 19l-1 3M16 19l-1 3" />
    </>
  ),
  snow: (
    <>
      <path d="M3 13a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 13z" />
      <path d="M8 20h.01M12 22h.01M16 20h.01" />
    </>
  ),
  storm: (
    <>
      <path d="M3 13a4 4 0 004 4h2M16 17a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096" />
      <path d="M13 12l-3 5h4l-3 5" />
    </>
  ),
};

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
      {label}
    </div>
    <div className="mt-0.5 text-sm font-medium text-foreground">{value}</div>
  </div>
);

const WeatherCard = ({ temp, condition, icon = "cloud", high, low, wind, humidity, visibility }) => {
  return (
    <div className="flex w-full max-w-xs flex-col p-2">
      <div className="mt-2 flex items-center justify-center gap-5">
        <svg
          className="h-20 w-20 flex-shrink-0 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {ICONS[icon] || ICONS.cloud}
        </svg>
        <div className="flex flex-col">
          <div className="font-serif text-6xl font-medium leading-none tracking-tight">{temp}</div>
          <div className="mt-2 text-sm text-foreground/80">{condition}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">
            H {high} · L {low}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-row justify-between border-t border-border pt-4">
        <Stat label="Wind" value={wind} />
        <Stat label="Humidity" value={humidity} />
        <Stat label="Visibility" value={visibility} />
      </div>
    </div>
  );
};

export default WeatherCard;
