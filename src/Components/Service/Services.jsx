import PrimaryHeading from "../PrimaryHeading";
import PrimaryPara from "../PrimaryPara";
import ServicesCard from "./ServicesCard";
import ViewAll from "../ViewAll";
import service1 from "./../../assets/Service1.webp";
import service2 from "./../../assets/Service2.webp";
import service3 from "./../../assets/Service3.webp";
import service4 from "./../../assets/Service4.webp";
import service5 from "./../../assets/Service5.webp";
import service6 from "./../../assets/Service6.webp";
import service7 from "./../../assets/Service7.webp";
import service8 from "./../../assets/Service8.webp";

function Services() {
  return (
    <>
      <div className="py-10 md:py-20" id="services">
        <div className="container px-3 sm:px-6 md:px-8 xl:px-20">
          <div className="">
            <PrimaryHeading
              Heading1="Here are the"
              Heading2="Services"
              Heading3=" that we Offer!"
            />
            <PrimaryPara para="Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Pulvinar orci ut massa  Pulvinar orci ut massa Lorem ipsum dolor sit " />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            <ServicesCard imgC={service1} name="Immigration Visa" />

            <ServicesCard imgC={service2} name="Work Visa" />

            <ServicesCard imgC={service3} name="Study Visa" />

            <ServicesCard imgC={service4} name="Business Visa" />

            <ServicesCard imgC={service5} name="Tourist Visa" />

            <ServicesCard imgC={service6} name="Dependent Visa" />

            <ServicesCard imgC={service7} name="Transit Visa" />

            <ServicesCard imgC={service8} name="Residence Visa" />
          </div>
          <ViewAll See="Learn More" />
        </div>
      </div>
    </>
  );
}

export default Services;
