import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import WhyAccredian from "@/components/sections/WhyAccredian";
import Programs from "@/components/sections/Programs";
import Domains from "@/components/sections/Domains";
import SkillEnhancement from "@/components/sections/SkillEnhancement";
import CatFramework from "@/components/sections/CatFramework";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <Stats />

      <TrustedCompanies />

      <WhyAccredian />

      <Programs />

      <Domains />

      <SkillEnhancement />

      <CatFramework />

      <Process />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}