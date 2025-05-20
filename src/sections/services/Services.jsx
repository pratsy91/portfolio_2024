import "./services.css";
import { SiReact, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";

const TechnologyStack = () => {
  return (
    <section id="services">
      <h2>Technology Stack</h2>
      <div className="tech-stack-container">
        <div className="tech-section">
          <h3>Frontend</h3>
          <div className="tech-icons">
            <SiReact className="tech-icon react" />
            <SiRedux className="tech-icon redux" />
            <SiNextdotjs className="tech-icon nextjs" />
            <SiTailwindcss className="tech-icon tailwind" />
          </div>
        </div>

        <div className="tech-section">
          <h3>Backend</h3>
          <div className="tech-icons">
            <DiNodejs className="tech-icon nodejs" />
            <SiExpress className="tech-icon express" />
            <SiMongodb className="tech-icon mongodb" />
            <SiPostgresql className="tech-icon postgresql" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
