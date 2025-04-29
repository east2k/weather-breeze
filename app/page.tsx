import Body from "@/components/Body";
import { WeatherData } from "@/constants/types";

export default async function Home() {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Baguio&appid=6b8a19d1029b8a1fbc85e2c6b5c15dd2&units=imperial`
    );
    const initialCity: WeatherData = await res.json();
    
    return (
        <main className="mx-auto my-10 bg-ocean-950 w-[90%] rounded-md px-4 sm:px-10 py-5">
            <Body initialCity={initialCity} />
        </main>
    );
}
