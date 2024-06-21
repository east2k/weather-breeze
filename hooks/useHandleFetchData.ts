import { WeatherData } from "@/constants/types";
import { useRef, useState } from "react";

const useHandleFetchData = (initialCity: WeatherData) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(
        initialCity
    );
    const searchRef = useRef<HTMLInputElement>(null);

    const fetchData = async (city: string) => {
        try {
            setLoading(true);
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b8a19d1029b8a1fbc85e2c6b5c15dd2&units=imperial`
            );

            const data: WeatherData = await res.json();
            if (data?.message) {
                setWeatherData(null);
                setLoading(false);
                return;
            }
            setWeatherData(data);
            setLoading(false);
        } catch (e) {
            setError(true);
        }
    };

    const handleSubmit = (inputValue: string): void => {
        const city = inputValue;
        if (city) {
            fetchData(city);
        }
    };
    return {
        handleSubmit,
        weatherData,
        fetchData,
        loading,
        error,
        searchRef,
    };
};

export default useHandleFetchData;
