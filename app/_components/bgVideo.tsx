"use client";

export default function BGVideo() {
    return (
        <video className="fixed top-0 left-0 z-0 w-full h-full object-cover" controls={false} autoPlay muted loop id="bgVideo">
            <source src="/images/wiiuBGVideo.mp4" type="video/mp4" />
        </video>
    );
}