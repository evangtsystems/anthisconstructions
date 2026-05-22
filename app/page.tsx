import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FeatureStrip from "../components/FeatureStrip";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureStrip />
      <TrustBar />
      <Services />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}