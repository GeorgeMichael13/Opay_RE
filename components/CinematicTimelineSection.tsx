"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
export const videos={
  timeline:"https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014457/timeline1127_x0ak74.mp4"

}

export default function CinematicTimelineSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Handle progress bar updates
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(p);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-[#1b1259] overflow-hidden group">
      {/* THE VIDEO: Full Bleed with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src={videos.timeline} type="video/mp4" />
        </video>
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b1259]/40 via-transparent to-[#1b1259]/80" />
      </div>

      {/* TEXT CONTENT OVERLAY */}
      <div className="relative z-10 h-full flex flex-col justify-end px-4 md:px-10 lg:px-16 pb-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#00d09c] text-white text-xs font-bold uppercase tracking-widest rounded-full">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
            Empowering the <span className="text-[#00d09c]">Future</span> of
            Finance
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">
            From our first transaction to a nationwide ecosystem, see how we're
            building a more inclusive world for everyone.
          </p>
        </div>
      </div>

      {/* INTERACTIVE CONTROLS BOX */}
      <div className="absolute bottom-8 right-4 md:right-10 lg:right-16 z-20 flex items-center gap-4 bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={togglePlay}
          className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors"
        >
          {isPlaying ? (
            <Pause size={20} fill="white" />
          ) : (
            <Play size={20} fill="white" />
          )}
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 hover:bg-white/10 rounded-xl text-white transition-colors"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* Custom Progress Bar */}
        <div className="hidden md:block w-32 h-1.5 bg-white/20 rounded-full overflow-hidden mr-2">
          <div
            className="h-full bg-[#00d09c] transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* TIMELINE PROGRESS INDICATOR (Bottom Edge) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <div
          className="h-full bg-[#00d09c] shadow-[0_0_10px_#00d09c]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
