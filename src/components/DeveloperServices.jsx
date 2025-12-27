"use client";
import React, { useState } from "react";
import AffiliateHeader from "@/components/affiliate/AffiliateHeader";
import AffiliateFooter from "@/components/affiliate/AffiliateFooter";
import BackToTopButton from "@/components/BackToTopButton";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./WhyChooseUs";
import ServicesBlock from "./ServicesBlock";
import PricingSection from "./PricingSection";
import CaseStudies from "./CaseStudies";
import HowWeWork from "./HowWeWork";
import TechnologyStack from "./TechnologyStack";
import Testimonials from "./Testimonials";
import ConsultingQuestionnaire from "./ConsultingQuestionnaire";
import ContactForm from "./ContactForm";


export default function DeveloperServicesPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#01091C] px-4 pb-24 sm:px-6 lg:px-8">
        <AffiliateHeader />

        <div className="relative z-10 mt-32 flex w-full max-w-7xl flex-col gap-16">
          <HeroSection />
          <WhyChooseUs />
          <ServicesBlock />
          <PricingSection />
          <CaseStudies />
          <HowWeWork />
          <TechnologyStack />
          <Testimonials />
          <ConsultingQuestionnaire
            search={search}
            setSearch={setSearch}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
          <ContactForm />
        </div>
      </main>
      <AffiliateFooter />
      <BackToTopButton />
    </>
  );
}
