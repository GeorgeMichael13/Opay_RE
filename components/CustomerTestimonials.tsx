"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 0,
    name: "Mr Malik (Customer)",
    text: "OPay makes banking very easy for me; transfer of funds & transactions are seamless; I give OPay a solid 10/10.",
    video: "/01MrMalik.mp4",
    poster: "/mrmalik.png",
  },
  {
    id: 1,
    name: "Mrs Benson (Agent)",
    text: "I Love OPay! the network is very good...up to 100% network uptime and super fast & their customer service is quick.",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014351/02MrsBenson_koyowb.mp4",
    poster: "/mrsbenson.png",
  },
  {
    id: 2,
    name: "Mummy Habeeb (Agent)",
    text: "OPay has been giving me joy since 2020! Ah, within one to two seconds, you will surely see the money transferred to you!",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014335/03MummyHabeeb_rqfqnc.mp4",
    poster: "/mummyhabib.png",
  },
  {
    id: 3,
    name: "Mr Adebayo (Customer)",
    text: "I feel very satisfied with OPay's service, I've been using OPay for over 4 years and will definitely recommend OPay.",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014445/04MrQudusAdebayo_fe9z3m.mp4",
    poster: "/mradebayo.png",
  },
  {
    id: 4,
    name: "Mr Ogbonna (Farmer/Business man)",
    text: "To be sincere, I'm very happy with OPay, my money has never hanged before.. All my doubts and the rumours heard about OPay being not secure, are cleared now!",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014676/05MrOGBONNA_w3jede.mp4",
    poster: "/mrogbona.png",
  },
  {
    id: 5,
    name: "Mr Oyebadejo (Customer)",
    text: "I wrongly sent money to an account, but OPay resolved the issue for me in 15 to 30 minutes, I am very happy & comfortable that the issue was addressed so swiftly!",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014507/06MrOyebadejo_vb5s4b.mp4",
    poster: "/mroyebadejo.png",
  },
  {
    id: 6,
    name: "Mrs Robson (student)",
    text: "I am really impressed with OPay's quick customer service and their super fast complaint resolution! I definitely will recommend OPay to others",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014524/07Mrsbenson_h74sii.mp4",
    poster: "/mrsrobson.png",
  },
  {
    id: 7,
    name: "OPay loyalty interview",
    text: "Here's how excited our customers are about our service. Check out all the fun clips",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014425/08MontageA_ltuuu4.mp4",
    poster: "/opayloyalty.png",
  },
  {
    id: 8,
    name: "OPay loyalty interview",
    text: "Here's how excited our customers are about our service. Check out all the fun clips",
    video: "https://res.cloudinary.com/dy39jtgwn/video/upload/v1781014559/09MontageB_pjlfw8.mp4",
    poster: "/opayloyalty1.png",
  },
];

function VideoCard({
  item,
  openModal,
}: {
  item: any;
  openModal: (v: string, n: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="bg-white rounded-3xl shadow-xl overflow-hidden animate-slide-up delay-300 group cursor-pointer h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => openModal(item.video, item.name)}
    >
      <div className="relative aspect-video bg-black overflow-hidden">
        <Image
          src={item.poster}
          alt={item.name}
          fill
          className={`object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-0 bg-black/40 transition-all flex items-center justify-center ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <Image
              src="/play-icon.png"
              alt="Play"
              width={28}
              height={28}
              className="ml-1"
            />
          </div>
        </div>
      </div>
      <div className="p-8 flex-grow">
        <p className="text-gray-700 text-[17px] leading-relaxed mb-6 line-clamp-3">
          "{item.text}"
        </p>
        <p className="font-semibold text-[#00d09c]">{item.name}</p>
      </div>
    </div>
  );
}

export default function CustomerTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentName, setCurrentName] = useState<string>("");
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = (videoSrc: string, name: string) => {
    setSelectedVideo(videoSrc);
    setCurrentName(name);
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.play();
      }
    }, 100);
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedVideo(null);
    setCurrentName("");
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* LAYOUT FIX: 
          Removed 'max-w-7xl' to let it span the full width. 
          Added responsive side padding (px) to act as the "small margins" 
      */}
      <div className="w-full px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#1b1259] leading-tight mb-16 animate-slide-up">
          Here is what our customers think
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Space between video grids
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1440: { slidesPerView: 4.2 }, // Spreads more on larger screens
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          loop
          className="customer-swiper !pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <VideoCard item={item} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL (Unchanged) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl px-4">
            <button
              onClick={closeModal}
              className="absolute -top-14 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            >
              ✕
            </button>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                ref={modalVideoRef}
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[85vh] rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  {currentName}
                </p>
              </div>
            </div>
            <p className="text-center text-white/70 text-sm mt-4">
              Click outside or press ESC to close
            </p>
          </div>
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </section>
  );
}
