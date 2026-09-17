import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import { useRef, useState, useEffect } from "react";
import ExperienceSection from "./sections/experience/Experience";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const siteYPositionRef = useRef(0);
  const [showFloatingNav, setShowFloatingNav] = useState(true);

  useEffect(() => {
    const floatingNavToggleHandler = () => {
      const currentY = mainRef.current?.getBoundingClientRect().y ?? 0;

      if (
        siteYPositionRef.current < currentY - 20 ||
        siteYPositionRef.current > currentY + 20
      ) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }

      siteYPositionRef.current = currentY;
    };

    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
    return () => clearInterval(checkYPosition);
  }, []);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <ExperienceSection />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
