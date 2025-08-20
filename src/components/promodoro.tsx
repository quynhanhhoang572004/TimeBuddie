
import { useEffect, useState } from "react";


type props ={
    minutes? : number,
    onComplete? : () => void

}

export const PromodoroTimer = ({minutes=25, onComplete}: props) =>{
     const initialSeconds = minutes * 60;

  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

   const mmss = () => {
    const m = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
    const s = Math.floor(secondsLeft % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, [running, onComplete]);

   const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSecondsLeft(initialSeconds);
  };

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        rowGap: 5,
      }}
    >
     
      <div
        style={{
          fontFamily: "'Press Start 2P'",
          fontSize: "clamp(30px, 12vw, 160px)",
          color: "#FFE898",
          textShadow: "-8px 6px 0 #FDC507",
          letterSpacing: "8px",
        }}
      >
        {mmss()}
      </div>

      <button
        onClick={
          secondsLeft === 0 ? reset : running ? pause : start
        }
        style={{
          fontFamily: "'Press Start 2P'",
          background: "white",
          color: "#FDC507",
          border: "0",
          borderRadius: 12,
          padding: "12px 28px",
          cursor: "pointer",
        }}
      >
        {secondsLeft === 0 ? "reset" : running ? "pause" : "start"}
      </button>
    </div>
  );

}