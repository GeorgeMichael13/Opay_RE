"use client";

import React, { useState } from "react";
import { Phone, X, Play, MessageSquare, MapPin } from "lucide-react";

export default function SatisfactionSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const contactVideos = [
    {
      id: "cs-1",
      src: "/01CustomerService-People_4.mp4",
      title: "24/7 Support Team",
    },
    { id: "cs-2", src: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014744/02customerservice01_zbhzql.mp4", title: "Digital Solutions" },
  ];

  return (
    <section className="py-24 bg-[#fcfcfc] font-[family-name:var(--font-montserrat)] overflow-hidden">
      <div className="w-full px-4 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* LEFT COLUMN: Text & Contact Cards */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1b1259] leading-[1.1]">
                Customer Satisfaction, Our{" "}
                <span className="text-[#00d09c]">Priority</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We are here to provide 24/7 quick customer service. Reach out
                through our digital channels or visit us in person.
              </p>
            </div>

            {/* Support Channels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#f0f9f7] text-[#00d09c] rounded-xl flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">
                    In-App
                  </p>
                  <p className="text-[#1b1259] font-bold">Live Chat 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#f0f9f7] text-[#00d09c] rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase">
                    Visit Us
                  </p>
                  <p className="text-[#1b1259] font-bold">Physical Centers</p>
                </div>
              </div>
            </div>

            {/* Hotline Cards */}
            <div className="space-y-4">
              <div className="relative overflow-hidden bg-[#1b1259] p-8 rounded-[2.5rem] text-white group">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#00d09c] rounded-full animate-ping opacity-20"></div>
                      <div className="relative w-14 h-14 bg-[#00d09c] rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="text-white fill-white w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">General Queries</h4>
                      <p className="text-white/60 text-sm">
                        App, Cards & Transactions
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-black tracking-tight text-[#00d09c]">
                    0700 8888 328
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-[#00d09c]/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#f0f9f7] transition-colors">
                      <Phone className="text-[#1b1259] w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#1b1259]">
                        Business Queries
                      </h4>
                      <p className="text-gray-400 text-sm">
                        POS & Merchant Services
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-black tracking-tight text-[#1b1259]">
                    0700 8888 329
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Video Grid */}
          <div className="flex-1 w-full max-w-[550px]">
            <div className="grid grid-cols-1 gap-6">
              {contactVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video.src)}
                  className="relative h-[280px] rounded-[3rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b1259]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-all duration-500">
                      <Play className="text-white fill-white w-6 h-6 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-10">
                    <p className="text-white font-bold text-xl tracking-wide">
                      {video.title}
                    </p>
                    <div className="w-8 h-1 bg-[#00d09c] mt-2 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SHARED MODAL COMPONENT */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#1b1259]/80 backdrop-blur-2xl animate-in fade-in duration-300"
            onClick={() => setActiveVideo(null)}
          />
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md"
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
