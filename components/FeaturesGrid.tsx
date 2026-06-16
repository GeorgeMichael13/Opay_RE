"use client";

import React from "react";
import Image from "next/image";

export const videos ={
  dlopay:"https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014682/downloadtheOPayapp_mqn79b.mp4"
}
export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-[#bed4ce] font-[family-name:var(--font-montserrat)] overflow-hidden">
      {/* LAYOUT UPDATE: 
          Removed max-w-[1400px] and replaced with w-full.
          Used responsive padding to maintain small, clean edge margins.
      */}
      <div className="w-full px-4 md:px-10 lg:px-12">
        {/* Header Section: Centered for a bold, symmetrical entrance */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-[#1b1259] leading-tight max-w-4xl mx-auto">
            Everything you need to{" "}
            <span className="text-[#1dc99b]">manage your money</span> in one
            place.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join millions of users who trust OPay for fast, secure, and
            rewarding financial services every single day.
          </p>
        </div>

        {/* Bento Grid Layout: Now spreads to fill the expanded container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px] md:auto-rows-[450px]">
          {/* 1. Account & Transfers (Large Wide Block) */}
          <div className="md:col-span-2 bg-[#f0f9f7] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row relative group shadow-sm">
            <div className="p-10 md:p-14 flex-1 z-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1b1259] mb-6 leading-tight">
                Fund your Account, Make Transfers, Pay Bills
              </h3>
              <p className="text-gray-600 text-lg max-w-md">
                Live life on your own terms! Add money to your OPay wallet and
                transfer to other bank accounts for free.
              </p>
            </div>
            <div className="flex-1 relative h-full min-h-[300px] md:min-h-full">
              <Image
                src="/feature-passport1.webp"
                alt="Account Funding"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-top md:object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 2. OWealth (Vertical/Square Block) */}
          <div className="bg-[#1b1259] rounded-[2.5rem] overflow-hidden flex flex-col relative group shadow-sm">
            <div className="p-10 z-10">
              <h3 className="text-2xl font-bold text-white mb-4">OWealth</h3>
              <p className="text-white/90">
                Get amazing daily interest on your funds while having full
                access and control.
              </p>
            </div>
            <div className="flex-grow relative">
              <Image
                src="/feature-passport2.webp"
                alt="OWealth"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                className="object-cover object-bottom group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 3. Debit Cards (Square Block) */}
          <div className="bg-[#f0f9f7] rounded-[2.5rem] overflow-hidden flex flex-col relative group border border-[#1dc99b]/10 shadow-sm">
            <div className="p-10 z-10">
              <h3 className="text-2xl font-bold text-[#1b1259] mb-4">
                Your Passport to the World
              </h3>
              <p className="text-gray-600">
                Instant OPay Debit Cards with zero maintenance fees. Accepted at
                any ATM, POS, or online globally.
              </p>
            </div>
            <div className="flex-grow relative">
              <Image
                src="/feature-passport3.webp"
                alt="Debit Card"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* 4. Video Feature (Large Wide Block) */}
          <div className="md:col-span-2 bg-[#1b1259] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row-reverse relative group shadow-sm">
            <div className="p-10 md:p-14 flex-1 z-10 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Instant and Free Debit Cards
              </h3>
              <p className="text-gray-300 text-lg">
                Physical or Virtual. Get it now and enjoy flexible spending with
                secure, CBN-licensed protection.
              </p>
              <button className="mt-8 w-fit px-8 py-4 bg-[#1dc99b] text-white font-bold rounded-2xl hover:bg-white hover:text-[#1b1259] transition-all transform active:scale-95">
                Get It Now
              </button>
            </div>
            <div className="flex-1 relative h-full min-h-[300px] bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              >
                <source src={videos.dlopay} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
