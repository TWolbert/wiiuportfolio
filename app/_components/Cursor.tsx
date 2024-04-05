"use client";

import cursor from "@/public/images/cursor.png";
import Image from "next/image";
import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => { 
        if (typeof window === "undefined") return;
        const cursor = document.getElementById("cursor") as HTMLImageElement;
        window.onmousemove = (e) => { 
            cursor.style.left = `${e.clientX - 25}px`;
            cursor.style.top = `${e.clientY - 25}px`;
        }
    }, [])

    return (
        <Image src={cursor} height={50} width={50} style={{ opacity: 0 }} alt="Cursor" id="cursor" className="fixed pointer-events-none z-50 antialiased" />
    )
}