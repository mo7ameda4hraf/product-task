import React from 'react'
import Image from "next/image";

//image & icon:
import Star from "./image/icons/Star 2.svg"
import ChatIcon from "./image/icons/chat 01.svg"

const ratings = [
    { stars: 5, percent: 67 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 6 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 9 },
];


export default function Rating() {
    return (
    <div className="mt-12.5 mb-12.5">
        <div className="container">
            <h3 className='head text-[24px] font-semibold text-left mb-2.5'>Rating & Reviews</h3>
            <div className="flex justify-between rating">

                <div className='text-center total-review'>
                    <p className='text-[16px] font-normal ' style={{color:"rgba(84, 84, 84, 1)"}}>Total Reviews</p>
                    <h1 className='text-[60px] font-semibold'>3.0K</h1>
                    <button className='text-white text-[16px] add'>
                        <Image src={ChatIcon} alt="" />
                        Add Comment
                    </button>
                </div>

                {/* rating */}
                <div className="w-100 space-y-2">
                    {ratings.map((rate) => (
                        <div key={rate.stars} className="flex items-center gap-2">

                            <span className="w-10 text-[20px] text-gray-600">
                                %{rate.percent}
                            </span>

                            <div className="flex-1 h-2 bg-gray-200 rounded " style={{direction:"ltr"}} >
                                <div
                                className="h-2 rounded"
                                style={{ width: `${rate.percent}%`,background:"rgba(190, 150, 142, 1)" }}
                                />
                            </div>

                            <div className="flex items-center gap-1 w-10 text-sm">
                                <span className='text-[20px]'>{rate.stars}</span>
                                <Image src={Star} alt="" />
                            </div>

                        </div>
                    ))}
                </div>

                <div>
                    <div className="flex gap-2.5 items-end">
                        <span className='text-[24] font-medium' style={{color:"rgba(176, 176, 176, 1)"}}>5/</span>
                        <h1 className='text-[120px] font-medium'>4,5</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
