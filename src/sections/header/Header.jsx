import { useEffect } from "react";
import HeaderImage from "../../assets/header.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Pratap Singh Chouhan" />
        </div>
        <p className="header__role" data-aos="fade-up">
          Software Engineer · Full Stack
        </p>
        <h1 data-aos="fade-up">Pratap Singh Chouhan</h1>
        <p className="header__tagline" data-aos="fade-up">
          I build fast, reliable web and mobile products — from polished UIs to
          scalable APIs — with a focus on performance and real user impact.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let&apos;s Talk
          </a>
          <a href="#portfolio" className="btn light">
            View Projects
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social link"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
