"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Social from "@/components/Social";
import Pricing from "@/components/Pricing";
import FAQS from "@/components/FAQS";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Social/>
      <FAQS/>
      <CTA/>
      <Footer/>
    </main>
  );
}
