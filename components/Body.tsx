
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

interface SmallCardDetail {
    icon: React.ElementType;
    title: string;
    details: string;
}

const Body = () => {
    const smallCardDetails: SmallCardDetail[] = [
        {
            icon: FlagIcon,
            title: "Wind Speed",
            details: "5 km",
        },
        {
            icon: CloudIcon,
            title: "Gust",
            details: "10 km",
        },
        {
            icon: NewspaperIcon,
            title: "Pressure",
            details: "1008 hPa",
        },
        {
            icon: SignalIcon,
            title: "Humidity",
            details: "48%",
        },
        {
            icon: ArrowDownIcon,
            title: "Minimum Temperature",
            details: "5 °F",
        },
        {
            icon: ArrowUpIcon,
            title: "Maximum Temperature",
            details: "80 °F",
        },
    ];
    return (
        <div className="flex flex-nowrap gap-5">
            <BigCard />
            <div className="grid w-2/3 grid-cols-2 gap-5">
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

export default Body;