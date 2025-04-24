import React from "react";
import "./css/Portfolio.css";
import Accordion from './Accordion/Accordion' // Import the Accordion component

// Import project images (Make sure these images are in your project's `public/images/portfolio/` or similar directory)
import project1Image from './images/pexels-padrinan-19670.jpg';
import project2Image from './images/pexels-padrinan-19670.jpg';
import project3Image from './images/pexels-padrinan-19670.jpg';
import project4Image from './images/pexels-padrinan-19670.jpg';

  const Portfolio = () => {
    const projects = {
        project1: {
            summary: "منصة تعافي",
            answer: "منصة لمجموعات الدعم النفسي تم تطويرها بـ Django, Bootstrap, و SQLite.",
            image: project1Image,
            link: "https://taafi-platform-demo.example.com",
        },
        project2: {
            summary: "متتبع النفقات",
            answer: "API تم تطويره بواسطة Laravel وربطه بواجهة React ومصادقة JWT.",
            image: project2Image,
            link: "https://expense-tracker-api-demo.example.com",
        },
        project3: {
            summary: "PIXELNEC",
            answer: "منصة لعرض الصور والتفاعل معها طُوُرت بـ JavaScript وتم ربطها مع API خارجية.",
            image: project3Image,
            link: "https://pixelnec-demo.example.com",
        },
        project4: {
            summary: "متجر إلكتروني",
            answer: "متجر لعرض وبيع المنتجات مع واجهة للإدارة والتحكم تم تطويره بـ Laravel, TailwindCSS, و MySQL.",
            image: project4Image,
            link: "https://ecommerce-store-demo.example.com",
        },
    };

    return (
        <section id="portfolio" className="portfolio">
            <div className="slide-content">
                <h2> آخر الأعمال ✨</h2>
                <Accordion projects={projects} /> {/* Pass the projects data to the Accordion component */}
            </div>
        </section>
    );
};

export default Portfolio;