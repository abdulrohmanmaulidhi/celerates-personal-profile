import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import PortfolioSection from "./components/portofolioSection";
import SkillsSection from "./components/skillSection";
import handleNavClick from "./helpers/smoothScroll";

function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar onNavClick={handleNavClick} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
