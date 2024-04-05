import AppIcon from "./_components/AppIcon";
import BGVideo from "./_components/bgVideo";
import Cursor from "./_components/Cursor";
import StartScreen from "./_components/StartScreen";
import tjeccoLogo from "@/public/images/tjecco_logo.jpg"
import skillsthefinals from "@/public/images/skillsthefinals.png"
import ROCvT from "@/public/images/ROCvT.png"
import github from "@/public/images/github.png"
import linkedin from "@/public/images/linkedin.png"
import twitter from "@/public/images/twitter.png"
import UserIcon from "./_components/UserIcon";
import typescript from "@/public/images/typescript.svg"
import cslogo from "@/public/images/cslogo.png"
import PHP from "@/public/images/PHP.png"
import laravel from "@/public/images/laravel.jpg"
import nextjs from "@/public/images/nextjs.png"
import vuejs from "@/public/images/vuejs.png"
import aspnet from "@/public/images/aspnet.png"
import nodejs from "@/public/images/nodejs.png"
import tailwind from "@/public/images/tailwind.png"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-2 font-wiiu h-full">
            { /*             <StartScreen /> */}
            <UserIcon />
            <BGVideo />
            <main className=" grid grid-cols-5 grid-rows-3 gap-5 h-full justify-center p-20">
                <AppIcon title="tjecco" image={tjeccoLogo} />
                <AppIcon title="LinkedIn" image={linkedin} />
                <AppIcon title="Twitter" image={twitter} />
                <AppIcon title="Typescript" image={typescript} />
                <AppIcon title="GitHub" image={github} />
                <AppIcon title="ROC Twente" image={ROCvT} />
                <AppIcon title="Laravel" image={laravel} />
                <AppIcon title="Skills 2024" image={skillsthefinals} />
                <AppIcon title="PHP" image={PHP} />
                <AppIcon title="C#" image={cslogo} />
                <AppIcon title="NextJS" image={nextjs} />
                <AppIcon title="VueJS" image={vuejs} />
                <AppIcon title="ASP.NET" image={aspnet} />
                <AppIcon title="NodeJS" image={nodejs} />
                <AppIcon title="TailwindCSS" image={tailwind} />
            </main>
        </main>
    );
}
