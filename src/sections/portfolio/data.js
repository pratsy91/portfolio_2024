import Image1 from "../../assets/project1.png";
import Image2 from "../../assets/project2.png";
import Image3 from "../../assets/project3.png";

const data = [
  {
    id: 1,
    category: "fullstack",
    image: Image1,
    title: "E-Store",
    desc: "Full-stack commerce app for browsing products, managing carts, and checking out securely.",
    highlights: ["Cart & checkout flow", "Secure payments"],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    demo: "https://e-store-d17u.onrender.com",
    github: "https://github.com/pratsy91/e-store",
  },
  {
    id: 2,
    category: "fullstack",
    image: Image2,
    title: "Realtime Chat",
    desc: "Messaging app for text, emojis, and images with live updates and auth.",
    highlights: ["Socket-based messaging", "Auth & presence"],
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    demo: "https://chatapp-4zeh.onrender.com/",
    github: "https://github.com/pratsy91/chatApp",
  },
  {
    id: 3,
    category: "fullstack",
    image: Image3,
    title: "Salon CRM",
    desc: "Salon management dashboard for bookings, clients, and staff workflows.",
    highlights: ["Appointment booking", "Staff scheduling"],
    tech: ["React", "Node.js", "REST APIs"],
    demo: "https://salon-web-phi-pink.vercel.app/",
    github: "https://github.com/pratsy91/salon_backend",
  },
];

export default data;
