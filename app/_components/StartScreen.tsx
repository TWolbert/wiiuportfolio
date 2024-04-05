"use client";

import Image from "next/image";
import teunNintendo from "@/public/images/teunNintendo.png"
import StartupSoundPlayer from "./startupSoundPlayer";
import { useEffect } from "react";
import TeunText from "@/public/images/TeunText.png"
import WText from "@/public/images/WText.png"

export default function StartScreen() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        window.onclick = () => { 
            // if Intro Screen doesnt exist anymore, return
            if (!document.getElementById("introScreen")) return;
            (document.getElementById("clickToStart") as HTMLElement).style.display = "none";
            setTimeout(() => {
                const player = document.getElementById("startupPlayer") as HTMLAudioElement;
    
                player.play();
                const nintendoLogo = document.getElementById("nintendoLogo") as HTMLImageElement;
                const wiiuLogo = document.getElementById("WiiULogo") as HTMLElement;
                nintendoLogo.style.opacity = "0";
                wiiuLogo.style.opacity = "1";

                setTimeout(() => {
                    (document.getElementById("introScreen") as HTMLElement).style.opacity = "0";
                    (document.getElementById("cursor") as HTMLElement).style.opacity = "1";
                }, 8000);

                player.onended = () => { 
                    (document.getElementById("introScreen") as HTMLElement).remove();
                }
            }, 1000);
        }
    }, [])
    return (
        <div className="flex user-select-none pointer-events-none min-h-screen flex-col items-center justify-center p-2 font-wiiu h-full fixed z-10 transition-all duration-1000 bg-white w-full" id="introScreen">
            <Image src={teunNintendo} height={150} alt="TeunW U" id="nintendoLogo" className="fixed transition-all duration-1000" />
            <div id="WiiULogo" className="text-3xl scale-[300%] transition-all duration-1000 flex gap-1" style={{ opacity: 0 }}>
                <Image src={TeunText} height={50} alt="Teun" />
                <Image src={WText} height={37} className=" h-fit" alt="W" />
            </div>
            <p className=" fixed bottom-10 text-3xl" id="clickToStart">Click to start</p>
            <StartupSoundPlayer />
        </div>
    );
}
