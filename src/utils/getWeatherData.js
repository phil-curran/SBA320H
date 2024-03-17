export async function getWeatherData() {
  try {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=47.6061&lon=-122.3328&appid=ed3a126ff6d2bf3265efc688d85505cb`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
