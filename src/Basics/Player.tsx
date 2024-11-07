import React, { useEffect, useState } from "react";
import * as Tone from "tone";

import PlayIcon from '../assets/play-circle.svg';

type PlayerComponentProps = {
    sampleUrl: string; // URL to the audio sample file
};

const PlayerComponent: React.FC<PlayerComponentProps> = ({ sampleUrl }) => {
    const [player, setPlayer] = useState<Tone.Player | null>(null);
    const [isAudioInitialized, setIsAudioInitialized] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Function to initialize the audio context and the player
    const initializeAudio = async () => {
        await Tone.start(); // Start Tone.js audio context after user interaction
        console.log("Tone.js audio context started.");

        // Create a new Tone.Player instance and load the sample
        const newPlayer = new Tone.Player(sampleUrl, () => {
            console.log("Audio sample loaded successfully.");
            setPlayer(newPlayer); // Set player state when the sample is ready
            setIsAudioInitialized(true);
        }).toDestination();

        newPlayer.autostart = false; // Ensure it does not auto-play
    };

    // Play or stop the audio sample
    const handlePlayPause = () => {
        if (player) {
            if (isPlaying) {
                player.stop();
            } else {
                player.start();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {!isAudioInitialized ? (
                <button className="btn" onClick={initializeAudio}>Initialize Audio</button>
            ) : (
                <button className="btn flex items-center gap-2" onClick={handlePlayPause}>
                    <img
                        src={isPlaying ? "Pause" : PlayIcon}
                        alt={isPlaying ? "Pause" : "Play"}
                        className="w-6 h-6"
                    />
                    {isPlaying ? "Pause" : "Play"}
                </button>
            )}
            {!player && <p>Loading audio sample...</p>}
        </div>
    );
};

export default PlayerComponent;
