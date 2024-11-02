import React, { useState, useRef, useEffect } from "react";
import { Sampler, PingPongDelay } from "tone";

import sunshine from "../assets/Audio samples/YOU ARE MY SUNSHINE.mp3";
import guitar from "../assets/Audio samples/GUITAR.mp3";
import bass from "../assets/Audio samples/BASS.mp3";
import drums from "../assets/Audio samples/DRUMS.mp3";
import piano from "../assets/Audio samples/PIANO.mp3";
import vocals from "../assets/Audio samples/VOCAL WITH VERB.mp3";

import playButton from "../assets/play-circle.svg";
import stopButton from "../assets/stop-circle.svg";
import { Time } from "tone/build/esm/core/type/Units";

interface delayItems {
  noteAllocation: string;
  fileLocation: string;
  sampleTitle: string;
}

// audio samples allocated to midi notes on sampler

const delayPlaylist: delayItems[] = [
  { noteAllocation: "C4", fileLocation: sunshine, sampleTitle: "Sunshine" },
  { noteAllocation: "D4", fileLocation: guitar, sampleTitle: "Guitar" },
  { noteAllocation: "E4", fileLocation: bass, sampleTitle: "Bass" },
  { noteAllocation: "F4", fileLocation: drums, sampleTitle: "Drums" },
  { noteAllocation: "G4", fileLocation: piano, sampleTitle: "Piano" },
  { noteAllocation: "A5", fileLocation: vocals, sampleTitle: "Vocals" },
];

// initialises states

const Delay: React.FC = () => {
  const [isLoaded, setLoaded] = useState(false);
  const sampler = useRef<Sampler | null>(null);
  const delay = useRef<PingPongDelay | null>(null);

  // React hook initialises compressor & sampler, connects them and plays output from delay (toDestination)

  useEffect(() => {
    sampler.current = new Sampler(
      Object.fromEntries(
        delayPlaylist.map((item) => [item.noteAllocation, item.fileLocation])
      ),
      {
        onload: () => {
          setLoaded(true);
        },
      }
    );

    delay.current = new PingPongDelay({
      delayTime: 1,
      feedback: 0.5,
      wet: 0.5
    }).toDestination();

    if (sampler.current && delay.current) {
      sampler.current.connect(delay.current);
    }

    return () => {
      if (sampler.current) {
        sampler.current.dispose();
      }
      if (delay.current) {
        delay.current.dispose();
      }
    };
  }, []);

  // handles play and stop functions using sample trigger and release

  const handlePlay = (note: string) => {
    if (isLoaded && sampler.current) {
      sampler.current.triggerAttack(note);
    }
  };

  const handleStop = (note: string) => {
    if (sampler.current) {
      sampler.current.triggerRelease(note);
    }
  };

  // used by html code below using slider to make adjustments

  const adjustDelay = (
    delayTime: Time,
    feedback: number,
    mix: number
  ) => {
    if (delay.current) {
      delay.current.delayTime.value = delayTime;
      delay.current.feedback.value = feedback;
      delay.current.wet.value = mix;
    }
  };

  return (
    <div>
      <h1>Delay</h1>
      <p className="blurb">This gives a repeat of the audio signal that plays after the original to give a spacial effect.</p>
      <div className="audioComponentDisplay">
        <div className="playerButtonBox">
          <div>
            {delayPlaylist.map((item) => (
              <div className="playerButtonBox" key={item.noteAllocation}>
                <h2 className="sampleTitle">{item.sampleTitle}</h2>
                <div
                  onClick={() => isLoaded && handlePlay(item.noteAllocation)}
                >
                  <img src={playButton} alt="Play" className="buttons" />
                </div>
                <div
                  onClick={() => isLoaded && handleStop(item.noteAllocation)}
                >
                  <img src={stopButton} alt="Stop" className="buttons" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="paramDials">
          <div className="buttonSection">
            <label>
            Time: <br />
            <input
              type="range"
              min="1"
              max="3"
              step="0.0001"
              defaultValue="1"
              onChange={(e) =>
                adjustDelay(
                  parseFloat(e.target.value),
                  delay.current?.feedback.value || 0.5,
                  delay.current?.wet.value || 0.5,
                )
              }
            /> 
            </label>
              <div className="explainer">How much space there is between delayed sounds</div>
          </div>
          <div className="buttonSection">
            <label>
            Repeats: <br />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.5"
              onChange={(e) =>
                adjustDelay(
                delay.current?.delayTime.value || 1,
                parseFloat(e.target.value),
                delay.current?.wet.value || 0.5,
                )
              }
            /> 
            </label>
              <div className="explainer">The number of times the sound is repeated</div>
          </div>
          <div className="buttonSection">
            <label>
              Mix: <br />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue="0.5"
              onChange={(e) =>
                adjustDelay(
                delay.current?.delayTime.value || 1,
                delay.current?.feedback.value || 0.5,
                parseFloat(e.target.value),
                )
              }
            /> 
            </label>
              <div className="explainer">Sets ratio of unaffected signal to affected signal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delay;
