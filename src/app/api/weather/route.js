import { NextResponse } from "next/server";

// Delhi. Open-Meteo is free and needs no API key, so the Now page works out of the box.
const LAT = 28.6139;
const LON = 77.209;
const TIMEZONE = "Asia/Kolkata";

// WMO weather interpretation codes -> label + icon kind used by WeatherCard
const describe = (code, isDay) => {
  if (code === 0) return { condition: "Clear", icon: isDay ? "sun" : "moon" };
  if (code === 1) return { condition: "Mostly clear", icon: isDay ? "sun" : "moon" };
  if (code === 2) return { condition: "Partly cloudy", icon: "partly" };
  if (code === 3) return { condition: "Overcast", icon: "cloud" };
  if (code === 45 || code === 48) return { condition: "Fog", icon: "fog" };
  if (code >= 51 && code <= 57) return { condition: "Drizzle", icon: "rain" };
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82))
    return { condition: "Rain", icon: "rain" };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86)
    return { condition: "Snow", icon: "snow" };
  if (code >= 95) return { condition: "Thunderstorm", icon: "storm" };
  return { condition: "Cloudy", icon: "cloud" };
};

export async function GET() {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,is_day` +
    `&daily=temperature_2m_max,temperature_2m_min&hourly=visibility` +
    `&timezone=${encodeURIComponent(TIMEZONE)}&forecast_days=1`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } }); // cache for 10 minutes
    if (!res.ok) throw new Error(`Open-Meteo error: ${res.status}`);
    const data = await res.json();

    const current = data.current;
    const { condition, icon } = describe(current.weather_code, current.is_day === 1);

    // visibility is hourly; pick the entry for the current hour
    const hour = current.time.slice(0, 13);
    const idx = data.hourly.time.findIndex((t) => t.startsWith(hour));
    const visibilityM = idx >= 0 ? data.hourly.visibility[idx] : null;

    return NextResponse.json({
      temp: `${Math.round(current.temperature_2m)}°`,
      condition,
      icon,
      high: `${Math.round(data.daily.temperature_2m_max[0])}°C`,
      low: `${Math.round(data.daily.temperature_2m_min[0])}°C`,
      wind: `${Math.round(current.wind_speed_10m)} km/h`,
      humidity: `${current.relative_humidity_2m}%`,
      visibility: visibilityM == null ? "—" : `${Math.round(visibilityM / 1000)} km`,
      updatedAt: current.time,
    });
  } catch (error) {
    console.error("Error fetching weather:", error);
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: 500 });
  }
}
