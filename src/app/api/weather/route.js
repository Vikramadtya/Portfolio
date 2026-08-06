import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    console.warn("WEATHER_API_KEY is missing. Returning graceful fallback.");
    return NextResponse.json({ error: "Missing WEATHER_API_KEY" });
  }

  // Delhi coordinates
  const lat = 28.6139;
  const lon = 77.2090;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      throw new Error(`OpenWeatherMap API error: ${res.status}`);
    }

    const data = await res.json();

    // Transform OpenWeatherMap response to match WeatherCard expected props
    const formattedWeather = {
      temp: `${Math.round(data.main.temp)}°`,
      condition: data.weather[0]?.main || "Clear",
      high: `${Math.round(data.main.temp_max)}°C`,
      low: `${Math.round(data.main.temp_min)}°C`,
      wind: `${Math.round(data.wind.speed * 3.6)}k/h`, // convert m/s to km/h
      humidity: `${data.main.humidity}%`,
      visibility: `${Math.round(data.visibility / 1000)}km`,
    };

    return NextResponse.json(formattedWeather);
  } catch (error) {
    console.error("Error fetching weather:", error);
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: 500 });
  }
}
