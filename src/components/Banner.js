import React from "react";
import Img from "../assets/banner.png";
const Banner = () => {
    return (
            <div className="flex lg:h-[922px] lg:w-[1920px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
                <div className="flex flex-col lg:flex-row">
                        <div class="relative">
                            <img src={Img} className="lg:h-full lg:w-full md:h-[300px] md:w-[500px] sm:h-[300px] sm:w-[400px]"/>
                            <div class="absolute bottom-0 left-25 right-0 px-4 py-2 opacity-100">
                                <h3 class="lg:text-xl text-white font-bold md:text-[15px] md:text-right sm:text-[10px] sm:text-right">
                                    WEB 3.0<br/>
                                    BLOCKCHAIN<br/>
                                    GAME-FI<br/>
                                    NFT
                                    </h3>
                                    <button className="text-black bg-[#FC5723] focus:ring-4 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 md:h-[50px] md:w-[130px] sm:mr-[-10px]"><a href="#">EXPLORE ↓</a></button>
                            </div>
                        </div>
                </div>
            </div>
    )
}
export default Banner;