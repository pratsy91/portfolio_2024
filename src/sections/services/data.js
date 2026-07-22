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

const data = {
  frontend: [
    { id: 1, icon: <SiReact />, name: "React.js / React Native" },
    { id: 2, icon: <SiRedux />, name: "Redux" },
    { id: 3, icon: <SiNextdotjs />, name: "Next.js" },
    { id: 4, icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { id: 5, icon: <SiTypescript />, name: "TypeScript" },
  ],
  backend: [
    { id: 1, icon: <DiNodejs />, name: "Node.js" },
    { id: 2, icon: <SiExpress />, name: "Express.js" },
    { id: 3, icon: <SiDjango />, name: "Django" },
    { id: 4, icon: <SiNestjs />, name: "NestJS" },
    { id: 5, icon: <SiGraphql />, name: "GraphQL" },
  ],
  databases: [
    { id: 1, icon: <SiPostgresql />, name: "PostgreSQL" },
    { id: 2, icon: <SiMysql />, name: "MySQL" },
    { id: 3, icon: <SiMongodb />, name: "MongoDB" },
  ],
  tools: [
    { id: 1, icon: <SiDocker />, name: "Docker" },
    { id: 2, icon: <SiAmazonaws />, name: "AWS" },
    { id: 3, icon: <SiGooglecloud />, name: "GCP" },
  ],
};

export default data;
