import React from "react";
import BigCard from "./Cards/BigCard";
import SmallCard from "./Cards/SmallCard";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    CloudIcon,
    FlagIcon,
    NewspaperIcon,
    SignalIcon,
} from "@heroicons/react/20/solid";
import { WeatherData } from "@/constants/types";

interface SmallCardDetail {
    icon: React.ElementType;
    title: string;
    details: string;
}

interface ContentProps {
    weatherData: WeatherData;
}

const Content: React.FC<ContentProps> = ({ weatherData }) => {
    const smallCardDetails: SmallCardDetail[] = [
        {
            icon: FlagIcon,
            title: "Wind Speed",
            details: `${weatherData.wind.speed} km`,
        },
        {
            icon: CloudIcon,
            title: "Gust",
            details: `${weatherData.wind.gust || "N/A"} km`,
        },
        {
            icon: NewspaperIcon,
            title: "Pressure",
            details: `${weatherData.main.pressure} hPa`,
        },
        {
            icon: SignalIcon,
            title: "Humidity",
            details: `${weatherData.main.humidity}%`,
        },
        {
            icon: ArrowDownIcon,
            title: "Minimum Temperature",
            details: `${weatherData.main.temp_min} °F`,
        },
        {
            icon: ArrowUpIcon,
            title: "Maximum Temperature",
            details: `${weatherData.main.temp_max} °F`,
        },
    ];

    return (
        <div className="flex flex-nowrap gap-5 flex-col lg:flex-row">
            <BigCard
                temperature={weatherData.main.temp}
                description={weatherData.weather[0].description}
                icon={weatherData.weather[0].icon}
                location={weatherData.name}
                country={weatherData.sys.country}
            />
            <div className="grid w-full lg:w-2/3 grid-cols-1 sm:grid-cols-2 gap-5 ">
                {smallCardDetails.map((item, index) => (
                    <SmallCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
