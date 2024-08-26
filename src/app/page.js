// app/page.js
"use client";

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntroductionSection from "./components/IntroductionSection";
import ShopNewArrivals from "./components/ShopNewArrivals";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <ShopNewArrivals />
      <Testimonials />
      <Footer />
    </main>
  );
}
