import React, { useRef } from "react";
import "./solt.css";
import Logo from "../assets/logo3.png";
import emailjs from '@emailjs/browser';
import {SERVICE_KEY, FIRST_TEMPLATE_KEY, PUBLIC_KEY} from '../config.js'
// import * as dotenv from 'dotenv'

// dotenv.config()
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_KEY, FIRST_TEMPLATE_KEY, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="bg-[#0A2C59] lg:w-[1920px] lg:h-[982px] sm:w-auto sm:h-auto">
            {/*Header*/}
            <div className="flex flox-row ml-[10px]">
                <div style={{ borderTop: "6px solid #1FACD7 ", }} className="lg:w-[581px] lg:ml-[181px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:mr-[5px]">
                </div>
                <div className="text-center lg:text-[51px] lg:ml-[30px] lg:mr-[30px] sm:text-[30px]">CONTACT US</div>
                <div style={{ borderTop: "6px solid #1FACD7 ", }} className="lg:w-[581px] lg:mr-[181px] lg:mt-[40px] sm:w-[80px] sm:mt-[20px] sm:ml-[5px]"></div>
            </div>
            {/*End Of Header*/}
            {/*Form div*/}
            <div>
                <form ref={form} onSubmit={sendEmail} className="lg:ml-[293px] flex lg:flex-row lg:space-x-[45px] sm:flex-col sm:ml-[85px] sm:mt-[20px]">
                    {/*name e-mail subject forms div*/}
                    <div className="flex flex-col space-y-[38px]">
                        <input name="u_name" type="text" className="lg:w-[645px] lg:h-[101px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder="Name"></input>
                        <input name="u_email" type="text" className="lg:w-[645px] lg:h-[101px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder="E-Mail"></input>
                        <input name="u_subject" type="text" className="lg:w-[645px] lg:h-[101px] text-black rounded-[50px] lg:mt-[205px] sm:h-[50px] sm:w-[200px] sm:ml-[-40px]" placeholder="Subject"></input>
                    </div>{/*end of name e-mail subject forms div*/}
                    <input name="message" type="textarea" className="lg:w-[637px] lg:h-[377px] text-black rounded-[30px] lg:mt-[205px] sm:h-[300px] sm:w-[300px] sm:mt-[50px] sm:ml-[-40px]" placeholder="Message"></input>
                    {/*Button div*/}
                    <div>
                        <button type="submit" className="bg-[#1BADD6] lg:rounded-[50px] lg:w-[252px] lg:h-[83px] lg:ml-[-840px] lg:mt-[654px] sm:ml-[10px] sm:mt-[50px] sm:h-[50px] sm:w-[200px] sm:rounded-[40px]">Send now</button>
                    </div>
                </form>
            </div>
            {/*End of form div*/}
            {/*Line div*/}
            <div style={{ borderTop: "6px solid #1FACD7 ", }} className="lg:w-auto lg:ml-[181px] lg:mt-[40px] sm:w-auto sm:mt-[20px] sm:mr-[5px]">
            </div>
            {/*End of line div*/}
            {/*Copyright div*/}
            <div className="lg:h-[231] lg:w-[1920] bg-[#0A2C59] sm:w-auto sm:w-auto">
                <img src={Logo} alt="logo" className="lg:h-[75px] lg:w-[273px] lg:ml-[177px] lg:mt-[53px] sm:h-[50px] sm:w-[200px] sm:ml-[85px] sm:mt-[20px]" /><br />
                <p className="lg:text-[24px] text-white text-center lg:ml-[-1250px] lg:mt-[-1px] lg:mb-[48px] sm:ml-[20px] sm:text-[20px]"> Aybee Bilişim ve Yazılım Hizmetleri A.Ş.</p><br />
                <p className="text-white text-center sm:text-[20px]">© All Rights Reserved.</p>
            </div>
            <div></div>
            {/*End of copyright div*/}
        </div>
    )
}
export default Contact;