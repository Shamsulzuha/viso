import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp, FaFigma } from "react-icons/fa";
import logo from "./../assets/Logo.webp";

function Footer() {
  return (
    <>
      <div className="py-6 sm:py-10">
        <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-y-5 gap-x-2 md:gap-5 lg:gap-16 xl::gap-20">
            <div className="col-span-3 md:col-span-2">
              <div className="md:pb-5 pb-2 pt-2">
                <img src={logo} alt="" />
              </div>
              <p className="text-xs lg:text-sm font-light text-[#333] leading-5 lg:leading-6">
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat...
                <span className="text-light-blue cursor-pointer">
                  Read More
                </span>
              </p>

              <div className="flex gap-5 mt-2 xl:mt-5">
                <div className="bg-[#F4F5FE] cursor-pointer xl:w-12 xl:h-12 h-10 w-10 rounded-full flex justify-center items-center">
                  <CiFacebook className="xl:text-3xl text-2xl text-light-blue" />
                </div>
                <div className="bg-[#F4F5FE] cursor-pointer xl:w-12 xl:h-12 h-10 w-10 rounded-full flex justify-center items-center">
                  <AiOutlineYoutube className="xl:text-3xl text-2xl text-light-blue" />
                </div>
                <div className="bg-[#F4F5FE] cursor-pointer xl:w-12 xl:h-12 h-10 w-10 rounded-full flex justify-center items-center">
                  <FaWhatsapp className="xl:text-3xl text-2xl text-light-blue" />
                </div>
                <div className="bg-[#F4F5FE] cursor-pointer xl:w-12 xl:h-12 h-10 w-10 rounded-full flex justify-center items-center">
                  <FaFigma className="xl:text-3xl text-2xl text-light-blue" />
                </div>
              </div>
            </div>

            <div className="">
              <SecondaryHeading fHeading="About" />
              <ul className="flex flex-col gap-4 text-[#333] font-light md:text-sm text-xs">
                <li>About us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Jobs</li>
                <li>In Press</li>
              </ul>
            </div>

            <div className="">
              <SecondaryHeading fHeading="Support" />
              <ul className="flex flex-col gap-4 text-[#333] font-light md:text-sm text-xs">
                <li>Contact us</li>
                <li>Online Chat</li>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Ticketing</li>
              </ul>
            </div>

            <div className="">
              <SecondaryHeading fHeading="FAQ" />
              <ul className="flex flex-col gap-4 text-[#333] font-light md:text-sm text-xs">
                <li>Account</li>
                <li>Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center lg:mt-14 mt-10 text-[#9A9EA6] text-sm">
          © 2023-2032, All Rights Reserved Shams
        </div>
      </div>
    </>
  );
}

export default Footer;
