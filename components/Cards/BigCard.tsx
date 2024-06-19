import { CalendarDaysIcon, MapPinIcon, SunIcon } from "@heroicons/react/20/solid";
import React from "react";

const BigCard = () => {
    return (
        <div className="px-5 pt-4 py-10 bg-ocean-800 w-1/3 rounded-md border border-opacity-25 border-ocean-50">
            <div className="p-5">
                <SunIcon className="w-16 h-16" />
            </div>
            <div className="mt-5">
                <h2 className="text-3xl font-semibold">28.5&deg;F</h2>
                <p className="text-sm mt-2">Subtitle Weather Here</p>
            </div>
            <div className="flex flex-col gap-2 mt-5 border-t pt-5">
                <p className="flex">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                    Location
                </p>
                <p className="flex">
                    <CalendarDaysIcon className="w-5 h-5 mr-1" />
                    Data
                </p>
            </div>
        </div>
    );
};

export default BigCard;
