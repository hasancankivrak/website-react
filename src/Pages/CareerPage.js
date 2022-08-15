import React from "react";
import "../components/solt.css";
import Img from "../assets/career.png"
import "./Career.css"
import { Link } from "react-router-dom";
import Logo from "../assets/logo3.png"
import SecondNav from "../components/SecondNav";
const CareerPage = () => {
  return (
    <>
      <SecondNav />
      <div className="lg:w-[1920px] lg:h-[982px] bg-[#1B2022] relative sm:w-auto sm:h-auto">
        {/*Content div*/}
        <div className="lg:flex lg:flex-row lg:space-x-[40px] sm:flex sm:flex-col sm:space-y-[10px]">
          {/*First image div*/}
          <Link to="/CareerForm">
            <div className="lg:h-[448px] lg:w-[448px] lg:mt-[150px] lg:ml-[120px] lg:mb-[99px] bg-[#282F35] lg:rounded-[20px] sm:h-[300px] sm:w-[300px] sm:ml-[30px] sm:mt-[90px] sm:rounded-[20px]">
              {/*Image div*/}
              <div className="lg:h-[623px] lg:w-[736px] lg:mt-[37px] lg:ml-[2px] sm:h-[200px] sm:w-[300px]">
                <img src={Img} alt="careerimg" />
              </div>
              {/*End of image div*/}
              {/*Text div*/}
              <div className="">
                <p className="text-white lg:mt-[-180px] sm:mt-[90px] sm:text-[20px] sm:ml-[10px]">Unreal Engine Developer</p>
              </div>
              {/*End of text div*/}
            </div></Link>
          {/*End of first image div*/}
          {/*Second image div*/}
          <Link to="/CareerForm">
            <div className="lg:h-[448px] lg:w-[448px] lg:mt-[150px] lg:ml-[120px] lg:mb-[99px] bg-[#282F35] lg:rounded-[20px] sm:h-[300px] sm:w-[300px] sm:ml-[30px] sm:mt-[90px] sm:rounded-[20px]">
              {/*Image div*/}
              <div className="lg:h-[623px] lg:w-[736px] lg:mt-[37px] lg:ml-[2px] sm:h-[200px] sm:w-[300px]">
                <img src={Img} alt="careerimg" />
              </div>
              {/*End of image div*/}
              {/*Text div*/}
              <div className="">
                <p className="text-white lg:mt-[-180px] sm:mt-[90px] sm:text-[20px] sm:ml-[10px]">Content Creator</p>
              </div>
              {/*End of text div*/}
            </div></Link>
          {/*End of second image div*/}
          <Link to="/CareerForm">
            <div className="lg:h-[448px] lg:w-[448px] lg:mt-[150px] lg:ml-[120px] lg:mb-[99px] bg-[#282F35] lg:rounded-[20px] sm:h-[300px] sm:w-[300px] sm:ml-[30px] sm:mt-[90px] sm:rounded-[20px]">
              {/*Image div*/}
              <div className="lg:h-[623px] lg:w-[736px] lg:mt-[37px] lg:ml-[2px] sm:h-[200px] sm:w-[300px]">
                <img src={Img} alt="careerimg" />
              </div>
              {/*End of image div*/}
              {/*Text div*/}
              <div className="">
                <p className="text-white lg:mt-[-180px] sm:mt-[90px] sm:text-[20px] sm:ml-[10px]">Senior Software Developer</p>
              </div>
              {/*End of text div*/}
            </div></Link>
          {/*End of content div*/}
        </div>
        {/*Line Div*/}
        <div style={{ borderTop: "6px solid #FC5723 ", }} className="lg:w-auto lg:ml-[181px] lg:mt-[40px] sm:w-auto sm:mt-[50px] sm:mr-[5px]">
        </div>
        {/*End Of Line div*/}
        {/*Copyright div*/}
        <div className="lg:h-[231] lg:w-[1920] bg-[#1B2022] sm:w-auto sm:w-auto">
          <img src={Logo} alt="logo" className="lg:h-[75px] lg:w-[273px] lg:ml-[177px] lg:mt-[53px] sm:h-[50px] sm:w-[200px] sm:ml-[85px] sm:mt-[20px]" /><br />
          <p className="lg:text-[24px] text-white text-center lg:ml-[-1250px] lg:mt-[-1px] lg:mb-[48px] sm:ml-[20px] sm:text-[20px]"> Aybee Bilişim ve Yazılım Hizmetleri A.Ş.</p><br />
          <p className="text-white text-center sm:text-[20px]">© All Rights Reserved.</p>
        </div>
        <div></div>
        {/*End of copyright div*/}
      </div>
    </>
  )
}
export default CareerPage