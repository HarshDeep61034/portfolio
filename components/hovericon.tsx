"use client";
import { useState } from 'react';

export default function Hovericon({ icon, text, onClick }: { icon: JSX.Element, text: string, onClick?: () => void }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
            className="flex flex-col items-center cursor-pointer"
        >
            <div
                className={`relative transition-all duration-200 ${
                    hover ? 'text-[#2fb1a0]' : 'text-black dark:text-white'
                }`}
            >
                {icon}
            </div>
            {hover && (
                <div className="mt-2  transition-all duration-200 absolute top-16 dark:bg-[#222222] px-2 py-1 dark:text-white border-[1px] dark:border-[#353535] text-black bg-white border-[#ebebeb] rounded-lg text-sm">
                    {text}
                </div>
            )}
        </div>
    );
}
