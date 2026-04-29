import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MethodSection from "./components/MethodSection";
import PicturesSection from "./components/PicturesSection";
import InsightsSection from "./components/InsightsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
      <div className="relative" style={{ zIndex: 0 }}>
        <ServicesSection />
      </div>
      <div
        className="relative"
        style={{
          zIndex: 30,
          marginTop: "-100vh",
          borderRadius: "2rem 2rem 0 0",
          overflow: "hidden",
        }}
      >
        <MethodSection />
      </div>
      <PicturesSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}