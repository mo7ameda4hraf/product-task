"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import ProductDetails from "./ProductDetails"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import photo1 from "../image/360_F_649571437_eo442p0EwFcdkUOoeocbdi7VKl4VWqRP-removebg-preview.png"
import photo2 from "../image/410555708_236d2355-ef94-45ae-b51b-8d4cfb1cdbf5-removebg-preview 1.png"
import photo3 from "../image/young-adult-man-wearing-hoodie-beanie 1.png"

const images = [
    photo3, photo2, photo1, photo3,
];

export default function ProductImage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeArrow, setActiveArrow] = useState("next");
    const visibleThumbs = 3;
    const extraCount = images.length - visibleThumbs;


    return (
        <div className="product flex container flex-wrap justify-between pt-10">
            <ProductDetails/>
            <div className="w-131 container-image relative">
                {/* Progress Indicator */}
                <div className="absolute mt-2 top-2 left-1/2 transform -translate-x-1/2 z-10 flex gap-1">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full dots w-30 transition-all ${
                                index === activeIndex
                                    ? "bg-white"
                                    : "bg-white/50 "
                            }`}
                        />
                    ))}
                </div>

                {/* Main Image Slider */}
                <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    className="relative overflow-visible rounded-2xl"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >

                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div
                            className="
                                relative
                                w-full
                                h-[350px] md:h-[500px]
                                p-[50px]
                                rounded-2xl
                                z-0
                            "
                            style={{ background: "rgba(245, 245, 245, 1)" }}
                            >
                            <Image
                                src={img}
                                alt={`product ${i + 1}`}
                                fill
                                className="object-contain pt-6 rounded-2xl"
                                priority={i === 0}
                            />
                            </div>
                        </SwiperSlide>
                        ))}

                    <div
                        className={`
                            swiper-button-prev-custom
                            swiper-button
                            absolute left-2 top-1/2 -translate-y-1/2
                            z-50
                            w-10 h-10 rounded-full flex items-center justify-center
                            cursor-pointer transition-all shadow-md
                            ${activeArrow === "prev" ? "bg-[#b0897f]" : "bg-gray-200"}
                        `}
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                            d="M15 18L9 12L15 6"
                            stroke={activeArrow === "prev" ? "#fff" : "#666"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div
                        className={`
                            swiper-button-next-custom
                            swiper-button
                            absolute right-2 top-1/2 -translate-y-1/2
                            z-50
                            w-10 h-10 rounded-full flex items-center justify-center
                            cursor-pointer transition-all shadow-md
                            ${activeArrow === "next" ? "bg-[#b0897f]" : "bg-gray-200"}
                        `}
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                            d="M9 18L15 12L9 6"
                            stroke={activeArrow === "next" ? "#fff" : "#666"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </Swiper>

                {/* Thumbnail Images */}
                <Swiper
                    modules={[Thumbs]}
                    onSwiper={(swiper) => {
                        if (swiper) {
                            setThumbsSwiper(swiper);
                        }
                    }}
                    spaceBetween={8}
                    slidesPerView={3}
                    watchSlidesProgress
                    className="mt-4"
                    style={{direction:"ltr"}}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {images.slice(0, 3).map((img, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-[140px] w-full cursor-pointer rounded-lg overflow-hidden border border-gray-200">
                                <Image
                                    src={img}
                                    alt={`thumb ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                {/* +2 Overlay on last visible thumbnail */}
                                {i === 2 && extraCount > 0 && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold">
                                        +{extraCount}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
