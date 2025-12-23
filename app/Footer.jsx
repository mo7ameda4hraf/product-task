import React from 'react'
import Image from "next/image";
import Logo from './image/logo footer.png'
import Linkedin from './image/icons/akar-icons_linkedin-v2-fill.svg'
import Facebook from './image/icons/eva_facebook-fill.svg'
import Telegram from './image/icons/icon-park_telegram.svg'
import Twitter from './image/icons/mdi_twitter.svg'
import Instagram from './image/icons/ri_instagram-fill.svg'
import Whats from './image/icons/whatsapp.svg'


export default function Footer() {
    return (
        <div className="footer text-white">
            <div className="container flex-wrap flex justify-between" style={{direction:"ltr"}}>
                <div>
                    <Image src={Logo} alt="" />
                    <p className='text-[14px] font-medium w-81 pt-8'>Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae     </p>
                </div>
                <div className="links">
                    <h2 className='text-[24px] font-semibold mb-5'>Let Us Help</h2>
                    <ul className='flex flex-col gap-2.5'>
                        <li><a href="#" className='text-[16px] font-medium'>My Account</a></li>
                        <li><a href="#" className='text-[16px] font-medium'>FAQs </a></li>
                        <li><a href="#" className='text-[16px] font-medium'>Categories</a></li>
                        <li><a href="#" className='text-[16px] font-medium'>All Products</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h2 className='text-[24px] font-semibold mb-5'>Policies</h2>
                    <ul className='flex flex-col gap-2.5'>
                        <li><a href="#" className='text-[16px] font-medium'>Refund Policy</a></li>
                        <li><a href="#" className='text-[16px] font-medium'>About Us</a></li>
                        <li><a href="#" className='text-[16px] font-medium'>Cancellation Policy </a></li>
                        <li><a href="#" className='text-[16px] font-medium'>Terms and Conditions</a></li>
                        <li><a href="#" className='text-[16px] font-medium'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="email" >
                    <h2 className='text-[24px] font-semibold mb-5'>Send Email</h2>
                    <div className="flex bg-white rounded-[12px] p-2.5">
                        <input className='outline-none w-full' type="email" placeholder=' email address' />
                        <button className='text-[16px] font-semibold text-white px-5 py-2.5'>send</button>
                    </div>
                    <p className='text-[16px] font-semibold my-2.5'>Follow Us</p>
                    <div className="flex gap-2.5">
                        <Image src={Facebook} alt=""/>
                        <Image src={Twitter} alt=""/>
                        <Image src={Instagram} alt=""/>
                        <Image src={Linkedin} alt=""/>
                        <Image src={Whats} alt=""/>
                        <Image src={Telegram} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
