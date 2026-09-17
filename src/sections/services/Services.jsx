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

const stack = [
  {
    title: "Frontend",
    items: [
      { icon: <SiReact />, name: "React / RN", className: "react" },
      { icon: <SiRedux />, name: "Redux", className: "redux" },
      { icon: <SiNextdotjs />, name: "Next.js", className: "nextjs" },
      { icon: <SiTailwindcss />, name: "Tailwind", className: "tailwind" },
      { icon: <SiTypescript />, name: "TypeScript", className: "typescript" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <DiNodejs />, name: "Node.js", className: "nodejs" },
      { icon: <SiExpress />, name: "Express", className: "express" },
      { icon: <SiDjango />, name: "Django", className: "django" },
      { icon: <SiNestjs />, name: "NestJS", className: "nestjs" },
      { icon: <SiGraphql />, name: "GraphQL", className: "graphql" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL", className: "postgresql" },
      { icon: <SiMysql />, name: "MySQL", className: "mysql" },
      { icon: <SiMongodb />, name: "MongoDB", className: "mongodb" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { icon: <SiDocker />, name: "Docker", className: "docker" },
      { icon: <SiAmazonaws />, name: "AWS", className: "aws" },
      { icon: <SiGooglecloud />, name: "GCP", className: "gcp" },
    ],
  },
];

const TechnologyStack = () => {
  return (
    <section id="services">
      <h2>Skills & Stack</h2>
      <p>
        Tools I use daily to design, build, and ship production software.
      </p>
      <div className="container tech-stack-container">
        {stack.map((group) => (
          <div className="tech-section" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tech-icons">
              {group.items.map((item) => (
                <div className="tech-icon-container" key={item.name}>
                  <span className={`tech-icon ${item.className}`} title={item.name}>
                    {item.icon}
                  </span>
                  <span className="tech-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStack;
