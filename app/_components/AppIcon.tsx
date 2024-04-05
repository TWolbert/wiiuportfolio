import Image, { StaticImageData } from "next/image"
import Link from "next/link"

export default function AppIcon({ image, title }: { image: StaticImageData, title: string }) { 
    // Wii U App Icon
    return (
        <Link href={'/'} className=" bg-white/30 backdrop-blur-md hover:border-cyan-400 active:scale-95 active:shadow-xl hover:z-10 active:shadow-cyan-400 rounded-3xl hover:scale-110 h-full w-fit p-2 border group relative overflow-hidden border-white shadow-white shadow-inner hover:bg-cyan-400 transition-all">
            <div className="absolute -top-[20%] -left-[20%] w-[20vw] h-[20vh] rounded-full bg-zinc-300/30 group-hover:hidden z-0" />
            <div className="h-max-content rounded-2xl select-none relative overflow-hidden">
            <Image src={image} alt={title} className="aspect-square h-[20vh] w-[20vh] object-contain dotted-background" />
            <div className="absolute bottom-0 antialiased left-0 items-center justify-center w-full flex bg-transparent group-hover:bg-cyan-400 transition-all">
                <p className=" font-outline-2 opacity-0 group-hover:opacity-100 text-3xl transition-all text-white">{title}</p>
            </div>
            </div>

        </Link>
    )
}