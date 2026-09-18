"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface DemoVideoProps {
  src: string;
  poster?: string;
  title: string;
}

export function DemoVideo({ src, poster, title }: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={playing}
        aria-label={title}
        className="size-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-slate-950/20 transition-colors hover:bg-slate-950/10"
        >
          <span className="flex size-20 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-105">
            <Play className="size-8 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
