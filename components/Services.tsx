"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  UserPlus,
  Send,
  Smartphone,
  CreditCard,
  TrendingUp,
  HeadphonesIcon,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Easy Account Opening",
    desc: "Instant account opening with amazing welcome bonuses. Get started in minutes with just your phone number.",
    img: "/slide-img-1.png",
    icon: <UserPlus className="w-8 h-8" />,
  },
  {
    title: "Instant Transfer",
    desc: "Experience a 100% success rate on transfers to all Nigerian banks, 24/7, without the wait.",
    img: "/slide-img-2.png",
    icon: <Send className="w-8 h-8" />,
  },
  {
    title: "Airtime & Data Top-up",
    desc: "Get up to 6% instant cashback every time you recharge. More value for every Naira spent.",
    img: "/slide-img-3.png",
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "Free Debit Card",
    desc: "Zero maintenance fees and 10 free ATM withdrawals monthly. Apply in-app and pick up at an agent near you.",
    img: "/slide-img-4.png",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    title: "OWealth Savings",
    desc: "Watch your money grow with amazing daily interest. Your funds remain accessible whenever you need them.",
    img: "/slide-img-5.png",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    title: "24/7 Customer Support",
    desc: "We're always here for you. Quick resolutions via our online chat or physical customer centers.",
    img: "/slide-img-6.png",
    icon: <HeadphonesIcon className="w-8 h-8" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#bed4ce] font-[family-name:var(--font-montserrat)]">
      {/* 1. CSS Overrides for Thicker Blue Arrows & Pagination */}
      <style jsx global>{`
        /* Make arrows Navy Blue and thicker */
        .swiper-button-next,
        .swiper-button-prev {
          color: #210f60 !important;
          transition: all 0.3s ease;
        }

        /* Using after pseudo-element to control thickness/boldness */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 38px !important; /* Slightly larger */
          font-weight: 1000 !important; /* Maximum thickness */
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.1);
          color: #1dc99b !important;
        }

        /* Styling pagination dots to match OPay Emerald */
        .swiper-pagination-bullet-active {
          background: #1dc99b !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>

      <div className="max-w-[1500px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#210f60] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-2 bg-[#1dc99b] mx-auto rounded-full" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 min-h-[650px] lg:min-h-[750px]">
                {/* Content Side */}
                <div className="flex-[1.2] text-center lg:text-left space-y-10">
                  {/* Icon Container: Blue icons as requested */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 text-[#210f60] rounded-3xl shadow-sm border border-gray-100">
                    {service.icon}
                  </div>

                  {/* Title and Description: OPay Blue (#210f60) */}
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-6xl font-extrabold text-[#210f60] leading-[1.1]">
                      {service.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-[#210f60]/70 font-medium leading-relaxed max-w-2xl">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                    {/* Button: Emerald Green (#1dc99b) */}
                    <button className="px-10 py-5 bg-[#1dc99b] text-white font-bold text-lg rounded-full hover:bg-[#210f60] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-[#1dc99b]/20">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[550px] max-w-[650px] animate-float">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 650px"
                    priority={index === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
