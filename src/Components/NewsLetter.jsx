import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function NewsLetter() {
  return (
    <>
      <div>
        <div className="py-10 md:py-20">
          <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
            <div className="flex flex-col justify-center items-center lg:w-4/5 xl:w-1/2 mx-auto">
              <h4 className="text-dark-blue font-bold text-2xl text-center">
                Newsletter
              </h4>
              <p className="text-lg md:text-xl font-normal text-[#333] opacity-70 text-center leading-[30px] pt-5 pb-10">
                Be the first one to know about discounts, offers and events
                weekly in your mailbox. Unsubscribe whenever you like with one
                click. Be the first one to know about discounts, offers .
              </p>
              <div className="relative flex w-full min-w-[200px] max-w-[44rem] drop-shadow-lg rounded-full">
                <button
                  type="button"
                  className="absolute right-5 top-4 z-10 select-none rounded-full bg-blue py-2 px-2 text-center text-xs font-bold text-white bg-dark-blue shadow-md transition-all hover:shadow-lg"
                >
                  <FaTelegramPlane size={18} />
                </button>
                <input
                  type="email"
                  className="w-full rounded-full px-5 py-5 pr-20 text-base xs:text-lg font-normal focus:outline-none"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
export default NewsLetter;
