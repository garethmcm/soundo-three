import React, { useEffect, useState } from "react";
import * as Tone from "tone";
import PlayerComponent from "./Player";

function EqualiserTwo() {
    // Define synth state to be either Tone.Synth<SynthOptions> or null
    // const [synth, setSynth] = useState<Tone.Synth<Tone.SynthOptions> | null>(null);

    // useEffect(() => {
    //     // Initialize the synth and set it to state
    //     const newSynth = new Tone.Synth().toDestination();
    //     setSynth(newSynth);

    //     // Cleanup function to dispose of the synth when the component unmounts
    //     return () => {
    //         newSynth.dispose();
            
    //     };
    // }, []);

    // // Function to trigger a note
    // const playNote = () => {
    //     if (synth) {
    //         const now = Tone.now();
    //         synth.triggerAttack("C4", now);
    //         synth.triggerRelease(now+1);
    //     }
    // };

    return (
        <div>
            <h1>Equaliser</h1>
            <p className="blurb">
                This allows you to boost different parts of a sound, separated into low frequencies, mid frequencies, and high frequencies.
            </p>
            <PlayerComponent sampleUrl="https://tonejs.github.io/audio/berklee/gong_1.mp3"/>
        </div>
    );
}

export default EqualiserTwo;
