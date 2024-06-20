export interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    wind: {
        speed: number;
        gust?: number;
    };
}
