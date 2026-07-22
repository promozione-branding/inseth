import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";

import Whychoose from "@/components/Landingpage/Whychoose";

import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
import Popup from "@/components/Popup";
// import CityPage from "../components/City";

import Loactions from "@/components/Locations";
import ProductSection from "@/components/Landingpage/Product";
import IndustriesSection from "@/components/Landingpage/Industries";


export default function Home() {
  return (
    <>
      <Popup></Popup>
      <Hero />
<Countup />
   
        <Formsection></Formsection>
 <ProductSection/>
      <About />
      <IndustriesSection/>
       
          <Cta></Cta>
      {/* <Pointer></Pointer>
      <Categories />
     
      <Whoweare />
      <Otherproduct></Otherproduct>
      <Dedicated></Dedicated>

    
      <Process></Process> */}
      <Whychoose />

      <TestimonialSlider></TestimonialSlider>
      <Faq></Faq> 
      {/* <Loactions />

      {/* <CityPage /> */}
    </>
  );
}
