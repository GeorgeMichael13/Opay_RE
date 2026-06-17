"use client";

import React, { useState } from "react";
import { X, Play } from "lucide-react";

export default function SecuritySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    { id: "131", src: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014760/131_vt7wzl.mp4", title: "Account Protection" },
    { id: "132", src: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014583/132_jm0hmx.mp4", title: "Transaction Security" },
  ];

  return (
    <section className="py-24 bg-white font-[family-name:var(--font-montserrat)] overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* LEFT COLUMN: Video Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video.src)}
                  className="relative aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Overlay Play Button */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Play className="text-white fill-white w-6 h-6 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <p className="text-white font-bold text-lg">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="flex-1 space-y-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1b1259] leading-[1.1]">
              Your Security and Privacy are our{" "}
              <span className="text-[#00d09c]">priority</span>
            </h2>

            <div className="grid gap-10">
              <div className="group">
                <h3 className="text-2xl font-bold text-[#1b1259] mb-3 group-hover:text-[#00d09c] transition-colors">
                  Advanced Fraud Protection
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                  Your data is safely stored and encrypted using
                  industry-standard technology. We scan our systems daily.
                </p>
              </div>

              <div className="bg-[#f0f9f7] p-8 rounded-[2.5rem] border-l-8 border-[#00d09c] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1b1259] mb-3">
                  Instant Account Locking
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Dial these codes immediately to lock your account or card:
                </p>
                <div className="flex flex-wrap gap-4 text-[#1b1259]">
                  <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-[#00d09c]/20">
                    <span className="text-xs font-bold text-gray-400 uppercase mr-2">
                      Account
                    </span>
                    <span className="text-xl font-black">*955*131#</span>
                  </div>
                  <div className="px-5 py-3 bg-white rounded-2xl shadow-sm border border-[#00d09c]/20">
                    <span className="text-xs font-bold text-gray-400 uppercase mr-2">
                      Card
                    </span>
                    <span className="text-xl font-black">*955*132#</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-[#1b1259]/60 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
            onClick={() => setActiveVideo(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <video autoPlay controls className="w-full h-full object-contain">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
