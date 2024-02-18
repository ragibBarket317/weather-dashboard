import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

import ClearSkyImg from "./assets/backgrounds/clearSky.jpg";
import FlewCloudsImg from "./assets/backgrounds/few-clouds.jpg";
import MistImg from "./assets/backgrounds/mist.jpeg";
import RainyDayImg from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImg from "./assets/backgrounds/scattered-clouds.jpg";
import ShowerRainImage from "./assets/backgrounds/shower-rain.jpg";
import ThunderstormImg from "./assets/backgrounds/thunderstorm.jpg";
import WinterImg from "./assets/backgrounds/winter.jpg";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImg;
      case "Clouds":
        return ScatteredCloudsImg;
      case "Clear":
        return ClearSkyImg;
      case "Snow":
        return ShowerRainImage;
      case "Thunder":
        return ThunderstormImg;
      case "Fog":
        return WinterImg;
      case "Mist":
        return MistImg;
      case "Haze":
        return FlewCloudsImg;
      default:
        return ClearSkyImg;
    }
  }

  useEffect(() => {
    const bgImg = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImg);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="bg-gray-300 w-2/4 flex justify-center items-center p-20 mx-auto my-10">
          <p className="text-4xl font-bold">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImage})` }}
          className="bg-body text-light bg-no-repeat bg-cover h-screen grid place-items-center"
        >
          <Header></Header>
          <main>
            <section>
              <WeatherBoard></WeatherBoard>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
