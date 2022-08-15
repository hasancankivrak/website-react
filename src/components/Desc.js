import React from "react";
import Logo from "../assets/logo2.png";
import "./desc.css";
const Desc = () => {
    return (
        <div className="flex bg-[#282F35] relative lg:h-[581px] lg:w-[1920px] sm:w-auto sm:h-auto md:w-[500px] md:h-[500px] " id="aboutus" data-aos="fade-down" data-aos-delay="100" data-aos-duration="2000">
            {/*Text and image div*/}
            <div className="lg:space-x-[1px] lg:flex lg:flex-row md:flex-col sm:flex-col">
                <div className="lg:space-y-[30px] md:flex-col md:space-y-[0px] sm:flex-col sm:space-y-[0px]">
                    {/*Head div*/}
                    <div className="lg:w-[386px] lg:h-[63px] lg:mt-[30px] lg:ml-[50px] md:w-[250px] md:h-[200px] sm:h-[100px] sm:w-[200px] sm:text-left sm:mt-[10px]">
                        <p className="lg:text-white lg:font-bold lg:text-[51px] lg:w-[386px] md:w-[550px] md:text-center md:text-[30px] md:mt-[20px] md:ml-[-30px] sm:h-[50px] lg:h-[63px] sm:w-[50px] sm:text-[25px] sm:ml-[100px] sm:text-center sm:w-[150px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000"> WHO WE ARE!</p>
                    </div>
                    {/* End Of Head div*/}
                    {/*Content div*/}
                    <div className="lg:w-[1200px] lg:h-[278px] lg:ml-[70px] md:h-[300px] md:w-[800px] md:ml-[20px] sm:h-[100px] sm:w-[300px] sm:h-[100px]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="2000">
                        <p className="lg:text-white lg:text-[25px] lg:mt-[50px] lg:text-left lg:ml-[-40px] md:text-center md:mr-[390px] md:text-[15px] md:mt-[-140px] md:ml-[55px] sm:text-center sm:text-[15px] sm:ml-[50px]">
                            As Aybee,we have been focusing on making a difference
                            by signing innovative projects since our establishment in 2021.
                            We started our activities in order to meet the special solution need of
                            our customers in the field of information and software technologies and
                            to produce advanced technology projects with innovative approaches,
                            Our espertise is mostly in the areas of Web 3.0,Blockchain,Metaverse,
                            Virtual Reality and Game Development</p>
                    </div>
                    {/*End Of content div*/}
                </div>
                {/*Image div*/}
                <div className="lg:w-[450px] lg:h-[510px] lg:mt-[35px] lg:mb-[36px] lg:mr-[75px] md:mt-[1px] md:h-[50px] md:w-[100px] sm:h-auto sm:w-[75px] sm:mt-[460px] sm:ml-[2px]" data-aos="fade-left" data-aos-delay="100" data-aos-duration="2000">
                    <img src={Logo} className="lg:mt-[20px] md:ml-[200px] mb:mt-[10px] mb:mb-[20px] md:mt-[1px] sm:mt-[-190px] sm:ml-[140px]" alt="logo2" />
                </div>
                {/*End Of Image div*/}
            </div>
        </div>
    )
}
export default Desc;