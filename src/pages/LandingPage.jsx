import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Services from "../components/landing/Services";
import Footer from "../components/landing/Footer";
import About from "../components/landing/About";
import Stats from "../components/landing/Stats";
import Doctors from "../components/landing/Doctors";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Doctors />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
