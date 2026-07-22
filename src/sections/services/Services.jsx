import "./services.css";
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiDjango,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazonaws,
  SiGooglecloud,
  SiGraphql,
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const TechnologyStack = () => {
  return (
    <section id="services">
      <h2>Technology Stack</h2>
      <div className="tech-stack-container">
        <div className="tech-section">
          <h3>Frontend</h3>
          <div className="tech-icons">
            <SiReact className="tech-icon react" title="React.js / React Native" />
            <SiRedux className="tech-icon redux" title="Redux" />
            <SiNextdotjs className="tech-icon nextjs" title="Next.js" />
            <SiTailwindcss className="tech-icon tailwind" title="Tailwind CSS" />
            <SiTypescript className="tech-icon typescript" title="TypeScript" />
          </div>
        </div>

        <div className="tech-section">
          <h3>Backend</h3>
          <div className="tech-icons">
            <DiNodejs className="tech-icon nodejs" title="Node.js" />
            <SiExpress className="tech-icon express" title="Express.js" />
            <SiDjango className="tech-icon django" title="Django" />
            <SiNestjs className="tech-icon nestjs" title="NestJS" />
            <SiGraphql className="tech-icon graphql" title="GraphQL" />
          </div>
        </div>

        <div className="tech-section">
          <h3>Databases</h3>
          <div className="tech-icons">
            <SiPostgresql className="tech-icon postgresql" title="PostgreSQL" />
            <SiMysql className="tech-icon mysql" title="MySQL" />
            <SiMongodb className="tech-icon mongodb" title="MongoDB" />
          </div>
        </div>

        <div className="tech-section">
          <h3>Tools & Cloud</h3>
          <div className="tech-icons">
            <SiDocker className="tech-icon docker" title="Docker" />
            <SiAmazonaws className="tech-icon aws" title="AWS" />
            <SiGooglecloud className="tech-icon gcp" title="GCP" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
