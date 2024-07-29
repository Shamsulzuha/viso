import { useState, useEffect } from "react";
import { MdOutlineArrowRight, MdOutlineArrowDropDown } from "react-icons/md";
import { FAQsData } from "./FAQsData";
import PrimaryHeading from "../PrimaryHeading";
import PrimaryPara from "../PrimaryPara";
import asked from "./../../assets/Asked.webp";

function FAQ() {
  const [answer, setAnswer] = useState(2);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="py-10 md:py-20 bg-background-gray" id="faqs">
        <div className="container px-6 md:px-8 xl:px-20">
          <div className="">
            <PrimaryHeading
              Heading1="Here are few"
              Heading2="Steps"
              Heading3=" to follow you!"
            />
            <PrimaryPara para="Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit " />
          </div>
          <div className="lg:grid lg:grid-cols-3 lg:gap-10 relative">
            <div className="lg:col-span-1 flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-10 z-0 lg:static lg:top-0 lg:left-0 lg:translate-x-0 lg:translate-y-0 lg:opacity-100 select-none">
              <img src={asked} />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center items-center lg:justify-end lg:items-end xl:gap-10 gap-8 z-20">
              {FAQsData.map((faqs, i) => {
                return answer == faqs.id ? (
                  <div
                    key={i}
                    className="xl:p-10 lg:p-8 md:p-6 p-5 rounded-[40px] shadow-lg bg-white md:w-[600px] xl:w-[770px]"
                  >
                    <div
                      onClick={() => setAnswer(0)}
                      className="flex gap-2 justify-between items-center cursor-pointer"
                    >
                      <h3 className="font-medium text-dark-blue text-sm sm:text-base md:text-xl">
                        {faqs.question}
                      </h3>
                      <div>
                        <MdOutlineArrowRight className="text-3xl sm:text-4xl md:text-5xl" />
                      </div>
                    </div>
                    <p className="font-light text-[#333] text-xs sm:text-sm md:text-lg md:pt-4 pt-1 max-w-[350px] md:max-w-full">
                      {faqs.answer}
                    </p>
                  </div>
                ) : (
                  <div key={i}>
                    <div className="xl:p-10 lg:p-8 md:p-6 p-5 rounded-[194px] bg-white md:w-[600px] xl:w-[770px]">
                      <div
                        onClick={() => setAnswer(faqs.id)}
                        className="flex gap-2 justify-between items-center cursor-pointer"
                      >
                        <h3 className="font-medium text-dark-blue text-sm sm:text-base md:text-xl">
                          {faqs.question}
                        </h3>
                        <div>
                          <MdOutlineArrowDropDown className="text-3xl sm:text-4xl md:text-5xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
