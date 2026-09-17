import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const links = [
  { id: 1, link: "#header", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Skills" },
  { id: 4, link: "#experience", title: "Experience" },
  { id: 5, link: "#portfolio", title: "Projects" },
  { id: 6, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/pratapchouhan91",
    icon: <AiFillLinkedin />,
  },
  { id: 2, link: "https://github.com/pratsy91", icon: <AiFillGithub /> },
  {
    id: 3,
    link: "mailto:pratapsinghchouhan412@gmail.com",
    icon: <AiOutlineMail />,
  },
];
