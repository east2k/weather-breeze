import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

const InputField = () => {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="bg-ocean-800 outline-none px-9 py-2 rounded-md w-full"
                placeholder="Search..."
            />
            <MagnifyingGlassIcon className="cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5" />
        </div>
    );
};

export default InputField;
