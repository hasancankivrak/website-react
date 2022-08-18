import React from "react";
import "./solt.css";
import Img1 from "../assets/sol1.png";
import Img2 from "../assets/sol2.png";
import Img3 from "../assets/sol3.png";
import Img4 from "../assets/sol4.png";
import Img5 from "../assets/sol5.png";
import Img6 from "../assets/sol6.png";
import Img7 from "../assets/sol7.png";
import Img8 from "../assets/sol8.png";
import Img9 from "../assets/sol9.png";
const Solt = () => {
    return (
    <div className="flex bg-[#0A2C59] lg:w-[1900] lg:h-[1900px] md:w-[1900px] md:h-[700px] sm:h-[3600px] sm:w-auto  relative" id="solutions">
            {/*Head content div*/}
            <div className="flex flox-row ml-[10px]">
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[570px] lg:ml-[181px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:mr-[5px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
            </div>
            <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mr-[30px] sm:text-[30px]"data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">SOLUTIONS</div>
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[610px] lg:mr-[181px] lg:mt-[40px] sm:w-[90px] sm:mt-[20px] sm:ml-[5px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000"></div>
            </div>
            {/*End of head content div*/}
            {/*Content div*/}
        <div className="lg:flex lg:flex-row sm:flex sm:flex-col sm:space-y-[50px]">
            <div className="lg:space-x-[150px] lg:ml-[50px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                {/*First image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[300px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[10px] lg:ml-[70px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">Our Virtual Reality headset solutions provide everything you need to create and experience striking VR environments.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of first image div*/}
                {/*Second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[120px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[756px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[10px] lg:ml-[-10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">SMART CONTRACT CREATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img2} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">AYBEE serves projects and coorperations to create and deploy smart contracts.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[10px] lg:ml-[50px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">NFT MINT WEBSITE</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img3} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We can create NFT mint platforms to luanh your digital assets.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of content div*/}
            </div>
            <div className="lg:space-x-[150px] lg:ml-[50px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                {/*First image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[720px] lg:ml-[-1800px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[556px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[22px] lg:mt-[10px] lg:ml-[-20px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">WEBSITE DESIGN AND SOFTWARE</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img4} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We design impressive websites attracting users according to your project goals and the concept of the project.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of first image div*/}
                {/*Second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[720px] lg:ml-[-1800px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[556px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[10px] lg:ml-[20px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">INFLUENCER MARKETING</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img5} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">With effective and well-known influencers, we help our clients to upgrade their projects to better levels.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[720px] lg:ml-[-1800px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[15px] lg:ml-[50px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">GRAPHIC DESIGN</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img6} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We create brand awareness with 3D designs, animations and videos suitable for your project.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of content div*/}
                <div className="lg:space-x-[150px] lg:ml-[50px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                {/*First image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[1320px] lg:ml-[-1705px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[556px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[15px] lg:ml-[25px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">COLLABS MARKETING</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img7} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We help you cooperate and collaborate with big projects to grow your community faster.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of first image div*/}
                {/*Second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[1320px] lg:ml-[-1705px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[556px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[25px] lg:mt-[15px] lg:ml-[-4px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">OUTDOOR ADVERTISEMENT</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img8} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[70px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-70px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We reach millions of crypto users by making outdoor and billboard adversitesements around the World like Times Square or Istanbul Airport.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of second image div*/}
                <div className="lg:h-[490px] lg:w-[420px] lg:mt-[1320px] lg:ml-[-1705px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[150px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[756px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[22px] lg:mt-[15px] lg:ml-[-30px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">FAST LISTING ON COINMARKETCAP</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[380px] lg:w-[380px] lg:mt-[25px] lg:ml-[22px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img9} alt="vrımg" className="rounded-[25px]" />
                        <div class=" bg-[#0A3E78] lg:h-[110px] lg:w-[390px] sm:h-[60px] sm:rounded-[25px] sm:w-[250px] sm:mt-[-60px] lg:left-[165px] lg:mt-[-100px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-80 ">
                            <div className="">
                            <p className="lg:font-bold lg:text-[18px] sm:text-[10px] lg:ml-[5px] text-center">We provide fastest solutions to list you project on CoinMarketCap.</p>
                            </div>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of content div*/}
            </div>
        </div>
        </div>
        </div>
    )
}
export default Solt;