import {
    MapPinIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

interface BigCardProps {
    temperature: number;
    description: string;
    icon: string;
    location: string;
    country: string;
}

const BigCard: React.FC<BigCardProps> = ({
    temperature,
    description,
    icon,
    location,
    country,
}) => {
    return (
        <div className="px-5 pt-4 py-10 bg-ocean-800 w-full lg:w-1/3 rounded-md border border-opacity-25 border-ocean-50">
            <div className="p-5">
                <Image
                    src={`https://openweathermap.org/img/wn/${icon}.png`}
                    width={64}
                    height={64}
                    alt="Weather Icon"
                />
            </div>
            <div className="mt-5">
                <h2 className="text-3xl font-semibold">{temperature}&deg;F</h2>
                <p className="text-sm mt-2 capitalize">{description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-5 border-t pt-5">
                <p className="flex">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                    {location}, {country}
                </p>
            </div>
        </div>
    );
};

export default BigCard;
