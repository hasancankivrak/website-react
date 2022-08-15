import React from "react";
import "./solt.css";
import Img1 from "../assets/univel.png";
import Img2 from "../assets/griffin.png";
import Img3 from "../assets/btnimg.png";
const Products = () => {
    return (
        <div className="flex bg-[#0A3E78] lg:w-[1920px] lg:h-[982px] md:w-full md:h-[700px] sm:h-[2000px] sm:w-auto  relative" id="products" >
            {/*Head content div*/}
            <div className="flex flox-row ml-[10px]">
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[581px] lg:ml-[181px] lg:mt-[30px] sm:w-[80px] sm:mt-[20px] sm:mr-[5px]">
            </div>
            <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mt-[-10px] lg:mr-[30px] sm:text-[30px]">PRODUCTS</div>
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[581px] lg:mr-[181px] lg:mt-[30px] sm:w-[90px] sm:mt-[20px] sm:ml-[5px]"></div>
            </div>
            {/*End of head content div*/}
            {/*Content div*/}
            <div className="lg:flex lg:flex-row lg:space-x-[-900px] lg:mt-[30px] sm:flex sm:flex-col sm:space-y-[700px]">
                {/*First div*/}
                <div className="lg:h-[396px] lg:w-[396px] lg:mt-[85px] lg:ml-[-1650px] lg:mb-[99px] bg-[#282F35] rounded-[20px] border-4 border-[#707070] sm:h-[300px] sm:w-[300px] sm:ml-[-300px] sm:mt-[100px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/* First Image Div*/}
                    <div className="lg:h-[623px] lg:w-[736px] lg:mt-[27px] lg:ml-[2px] sm:h-[250px] sm:w-[250px] sm:mt-[60px] sm:ml-[20px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                        <img src={Img1} alt="univelimg" />
                    </div>
                    {/*End of first image div*/}
                        <p className="lg:text-[35px] text-white font-bold lg:ml-[130px] lg:mt-[-240px] sm:mt-[10px] sm:ml-[90px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">UNIVEL</p>
                        <div className="lg:h-[204px] lg:w-[618px] lg:ml-[-100px] sm:h-[200px] sm:w-[290px]"data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                        <p className="lg:text-[24px] text-white font-bold sm:text-[20px] sm:text-center ">
                        It is a VR Metaverse project built on the blockchain.  Our goal is to deliver an immersive Metaverse  experience by providing a stunning virtual  playground where users can play, socialize, learn,  own, create and share unique experiences  across a wide variery of platforms
                        </p></div>
                        <a href="https://univel.io/"><button className="lg:bg-[#CCCCCC] lg:text-[25px] text-black text-center rounded-[50px] lg:w-[554px] 
                        lg:h-[83px] lg:ml-[-60px] lg:space-x-[35px] lg:mt-[40px] sm:h-[60px] sm:w-[260px] sm:mt-[180px] sm:ml-[20px] lg:hover:bg-[#1AADD8]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                            <img src={Img3} className="lg:ml-[97px] sm:h-[40px] sm:w-[40px] sm:ml-[20px]"/>
                            <p className="text-black text-center font-bold lg:text-[35px] lg:mt-[-50px] sm:mt-[-40px] sm:text-[30px] sm:ml-[20px]">univel.io</p></button></a>
                    </div>
                </div>
                {/*Second div*/}
                <div className="lg:h-[396px] lg:w-[396px] lg:mt-[110px] lg:ml-[-650px] lg:mb-[99px] bg-[#282F35] rounded-[20px] border-4 border-[#707070] sm:h-[300px] sm:w-[300px] sm:ml-[-300px] sm:mt-[1100px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
                    {/* Second Image Div*/}
                    <div className="lg:h-[623px] lg:w-[736px] lg:mt-[27px] lg:ml-[2px] sm:h-[250px] sm:w-[250px] sm:mt-[30px] sm:ml-[15px]" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000">
                        <img src={Img2} alt="griffinimg" />
                    </div>
                    {/*End of second image div*/}
                    <p className="lg:text-[35px] text-white font-bold lg:ml-[130px] lg:mt-[-240px] sm:mt-[30px] sm:ml-[70px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">GRIFFIN ART</p>
                        <div className="lg:h-[204px] lg:w-[618px] lg:ml-[-100px] sm:h-[200px] sm:w-[290px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
                        <p className="lg:text-[24px] text-white font-bold sm:text-[20px] sm:text-center ">
                        Griffin Art is a blockchain-based #P2E wargame  with an NFT market as well as a gaming and  NFT market project.
                        </p></div>
                        <a href="https://griffinart.finance/"><button className="lg:bg-[#CCCCCC] lg:text-[25px] text-black text-center rounded-[50px] lg:w-[554px] 
                        lg:h-[83px] lg:ml-[-60px] lg:space-x-[35px] lg:mt-[40px] sm:h-[60px] sm:w-[260px] sm:mt-[80px] sm:ml-[20px] lg:hover:bg-[#1AADD8]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
                            <img src={Img3} className="lg:ml-[97px] sm:h-[30px] sm:w-[30px] sm:ml-[20px]"/>
                            <p className="text-black text-center font-bold lg:text-[35px] lg:mt-[-50px] sm:mt-[-30px] sm:text-[20px] sm:ml-[30px]">griffinart.finance</p></button></a>
                    </div>
                {/*End of content div*/}
            </div>
    )
}
export default Products;