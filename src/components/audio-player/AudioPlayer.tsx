import { useRef, useState, useEffect } from "react";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const audioUrl =
    "https://raw.githubusercontent.com/JuanOrtiz17/audios/main/InazumaElevenOp4.mp3";

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60).toString().padStart(2, "0");
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => setDuration(audio.duration);
    const updateTime = () => setTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", setAudioData);
    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioData);
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <button onClick={togglePlay}>{playing ? "Pausa" : "Reproducir"}</button>
      <label>
        Volumen:
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={changeVolume} />
      </label>
      <div>
        {formatTime(time)} / {formatTime(duration)}
      </div>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default AudioPlayer;
