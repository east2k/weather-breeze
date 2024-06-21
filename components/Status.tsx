interface StatusProps {
    label: string;
    icon: React.ElementType;
}

const Status: React.FC<StatusProps> = ({ label, icon: Icon }) => {
    return (
        <div className="flex flex-row items-center w-full justify-center">
            <p className="mr-1">{label}</p>
            <Icon className="animate-spin w-4 h-4" />
        </div>
    );
};

export default Status;
