import React from "react";
import Img from "../assets/banner.png";
const Banner = () => {
    return (
            <div className="flex lg:h-[922px] lg:w-[1900px]">
                <div className="flex flex-col lg:flex-row">
                        <div class="relative">
                            <img src={Img} className="lg:h-full lg:w-full md:h-[300px] md:w-[500px] sm:h-[300px] sm:w-[400px]"/>
                            <div class="absolute lg:bottom-[120px] lg:left-25 lg:right-[40px] px-4 py-2 opacity-100 sm:bottom-0 sm:left-25 sm:right-0">
                                <h3 class="lg:text-[30px] text-white font-bold md:text-[15px] md:text-right sm:text-[10px] sm:text-right">
                                    WEB 3.0<br/>
                                    BLOCKCHAIN<br/>
                                    GAME-FI<br/>
                                    NFT
                                    </h3>
                                    <button className="text-black bg-[#1AADD8]  focus:ring-4 ml-[100px] rounded-full text-[20px] px-5 py-2.5 text-center mr-3 md:mr-0 md:h-[50px] md:w-[130px] sm:mr-[-10px]"><a href="#">EXPLORE ↓</a></button>
                            </div>
                        </div>
                </div>
            </div>
    )
}
export default Banner;