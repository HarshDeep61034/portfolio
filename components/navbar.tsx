"use client";
import {
    FolderCodeIcon,
    HomeIcon,
    MoonIcon,
    NewspaperIcon,
    Notebook,
    SunIcon,
} from "lucide-react";
import Hovericon from "./hovericon";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const ICON_SIZE = 22;
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const router = useRouter();

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div
            className={`fixed flex justify-center top-0 left-0 right-0 z-50 transition-transform duration-300 ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="flex w-full md:w-2/5 mx-6 my-3 p-4 justify-between rounded-3xl bg-white dark:bg-[#222222] border-[1px] border-[#ebebeb] dark:border-[#353535]">
                <div className="flex w-1/2 md:w-1/3 justify-between">
                    <Hovericon
                        icon={<HomeIcon size={ICON_SIZE} />}
                        text="Home"
                        onClick={() => router.push("/")}
                    />
                    <Hovericon
                        icon={<FolderCodeIcon size={ICON_SIZE} />}
                        text="Projects"
                        onClick={() => router.push("/projects")}
                    />
                    <Hovericon
                        icon={<NewspaperIcon size={ICON_SIZE} />}
                        text="Articles"
                        onClick={() => router.push("/articles")}
                    />
                    <Hovericon
                        icon={<Notebook size={ICON_SIZE} />}
                        text="Journal"
                        onClick={() => router.push("/journal")}
                    />
                </div>

                <div className="flex justify-center items-center">
                    {currentTheme === "light" ? (
                        <Hovericon
                            icon={<MoonIcon size={ICON_SIZE} />}
                            text="Theme"
                            onClick={() => setTheme("dark")}
                        />
                    ) : (
                        <Hovericon
                            icon={<SunIcon size={ICON_SIZE} />}
                            text="Theme"
                            onClick={() => setTheme("light")}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
