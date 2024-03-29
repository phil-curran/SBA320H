export async function getWeatherData() {
  let apiKey =
    localStorage.getItem("api_key") ||
    import.meta.env.VITE_API_KEY ||
    "ed3a126ff6d2bf3265efc688d85505cb";
  const lat = "47.726381";
  const lon = "-122.243679";
  try {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
