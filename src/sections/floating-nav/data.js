import { AiFillHome, AiFillAppstore, AiFillMessage } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";

const data = [
  { id: 1, link: "#header", icon: <AiFillHome /> },
  { id: 2, link: "#about", icon: <BsPersonFill /> },
  { id: 3, link: "#services", icon: <HiCode /> },
  { id: 4, link: "#experience", icon: <MdWork /> },
  { id: 5, link: "#portfolio", icon: <AiFillAppstore /> },
  { id: 6, link: "#contact", icon: <AiFillMessage /> },
];

export default data;
