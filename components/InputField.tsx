import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";

interface InputFieldProps {
    searchRef: React.RefObject<HTMLInputElement>;
    handleSubmit: (inputValue: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ searchRef, handleSubmit }) => {
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter" && !!searchRef.current?.value.trim()) {
            handleSubmit(searchRef.current?.value);
        }
    };

    const handleClick = () => {
        if (!!searchRef.current?.value.trim()) {
            handleSubmit(searchRef.current?.value);
        }
    };
    return (
        <div className="relative w-full flex flex-row">
            <input
                onKeyDown={handleKeyDown}
                ref={searchRef}
                type="text"
                className="bg-ocean-800 outline-none px-9 py-2 pr-4 sm:pr-auto rounded-s-md rounded w-full"
                placeholder="Search..."
            />
            <MagnifyingGlassIcon
                onClick={handleClick}
                className="cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5"
            />
            <button
                className="px-4 py-2 bg-ocean-500 text-white rounded-e-md hidden sm:block"
                onClick={handleClick}
            >
                Search
            </button>
        </div>
    );
};

export default InputField;
