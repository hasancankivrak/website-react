import React from "react";
import "./solt.css";
import Img1 from "../assets/sol1.png";
import Img2 from "../assets/sol2.png";
const Solt = () => {
    return (
    <div className="flex bg-[#0A2C59] lg:w-[1900] lg:h-[1900px] md:w-[1900px] md:h-[700px] sm:h-[600px] sm:w-auto  relative" id="solutions">
            {/*Head content div*/}
            <div className="flex flox-row ml-[10px]">
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[581px] lg:ml-[181px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:mr-[5px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
            </div>
            <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mr-[30px] sm:text-[30px]"data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">SOLUTIONS</div>
            <div style={{ borderTop: "6px solid #1FACD7 ",}} className="lg:w-[581px] lg:mr-[181px] lg:mt-[40px] sm:w-[90px] sm:mt-[20px] sm:ml-[5px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000"></div>
            </div>
            {/*End of head content div*/}
            {/*Content div*/}
        <div className="lg:flex lg:flex-row lg:space-y-[10px]">
            <div className="lg:space-x-[150px] lg:ml-[50px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                {/*First image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:left-35 lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:ml-[55px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br /></p>
                            <p className="text-white lg:ml-[110px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of first image div*/}
                {/*Second image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:left-35 lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:ml-[615px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br /></p>
                            <p className="text-white lg:ml-[670px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                    {/*End of image and text div*/}
                </div>
                {/*End of second image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[120px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:w-[1500px] lg:left-[1200px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br />
                            </p>
                            <p className="text-white lg:ml-[140px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of content div*/}
            </div>
            <div className="lg:space-x-[150px] lg:ml-[50px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                {/*First image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[720px] lg:ml-[-1800px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:left-35 lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:ml-[55px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br /></p>
                            <p className="text-white lg:ml-[110px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of first image div*/}
                {/*Second image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[720px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:left-35 lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:ml-[615px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br /></p>
                            <p className="text-white lg:ml-[670px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                    {/*End of image and text div*/}
                </div>
                {/*End of second image div*/}
                <div className="lg:h-[409px] lg:w-[409px] lg:mt-[720px] lg:ml-[-1750px] lg:mb-[99px] bg-[#0A3E78] rounded-[20px] md:h-[300px] md:w-[300px] md:mt-[50px] sm:h-[250px] sm:w-[250px] sm:ml-[-280px] sm:mt-[50px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                    {/*First image text div*/}
                    <div className="lg:h-[49px] lg:w-[356px] lg:mt-[-12px] lg:ml-[38px] lg:mr-[345px] md:h-[10px] md:w-full">
                        <p className="text-white lg:text-[20px] lg:mt-[10px] md:text-[25px] md:ml-[20px] sm:text-[20px] sm:ml-[10px]">VR INTEGRATION</p>
                    </div>
                    {/*End of first image text div*/}
                    {/*Image and text div*/}
                    <div className="lg:h-[345px] lg:w-[408px] lg:mt-[19px] lg:ml-[2px] md:w-[230px] md:h-[250px] md:mt-[40px] md:ml-[15px] sm:mt-[5px]">
                        <img src={Img1} alt="vrımg" />
                        <div class="absolute lg:bottom-0 lg:w-[1500px] lg:left-[1200px] lg:right-0 md:bottom-[320px] sm:right-[15px] sm:top-[290px] sm:left-[110px] px-4 py-2 opacity-100">
                            <p className="text-white lg:text-[15px] lg:mt-[195px] md:text-[8px] md:mt-[30px] md:ml-[80px] md:mr-[440px] sm:ml-[-45px] sm:text-[9px] sm:mt-[-30px]">AYBEE helps to integrate projects into virtual reality<br />
                            </p>
                            <p className="text-white lg:ml-[140px] lg:mt-[-10px] lg:text-[15px] md:text-[8px] md:ml-[110px] sm:text-[9px] sm:ml-[-15px] sm:mt-[-0px]">glasses by providing VR integration service.</p>
                        </div>
                    </div>
                    {/*End of image and text div*/}
                </div>
                {/*End of content div*/}
            </div>
        </div>
        </div>
    )
}
export default Solt;