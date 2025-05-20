import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./ExperienceSection.css";

const experiences = [
  {
    company: "PlutosOne",
    role: "Software Engineer",
    duration: "Jan 2025 – Present",
    location: "New Delhi",
    responsibilities: [
      "Built analytics dashboard with real-time filtering using Next.js, Tailwind, Redux.",
      "Integrated BBPS for SBI Life & Muthoot using NestJS, Docker, Kubernetes, Bull Queue.",
      "Implemented AES-256 encryption and XML to JSON transformation for secure APIs.",
    ],
  },
  {
    company: "Bitontree",
    role: "Software Engineer",
    duration: "Dec 2023 – Dec 2024",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Architected RESTful APIs and microservices for 500+ daily users.",
      "Automated CI/CD, boosting deployment speed by 40%.",
      "Improved performance in projects like PLSE (React/Chart.js) and Telware (JWT, Redux).",
    ],
  },
  {
    company: "Midinnings",
    role: "Software Engineer",
    duration: "Nov 2022 – Nov 2023",
    location: "Udaipur, Rajasthan",
    responsibilities: [
      "Delivered 5+ MERN websites (e-commerce, SaaS, blogs, portfolios).",
      "Converted Figma to responsive UIs and integrated secure JWT-based APIs.",
    ],
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section className="experience__section" data-aos="fade-in">
      <h2 className="experience__title" data-aos="fade-up">
        Work Experience
      </h2>
      <div className="experience__container">
        {experiences.map((exp, index) => (
          <div key={index} className="card experience__card">
            <h3 className="experience__company">{exp.company}</h3>
            <span className="experience__duration">{exp.duration}</span>
            <p className="experience__role">
              <strong>{exp.role}</strong> — {exp.location}
            </p>
            <ul className="experience__points">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
