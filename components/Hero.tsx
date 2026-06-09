"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden font-[family-name:var(--font-montserrat)] bg-white">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/section.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Improved Overlay: Gradient allows the image to show but keeps text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-[2px]" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl space-y-10 text-left">
          {/* BLOCK 1: Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight animate-slide-up">
            We are Beyond <br /> Banking
          </h1>

          {/* BLOCK 2: Description */}
          <div className="max-w-2xl animate-slide-up delay-300">
            <p className="text-base md:text-lg leading-relaxed font-medium text-white/95 bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl">
              With mission to make financial services more inclusive through
              technology, OPay is dedicated to providing secure, easy to use
              &amp; affordable financial services with super fast user
              experience, amazing incentive package on transfer/airtime &amp;
              data top-up, innovative product to use as balance with amazing
              daily interest, reliable debit card with no charge and best
              resolution experience etc. With OPay account, you can have full
              control of your finances, payments &amp; transactions with ease,
              all on one platform! Yes, OPay is your one-stop payment services
              platform and more.
            </p>
          </div>

          {/* BLOCK 3: Actions */}
          <div className="flex flex-col gap-8 animate-slide-up delay-500">
            {/* Regulatory Logos */}
            <div className="flex items-center">
              <Image
                src="/frame.png"
                alt="Licensed by CBN, Insured by NDIC"
                width={360}
                height={40}
                priority
                className="h-7 md:h-9 w-auto object-contain brightness-0 invert"
              />
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <img
                  src="https://gstatic.opayweb.com/website-ng/img/appstore-button-default.1236883.svg"
                  alt="App Store"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
              <a
                href="#"
                className="hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <img
                  src="https://gstatic.opayweb.com/website-ng/img/playstore-button-default.eb33c05.svg"
                  alt="Play Store"
                  className="h-10 md:h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
