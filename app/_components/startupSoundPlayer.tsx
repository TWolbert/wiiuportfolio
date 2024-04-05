"use client";

export default function StartupSoundPlayer() {
    return (
        <audio id="startupPlayer">
            <source src="/sounds/startup.mp3" type="audio/mpeg" />
        </audio>
    )
}