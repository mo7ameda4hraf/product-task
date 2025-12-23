import {reviews} from "./data"
import Image from "next/image";
import Star  from "../image/icons/Star 2.svg"
import StarEmpty from "../image/icons/starempety.svg"
import LogoOpacity from "../image/Layer_1.png"

export default function ReviewList() {
  return (
    <div className=" review-list container" style={{direction:"ltr"}}>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="py-4 border-b border-gray-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[20px] text-gray-900">
                {review.name}
              </span>

              <div
                className="relative inline-block"
              >
                {/* Empty stars */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        src={StarEmpty}
                        alt="star"
                        width={16}
                        height={16}
                      />
                    ))}
                  </div>
                  {/* Filled stars */}
                    <div
                      className="absolute top-0 left-0 flex overflow-hidden"
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Image
                          key={i}
                          src={Star}
                          alt="star"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
              </div>
            </div>

            <span className="text-[14px] font-medium" style={{color:"rgba(84, 84, 84, 1)"}}>
              {review.time}
            </span>
          </div>

          {/* Review text */}
          <p className="text-[16px] font-normal  leading-relaxed">
            {review.text}
          </p>
        </div>
      ))}
      <div className="text-center">
        <h3 className="more-comment">View More Comments</h3>
        <Image src={LogoOpacity} alt="" style={{position:"relative",top:"-70px"}}/>
      </div>
    </div>
  );
}
