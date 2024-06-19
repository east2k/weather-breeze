import Body from "@/components/Body";
import InputField from "@/components/InputField";

export default function Home() {
    return (
        <main className="mx-auto mt-10 bg-ocean-950 w-[90%] rounded-md px-10 py-5">
            <div className="flex flex-row items-center justify-between w-full">
                <p className="text-nowrap mr-5">Find your location:</p>
                <InputField />
            </div>
            <div className="mt-10">
                <h1 className="text-2xl mb-5">Weather for Today</h1>
                <Body  />
            </div>
        </main>
    );
}
