import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./ExperienceSection.css";

const experiences = [
  {
    company: "Newmi Care",
    role: "Software Development Engineer 1",
    duration: "Feb 2026 – Present",
    location: "Gurgaon, Haryana",
    responsibilities: [
      "Built pregnancy and baby trackers end-to-end using React Native, Next.js, Django, PostgreSQL, and TypeScript, improving tracker engagement by 45%.",
      "Owned the full GLP care flow from Next.js/React Native frontend through Django REST APIs, cutting end-to-end latency by 30% and reducing drop-offs by 25%.",
      "Implemented health assessments (cancer risk, PCOS, ErgoCheck, period relief, and more) from UI through backend scoring APIs, increasing completed assessments by 40%.",
      "Integrated Edge Clinic API for doctor appointment booking across web and mobile, improving booking completion by 35%.",
    ],
  },
  {
    company: "Ratnanjali TechX",
    role: "Software Engineer",
    duration: "Jul 2025 – Dec 2025",
    location: "Pune, Maharashtra",
    responsibilities: [
      "Developed and optimized full-stack features for ShodhSetu and Muskurahat Foundation using Next.js, Express.js, and PostgreSQL.",
      "Designed admin dashboards and responsive UIs, improving data visualization and accessibility for 1000+ colleges and universities.",
      "Scaled backend workflows for large datasets and bulk operations, reducing API latency by 35%.",
      "Collaborated with design and product teams to streamline internship and reporting modules for 100+ schools.",
    ],
  },
  {
    company: "PlutosOne",
    role: "Software Engineer",
    duration: "Feb 2025 – Apr 2025",
    location: "New Delhi",
    responsibilities: [
      "Built a responsive analytics dashboard with Next.js, Tailwind CSS, and Redux, improving performance and interactivity.",
      "Integrated BBPS APIs for SBI Life and Muthoot Finance using NestJS, Docker, Kubernetes, and deployed on GCP.",
      "Implemented secure AES-256 encryption and XML–JSON conversions for compliant third-party integrations.",
    ],
  },
  {
    company: "Bitontree",
    role: "Software Engineer",
    duration: "Dec 2023 – Dec 2024",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Developed scalable full-stack apps serving 500+ daily users, reducing API response times by 2s.",
      "Automated CI/CD pipelines, increasing deployment speed by 40%.",
      "PLSE: Enhanced React.js/Chart.js visualizations (25% faster render) and optimized backend performance (+30% load efficiency) on AWS.",
      "Telware: Strengthened authentication via JWT, cutting login delay by 25%.",
    ],
  },
  {
    company: "Midinnings",
    role: "Software Engineer",
    duration: "Nov 2022 – Nov 2023",
    location: "Udaipur, Rajasthan",
    responsibilities: [
      "Delivered 5+ full-stack client projects (e-commerce, SaaS, blogs) using React.js, Express.js, and MongoDB.",
      "Built JWT-secured REST APIs for authentication and data management; converted Figma designs into responsive UIs.",
    ],
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section id="experience" className="experience__section" data-aos="fade-in">
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
