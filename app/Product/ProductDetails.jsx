import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import shopping from "../image/icons/shopping .svg"


const colors = [
    { id: "color1", value: "rgba(190,150,142,1)" },
    { id: "color2", value: "rgba(184,204,218,1)" },
    { id: "color3", value: "rgba(152,135,85,1)" },
    { id: "color4", value: "rgba(113,152,200,1)" },
    { id: "color5", value: "rgba(93,93,91,1)" },
];
export default function ProductDetails() {
    const [selected, setSelected] = useState(colors[0].id);
    const [isLiked, setIsLiked] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [count, setCount] = useState(1);



    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="product-details" style={{width:"48%",direction:"ltr"}}>
            <div className="head-details flex justify-between">
                <p className="text-[14px] font-semibold">T-Shirt</p>
                <div className="flex gap-2.5">
                    <button className="btn-love" onClick={() => setIsLiked(!isLiked)}>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill={isLiked ? "rgba(9, 56, 0, 1)" : "none"}
                    >
                        <path
                        d="M22.6666 8.66661C24.1394 8.66661 25.3333 9.86052 25.3333 11.3333M16 7.60333L16.9134 6.66661C19.7546 3.7529 24.3612 3.75289 27.2024 6.66661C29.9673 9.50208 30.0523 14.0717 27.3948 17.0132L19.7596 25.4642C17.7312 27.7093 14.2687 27.7093 12.2403 25.4642L4.60523 17.0132C1.9477 14.0717 2.03266 9.5021 4.79759 6.66663C7.63882 3.75291 12.2454 3.75291 15.0866 6.66664L16 7.60333Z"
                        stroke={isLiked ? "rgba(9, 56, 0, 1)" : "#b0897f"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </button>
                    <button className="btn-add" onClick={() => setIsAdd(!isAdd)}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill={isAdd ? "rgba(9, 56, 0, 1)" : "none"}
                    >
                        <path
                        d="M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6"
                        stroke={isAdd ? "rgba(9, 56, 0, 1)" : "#b0897f"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        />
                        <path
                        d="M4.562 9.50386C4.81221 7.50215 6.51381 6 8.53111 6H15.4688C17.4861 6 19.1877 7.50215 19.438 9.50386L20.438 17.5039C20.7364 19.8913 18.8748 22 16.4688 22H7.53111C5.12511 22 3.26357 19.8913 3.562 17.5039L4.562 9.50386Z"
                        stroke={isAdd ? "rgba(9, 56, 0, 1)" : "#b0897f"}
                        strokeWidth="1.5"
                        />
                        <path
                        d="M9 14H15"
                        stroke={isAdd ? "white" : "#b0897f"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        />
                        <path
                        d="M12 11L12 17"
                        stroke={isAdd ? "white" : "#b0897f"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        />
                    </svg>
                    </button>
                </div>
            </div>
            <h1 className="mt-2.5 text-[24px] font-medium">J.VER Man Shirts Solid Long Sleeve Stretch <br /> Wrinkle-Free With Blue</h1>
            <h2 className="text-[20px] font-medium">$300.00  <span className="line-through text-[16px]" style={{color:"rgba(138, 138, 138, 1)"}}>$360.00</span></h2>
            <p className="text-[12px] font-normal mb-3">This price is exclusive of taxes.</p>
            <p className="text-[14px] pb-3" style={{borderBottom:"1px solid rgba(230, 230, 230, 1)"}}>Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy <br /> Lorem ipsum dolor sit amet, diam nonummy</p>
            

            <div className="w-65 container-select mt-8">
                <div className="relative">
                    <label className="-top-2.5 px-1 left-5 absolute bg-white text-[12px] mb-1">
                    Type
                </label>
                    <select
                    className="
                        w-full
                        appearance-none
                        rounded-lg
                        border
                        bg-white
                        px-6
                        py-3.5
                        outline-none
                    "
                    style={{borderColor:"rgba(0, 0, 0, 0.15)"}}
                    >
                    <option className="text-[12px] font-medium" value="Cotton">Cotton</option>
                    <option className="text-[12px] font-medium" value="Silk">Silk</option>
                    <option className="text-[12px] font-medium" value="Wool">Wool</option>
                    </select>

                    <KeyboardArrowDownIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 "/>
                </div>
            </div>
            <div className="w-65 container-select mt-5">
                <div className="relative">
                    <label className="-top-2.5 px-1 left-5 absolute bg-white text-[12px] mb-1">
                    Size
                </label>
                    <select
                    className="
                        w-full
                        appearance-none
                        rounded-lg
                        border
                        bg-white
                        px-6
                        py-3.5
                        outline-none
                    "
                    style={{borderColor:"rgba(0, 0, 0, 0.15)"}}
                    >
                    <option className="text-[12px] font-medium" value="Cotton">sm</option>
                    <option className="text-[12px] font-medium" value="Silk">lg</option>
                    <option className="text-[12px] font-medium" value="Wool">xl</option>
                    </select>

                    <KeyboardArrowDownIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 "/>
                </div>
            </div>
            <div className="color">
                <p className="text-[20px] font-medium mt-6 mb-3">Color</p>
                <div className="flex gap-3">
                    <div className="flex gap-3">
                    {colors.map((color) => (
                        <label
                        key={color.id}
                        htmlFor={color.id}
                        className={`
                            ${
                                selected === color.id
                                ? "ring-2 ring-black ring-offset-2"
                                : "border-gray-300"
                            }
                            `}
                        >
                        <input
                            type="radio"
                            name="color"
                            id={color.id}
                            checked={selected === color.id}
                            onChange={() => setSelected(color.id)}
                        />
                        <span style={{ background: color.value }} />
                        </label>
                    ))}
                    </div>
                </div>
            </div>
            <h3 className="mt-4 text-[20px] font-medium">Quantity <span className="text-[16px] font-normal" style={{color:"rgba(138, 138, 138, 1)"}}>($300.00 for Piece)</span></h3>
        
            <div className="flex justify-between flex-wrap gap-5 mt-[20px]">
                <div className="flex gap-4 items-center">
                    <div className="counter">
                        <button onClick={decrease}>-</button>

                        <span>
                            {String(count).padStart(2, "0")}
                        </span>

                        <button onClick={increase}>+</button>
                    </div>
                    <h2 className="text-[24px] font-medium">$300.00</h2>
                </div>
                <button className="add-card">
                    Add to Cart
                    <Image src={shopping} alt="" />
                </button>
            </div>
        </div>
    );
}
