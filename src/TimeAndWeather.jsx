// okay going to use Open Meteo web api to access weather

import { useState, useEffect } from "react";

const TimeAndWeather = () => {
  console.log("Component rendering");

  const [temp, setTemp] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");

  useEffect(() => {
    // function to update the time
    const updateTime = () => {
      const now = new Date();

      // Format hours and minutes for 24-hour clock (military time)
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      // // format hours for 12-hour clock
      // let hours = now.getHours();
      // const ampm = hours >= 12 ? "PM" : "AM";
      // hours = hours % 12;
      // hours = hours ? hours : 12;

      // // format minutes with leading zero if needed
      // const minutes = now.getMinutes().toString().padStart(2, "0");

      // set the formatted time
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000); // updates every minute 1 min = 60000 millisec

    // Toronto coordinates
    const latitude = 43.7001;
    const longitude = -79.4163;

    // URL with only temperature parameter
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=America/Toronto`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const temperature = Math.round(data.current.temperature_2m);
        console.log("Temperature value:", data.current.temperature_2m);

        setTemp(temperature);
      })
      .catch((error) => {
        // handle error
        console.error("Error fetching weather data:", error);
      });

    // clean up interval when component unmounts
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="font-mono text-loveBlue tracking-widest ml-8 text-sm sm:text-base">
      + TORONTO CANADA + {currentTime} <br />
      {temp} DEGREES
    </div>
  );
};

export default TimeAndWeather;
