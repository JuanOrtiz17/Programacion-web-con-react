import { useRef, useState, useEffect } from "react";
import "../../styles/globalStyles.css";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [trackIndex, setTrackIndex] = useState(0);

  const tracks = [
    { title: "Inazuma Eleven OP 4", url: "https://raw.githubusercontent.com/JuanOrtiz17/audios/main/InazumaElevenOp4.mp3" },
    { title: "Naruto OP 4", url: "https://raw.githubusercontent.com/JuanOrtiz17/audios/main/NarutoOp4.mp3" },
  ];

  const currentTrack = tracks[trackIndex];

  const formatTime = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const nextTrack = () => setTrackIndex((trackIndex + 1) % tracks.length);
  const prevTrack = () => setTrackIndex((trackIndex - 1 + tracks.length) % tracks.length);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => setTime(audio.currentTime);
    audio.addEventListener("timeupdate", update);

    return () => audio.removeEventListener("timeupdate", update);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentTrack.url;
    audioRef.current.currentTime = 0;
    if (playing) audioRef.current.play();
  }, [trackIndex]);

  return (
    <div className="audio-player">
      <h3>{currentTrack.title}</h3>

      <div className="controls">
        <button onClick={prevTrack}>⏮</button>
        <button onClick={togglePlay}>{playing ? "⏸" : "▶"}</button>
        <button onClick={nextTrack}>⏭</button>
      </div>

      <div className="time-control">
        <span>{formatTime(time)}</span>
        <input
          type="range"
          min={0}
          max={audioRef.current?.duration || 0}
          value={time}
          step="0.1"
          onChange={(e) => {
            const newTime = parseFloat(e.target.value);
            if (audioRef.current) audioRef.current.currentTime = newTime;
            setTime(newTime);
          }}
        />
        <span>{formatTime(audioRef.current?.duration || 0)}</span>
      </div>

      <div className="volume">
        <span>🔊</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            setVolume(v);
            if (audioRef.current) audioRef.current.volume = v;
          }}
        />
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default AudioPlayer;
