"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { slidesData } from "./data";

import Star from "../image/icons/Star 2.svg";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PreviousNextMethods() {
    const sliderRef = useRef(null);


    const [likedItems, setLikedItems] = useState({});
    const [isAdded, setIsAdded] = useState({});

  // arrows state
    const [activeArrow, setActiveArrow] = useState("next");

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };
    const toggleAdded = (id) => {
        setIsAdded((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };

    const next = () => {
        sliderRef.current?.slickNext();
        setActiveArrow("next");
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
        setActiveArrow("prev");
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 800, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className=" slider-products ml-15.5 -mr-10 pt-7.5 pb-7.5">
        <h3 className='head text-[24px] font-semibold text-left mb-2.5'>Similar Items</h3>
        <Slider ref={sliderRef} {...settings}>
            {slidesData.map((s) => {
            const isLiked = likedItems[s.id];
            const isAdd = isAdded[s.id];

            return (
                <div key={s.id} className="parent-card p-2.5 pb-7">
                <div>
                    <div
                    className="p-5 rounded-[20px]"
                    style={{ border: "1px solid rgba(0,0,0,0.05)" }}
                    >
                    <div
                        className={` mb-3.5 flex ${
                        s.discount ? "justify-between" : "justify-end"
                        }`}
                    >
                        {s.discount && <p className="discount text-[10px] font-semibold" >{s.discount} OFF</p>}

                        <div className="flex gap-2.5">
                            <button className="btn-love" onClick={() => toggleLike(s.id)}>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 32 32"
                                fill={isLiked ? "rgba(9, 56, 0, 1)" : "none"}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M22.6666 8.66661C24.1394 8.66661 25.3333 9.86052 25.3333 11.3333M16 7.60333L16.9134 6.66661C19.7546 3.7529 24.3612 3.75289 27.2024 6.66661C29.9673 9.50208 30.0523 14.0717 27.3948 17.0132L19.7596 25.4642C17.7312 27.7093 14.2687 27.7093 12.2403 25.4642L4.60523 17.0132C1.9477 14.0717 2.03266 9.5021 4.79759 6.66663C7.63882 3.75291 12.2454 3.75291 15.0866 6.66664L16 7.60333Z"
                                stroke={isLiked ? "rgba(9, 56, 0, 1)" : "#b0897f"}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-all duration-300"
                                />
                            </svg>
                            </button>
                            <button className="btn-add" onClick={() => toggleAdded(s.id)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill={isAdd ? "rgba(9, 56, 0, 1)" : "none"} xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6" stroke={isAdd ? "rgba(9, 56, 0, 1)" : "#b0897f"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.562 9.50386C4.81221 7.50215 6.51381 6 8.53111 6H15.4688C17.4861 6 19.1877 7.50215 19.438 9.50386L20.438 17.5039C20.7364 19.8913 18.8748 22 16.4688 22H7.53111C5.12511 22 3.26357 19.8913 3.562 17.5039L4.562 9.50386Z" stroke={isAdd ? "rgba(9, 56, 0, 1)" : "#b0897f"} strokeWidth="1.5" strokeLinejoin="round"/>
                                <path d="M9 14H15" stroke={isAdd ? "white" : "#b0897f"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 11L12 17" stroke={isAdd ? "white" : "#b0897f"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </button>
                        </div>
                    </div>

                    <Image className="m-auto" src={s.image} alt={s.title} />
                    </div>

                    <div className="flex justify-between mt-2">
                    <h2 className="title-card font-medium text-[12px]" style={{color:"rgba(84, 84, 84, 1)"}}>{s.title}</h2>
                    <div className="flex items-center gap-1">
                        <Image src={Star} alt="" />
                        <p className="text-[12px]">4.5 <span className="text-[10px]" style={{color:"rgba(84, 84, 84, 1)"}}>(2910)</span></p>
                    </div>
                    </div>

                    <h3 className="text-[14px] font-medium my-2">{s.discription}</h3>

                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            {s.discount ? (
                                <p className="text-[16px] font-medium">
                                AED {(s.price * (1 - parseFloat(s.discount) / 100)).toFixed(0)}
                                </p>
                            ) : (
                                <p className="text-[16px] font-medium">AED {s.price}</p>
                            )}

                            {s.discount && <p className="line-through text-[12px] font-medium" style={{color:"rgba(138, 138, 138, 1)"}}>{s.price}</p>}
                        </div>
                    <div className="flex gap-0.5 items-center">
                                <div style={{width:"20px", height:"20px",borderRadius:"50%" ,background:"rgba(190, 150, 142, 1)"}}></div>
                                <div style={{width:"20px", height:"20px",borderRadius:"50%",background:"rgba(51, 51, 51, 1)"}}></div>
                                <div style={{width:"20px", height:"20px",borderRadius:"50%",background:"rgba(232, 232, 232, 1)"}}></div>
                                <p className="text-[14px] font-medium">+2</p>
                            </div>
                    </div>
                </div>
                </div>
            );
            })}
        </Slider>

        {/* arrows */}
        <div className="flex justify-center gap-3 mt-6">
            <button
            onClick={next}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
                ${activeArrow === "next"
                ? "bg-[#b0897f] text-white"
                : "bg-gray-200 text-gray-700"
                }`}
            >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </button>

            <button
            onClick={previous}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition
                ${activeArrow === "prev"
                ? "bg-[#b0897f] text-white"
                : "bg-gray-200 text-gray-700"
                }`}
            >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            </button>
        </div>
        </div>
    );
}

export default PreviousNextMethods;
