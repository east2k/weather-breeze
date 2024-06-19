import React from "react";

interface SmallCardProps {
    icon: React.ElementType;
    title: string;
    details: string;
}

const SmallCard: React.FC<SmallCardProps> = ({
    icon: Icon,
    title,
    details,
}) => {
    return (
        <div className="flex flex-row items-center px-10 py-10 bg-ocean-800 rounded-md border border-opacity-25 border-ocean-50 ">
            <div className="mr-5">
                <Icon width={35} />
            </div>
            <div>
                <h3 className="text-ocean-300 text-sm">{title}</h3>
                <p className="text-2xl">{details}</p>
            </div>
        </div>
    );
};

export default SmallCard;
