"use client"
import React, { useState } from "react";
import Image from "next/image";


//images & icons:
import Logo from "./image/logo.svg"
import LogoLove from "./image/icons/love.svg"
import Notification from "./image/icons/notification 03.svg"
import Shopping from "./image/icons/shopping bag.svg"
import User from "./image/icons/user.svg"
import FaqIcon from "./image/icons/chat-information.svg"
import ContactIcon from "./image/icons/id card.svg"
import AboutIcon from "./image/icons/Vector.svg"
import HomeIcon from "./image/icons/home 04.svg"
import CategoryIcon from "./image/icons/apps.svg"
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Navpar() {
        const [showSidepar,setShowSidepar]=useState(false)

        const handleShowSidepar = () => {
            setShowSidepar(prev => !prev);
  };
    
    return (
        <>
            {/* --- Navpar --- */}
            <div className="navpar">
                {showSidepar && (
                    <div
                    className="overlay"
                    onClick={() => setShowSidepar(false)}
                    ></div>
                )}
                <div className="container flex justify-between items-center pt-2.5 pb-2.5">
                    <MenuIcon className="menu-icon" onClick={handleShowSidepar} />
                    <div className="flex gap-5 icons">
                        <div className="relative group">
                            <div className="flex items-center  cursor-pointer">
                                <KeyboardArrowDownIcon/>
                                <Image src={User} alt="" />
                            {/* Dropdown */}
                            <div className="absolute -right-3 top-2.5 mt-2 hidden group-hover:block bg-white border rounded shadow w-32">
                                <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Profile</p>
                                <p className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>

                        
                        <select name="language" id="" style={{direction:"ltr"}}>
                            <option value="">EN</option>
                            <option value="">AR</option>
                        </select>
                        <Image src={LogoLove} alt="" />
                        <Image src={Notification} alt="" />
                        <Image src={Shopping} alt="" />
                    </div>
                    <div className="flex gap-10">
                        <div className="flex list-nav">
                            <a href="">
                                FAQs
                                <Image src={FaqIcon} alt="" />
                            </a>
                            <a href="">
                                Contact Us
                                <Image src={ContactIcon} alt="" />
                            </a>
                            <a href="">
                                About Us
                                <Image src={AboutIcon} alt="" />
                            </a>
                            <a href="">
                                Our Category
                                <Image src={CategoryIcon} alt="" />
                            </a>
                            <a href="">
                                Home
                                <Image src={HomeIcon} alt="" />
                            </a>
                        </div>
                        <Image src={Logo} alt="" />
                    </div>
                </div>
            </div>
            {/* --- Sidepar --- */}
            <div className={`sidepar  ${showSidepar?"block":"hidden"}`} onClick={() => setShowSidepar(false)}>
                <div className="flex list-side">
                    <a href="">
                        <Image src={FaqIcon} alt="" />
                        FAQs
                    </a>
                    <a href="">
                        <Image src={ContactIcon} alt="" />
                        Contact Us
                    </a>
                    <a href="">
                        <Image src={AboutIcon} alt="" />
                        About Us
                    </a>
                    <a href="">
                        <Image src={CategoryIcon} alt="" />
                        Our Category
                    </a>
                    <a href="">
                        <Image src={HomeIcon} alt="" />
                        Home
                    </a>
                </div>
            </div>
        </>
    )
}
