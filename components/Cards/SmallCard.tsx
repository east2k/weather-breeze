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
        <div className="flex flex-col md:flex-row px-10 py-4 md:py-10 bg-ocean-800 rounded-md border border-opacity-25 border-ocean-50 ">
            <div className="md:mr-5 flex justify-center items-center mr-0">
                <Icon width={35} />
            </div>
            <div>
                <h3 className="text-ocean-300 text-sm text-center md:text-left">{title}</h3>
                <p className="text-2xl text-center md:text-left">{details}</p>
            </div>
        </div>
    );
};

export default SmallCard;
