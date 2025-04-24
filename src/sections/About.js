import React, { useEffect } from "react";
import "./css/About.css";
import AboutIcon from "./icons/AboutIcon";

const About = () => {
  const skills = [
    "React",
    "AWS",
    "Laravel",
    "Django",
    "RDBMS",
    "JavaScript",
    "Python",
    "Git/GitHub",
    "APIs",
    "Web Security",
  ];

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");

    if (marqueeContent) {
      root.style.setProperty(
        "--marquee-elements",
        marqueeContent.children.length
      );

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>أهـــلاً! أنا وجدان الحربي </h2>
            <p>
              أنا مطورة <span className="highlight">Full-Stack</span> شغوفة بحل
              المشكلات من خلال بناء تطبيقات ويب حديثة وسهلة الاستخدام. عملت على
              مشاريع متنوعة، وتقديم دورات لتعلم تطوير المواقع، حيث أدمج بين
              الإبداع والتقنية لتقديم حلول فعالة وموثوقة.
            </p>
            <p>
              إذا كنت بحاجة إلى مطور لبناء مشروعك من الصفر، أو تحسين نظامك
              الحالي، أو حتى الاستفادة من خبرتي في تعلم تقنية معينة أو تقديم
              استشارة، فأنا هنا لمساعدتك! <span className="emoji"></span>
            </p>
          </div>
          {/* <div className="about-image">
            <AboutIcon />
          </div> */}
        </div>
        <h2 className="skills-grid-headline">التقنيات والمهارات التي أتقنها</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="skill-tag"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
