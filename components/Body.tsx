"use client";

import Content from "./Content";
import InputField from "./InputField";
import useHandleFetchData from "@/hooks/useHandleFetchData";
import { WeatherData } from "@/constants/types";
import {
    ArrowPathIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import Status from "./Status";

interface BodyProps {
    initialCity: WeatherData;
}

const Body: React.FC<BodyProps> = ({ initialCity }) => {
    const { handleSubmit, weatherData, searchRef, loading, error } =
        useHandleFetchData(initialCity);

    return (
        <>
            <div className="flex flex-col items-start md:items-center justify-between w-full md:flex-row">
                <p className="text-nowrap mr-5">Find your location:</p>
                <InputField searchRef={searchRef} handleSubmit={handleSubmit} />
            </div>
            <div className="mt-10">
                {error && (
                    <Status
                        label="An unnexpected error has occured"
                        icon={ExclamationTriangleIcon}
                    />
                )}
                <div className="flex flex-row justify-between mb-5">
                    <h1 className="text-2xl">
                        Weather for Today
                        {weatherData && <> in {weatherData.name}</>}
                    </h1>
                </div>
                {loading ? (
                    <Status label="Loading" icon={ArrowPathIcon} />
                ) : (
                    <>
                        {!weatherData ? (
                            <p>
                                The place &#xFF02;{searchRef.current?.value}
                                &#xFF02; does not exist.
                            </p>
                        ) : (
                            <Content weatherData={weatherData} />
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Body;
