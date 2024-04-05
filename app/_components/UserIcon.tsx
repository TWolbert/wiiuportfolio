import Image from "next/image";
import Link from "next/link";
import skillsthefinals from "@/public/images/skillsthefinals.png";
import mii from "@/public/images/mii.png";

import React from "react";

export default function UserIcon() {
    return <Link
        href={"/"}
        className=" size-20 rounded-2xl overflow-hidden bg-white/30 shadow-inner shadow-white border border-white backdrop-blur-md fixed top-5 left-5 z-20 hover:scale-110 active:scale-95 transition-all"
    >
        <div className="relative">
            <div className=" w-2 h-2 bg-white/90 rounded-full absolute top-2 left-2"></div>
            <div className=" w-[7rem] h-[5rem] bg-white/60 shadow-inner shadow-white rounded-full absolute -top-[3vh] -left-[3vh]"></div>
            <Image src={mii} alt={'Me'} className="rounded-2xl z-30 absolute" />
        </div>

    </Link>;
}
