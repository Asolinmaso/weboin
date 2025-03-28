import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import PartnersSection from "./components/PartnerSection";
import FeaturesSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import SemiFooter from "./components/SemiFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <SemiFooter />
      <Footer />
    </main>
  )
}