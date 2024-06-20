"use client";

import { useState } from "react";
import Content from "./Content";
import InputField from "./InputField";
import { WeatherData } from "@/constants/types";

const Body: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchData = async (city: string) => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b8a19d1029b8a1fbc85e2c6b5c15dd2&units=imperial`
        );

        const data: WeatherData = await res.json();
        setWeatherData(data);
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between w-full">
                <p className="text-nowrap mr-5">Find your location:</p>
                <InputField />
            </div>
            <div className="mt-10">
                <div className="flex flex-row justify-between mb-5">
                    <h1 className="text-2xl">Weather for Today</h1>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={() => fetchData("Baguio City")}
                    >
                        Refresh
                    </button>
                </div>
                {!weatherData ? (
                    <div>Check your weather now</div>
                ) : (
                    <Content weatherData={weatherData} />
                )}
            </div>
        </>
    );
};

export default Body;
