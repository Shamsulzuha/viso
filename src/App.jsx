import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Service/Services";
import Steps from "./Components/Step/Steps";
import CaseStudies from "./Components/CaseStudies";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import Customer from "./Components/Customers/Customer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collaboration from "./Components/Collaborations/Collaboration";
import FAQ from "./Components/FAQs/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Steps />
      <CaseStudies />
      <Collaboration />
      <Customer />
      <FAQ />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
