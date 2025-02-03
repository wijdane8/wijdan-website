import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/About.css';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slide 1 - Summary */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>أهـــلاً! أنا وجدان الحربي 👋</h2>
            <p>
              أنا مطورة <span className="highlight">Full-Stack</span> شغوفة بحل المشكلات من خلال بناء تطبيقات ويب حديثة وسهلة الاستخدام. عملت على مشاريع متنوعة، وتقديم دورات لتعلم تطوير المواقع، حيث أدمج بين الإبداع والتقنية لتقديم حلول فعالة وموثوقة.
            </p>
            <p>
              سواء كنت بحاجة إلى مطور لبناء مشروعك من الصفر، أو تحسين نظامك الحالي، أو حتى الاستفادة من خبرتي في تعلم تقنية معينة أو تقديم استشارة، فأنا هنا لمساعدتك! <span className="emoji">🚀</span>
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 - How Can I Help? */}
        <SwiperSlide>
  <div className="slide-content h-4/5 flex flex-col justify-center">
    <h2>التقنيات والمهارات التي أتقنها</h2>
    <div className="skills-list">
      {[
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
      ].map((skill, index) => (
        <span key={index}>{skill}</span>
      ))}
    </div>
  </div>
</SwiperSlide>


        {/* Slide 3 - Certifications */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>📜 أهم الدورات والشهادات</h2>
            <ul>
              <li>🌟 معسكر تطوير المواقع باستخدام Python & Django – <span className="highlight">أكاديمية طويق</span></li>
              <li>🌟 معسكر تطوير المواقع باستخدام PHP & Laravel – <span className="highlight">أكاديمية طويق</span></li>
              <li>🌟 تطوير المواقع باستخدام React "Nano Degree" – <span className="highlight">يودمي Udemy</span></li>
              <li>🌟 إكمال مسار DevOps التأسيسي (دورات متعددة) – <span className="highlight">الأكاديمية السعودية الرقمية</span></li>
              <li>🌟 معسكر الأمن السيبراني وثغرات الويب (المستوى الأول) – <span className="highlight">TechCampus</span></li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Slide 4 - Projects */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>📂 أهم المشاريع</h2>
            <ul>
              <li>💡 <span className="highlight">منصة تعافي</span> – منصة لمجموعات الدعم النفسي تم تطويرها بـ Django, Bootstrap, و SQLite.</li>
              <li>💡 <span className="highlight">متتبع النفقات</span> – API تم تطويره بواسطة Laravel وربطه بواجهة React ومصادقة JWT.</li>
              <li>💡 <span className="highlight">PIXELNEC</span> – منصة لعرض الصور والتفاعل معها طُوُرت بـ JavaScript وتم ربطها مع API خارجية.</li>
              <li>💡 <span className="highlight">متجر إلكتروني</span> – متجر لعرض وبيع المنتجات مع واجهة للإدارة والتحكم تم تطويره بـ Laravel, TailwindCSS, و MySQL.</li>
            </ul>
          </div>
        </SwiperSlide>

        {/* Slide 5 - Why Choose Me? */}
        <SwiperSlide>
          <div className="slide-content">
            <h2>لماذا تختارني؟ 🤔</h2>
            <ul>
              <li>✅ خبرة عملية واسعة في تطوير الأنظمة البرمجية من الفكرة إلى الإطلاق.</li>
              <li>✅ حلول مخصصة تلبي احتياجاتك وتساعد على نجاح مشروعك.</li>
              <li>✅ دقة واهتمام بالتفاصيل لضمان تجربة استخدام سلسة وفعالة.</li>
              <li>✅ سهولة التواصل والتعاون لتحقيق رؤيتك بأفضل طريقة ممكنة.</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;