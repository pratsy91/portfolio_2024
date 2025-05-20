import { SiReact, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiExpress } from "react-icons/si";

const data = {
  frontend: [
    {
      id: 1,
      icon: <SiReact />,
    },
    {
      id: 2,
      icon: <SiRedux />,
    },
    {
      id: 3,
      icon: <SiNextdotjs />,
    },
    {
      id: 4,
      icon: <SiTailwindcss />,
    },
  ],
  backend: [
    {
      id: 1,
      icon: <DiNodejs />,
    },
    {
      id: 2,
      icon: <SiExpress />,
    },
    {
      id: 3,
      icon: <SiMongodb />,
    },
    {
      id: 4,
      icon: <SiPostgresql />,
    },
  ],
};

export default data;
