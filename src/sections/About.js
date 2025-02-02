import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/About.css';

const About = () => {
  // Define the state to track hover status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about content-center items-center">
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
          pauseOnMouseEnter: true, // Pause autoplay when mouse enters
        }}
        onMouseEnter={() => setIsHovered(true)}  // Set hover state to true when mouse enters
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
      >
        {/* Slide 1 - Summary */}
        <SwiperSlide>
          <div className="slide-content text-center p-6 self-center rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">أهـــلاً! أنا وجدان الحربي 👋</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              أنا مطورة <span className="font-semibold" style={{ color: "#C1A6F3" }}>Full-Stack</span>
              شغوفة بحل المشكلات من خلال بناء تطبيقات ويب حديثة وسهلة الاستخدام.
              عملت على مشاريع متنوعة، وتقديم دورات لتعلم تطوير المواقع، حيث أدمج بين الإبداع والتقنية لتقديم حلول فعالة وموثوقة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              سواء كنت بحاجة إلى مطور لبناء مشروعك من الصفر، أو تحسين نظامك الحالي، أو حتى الاستفادة من خبرتي في تعلم تقنية معينة
              أو تقديم استشارة، فأنا هنا لمساعدتك! <span className="text-gray-500 font-semibold">🚀</span>
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 - How Can I Help? */}
        <SwiperSlide>
          <div className="slide-content text-center px-6 rounded-2xl content-center self-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">كيف يمكنني مساعدتك؟</h2>
            <ul className="text-lg text-gray-600 space-y-4">
              <li className="flex items-center justify-center gap-2">👨‍💻 <span className="font-semibold" style={{ color: "#FFCE8E" }}>تطوير الويب</span> باستخدام React، Tailwind، JavaScript، Laravel، Django والمزيد.</li>
              <li className="flex items-center justify-center gap-2">🔐 <span className="font-semibold" style={{ color: "#FFCE8E" }}>تأمين التطبيقات</span> باستخدام OAuth، JWT، وتقنيات التشفير الحديثة.</li>
              <li className="flex items-center justify-center gap-2">🤝 <span className="font-semibold" style={{ color: "#FFCE8E" }}>الإرشاد والتدريب</span> لمساعدة المطورين الجدد ومراجعة المشاريع.</li>
              <li className="flex items-center justify-center gap-2">🙂 <span className="font-semibold" style={{ color: "#FFCE8E" }}>تقديم الاستشارات والتوجيه</span> للطلاب والمبتدئين في مجال البرمجة.</li>
            </ul>
            <div className="skills-list">
              {["React", "AWS", "Laravel", "Django", "RDBMS", "JavaScript", "Python", "Git/GitHub", "APIs", "Web Security"].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Certifications */}
        <SwiperSlide>
          <div className="slide-content text-center p-6 rounded-2xl self-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">📜 أهم الدورات والشهادات</h2>
            <ul className="text-lg text-gray-600 space-y-4">
              <li>
                <p><span className="material-icons">star</span> معسكر تطوير المواقع باستخدام Python & Django 
                <span className="font-semibold" style={{ color: "#FFCE8E" }}>
                  – أكاديمية طويق
                  </span></p>
              </li>
              <li>
                <p><span className="material-icons">star</span> معسكر تطوير المواقع باستخدام PHP & Laravel 
                <span className="font-semibold" style={{ color: "#FFCE8E" }}>
                  – أكاديمية طويق
                </span></p>
              </li>
              <li>
                <p><span className="material-icons">star</span> تطوير المواقع باستخدام React "Nano Degree".
                <span className="font-semibold" style={{ color: "#FFCE8E" }}>
                  – يودمي Udemy
                </span></p>
              </li>
              <li>
               <p><span className="material-icons">star</span> إكمال مسار DevOps التأسيسي ( دورات متعددة ) 
                <span className="font-semibold" style={{ color: "#FFCE8E" }}>
                  – الأكاديمية السعودية الرقمية
                </span></p>
              </li>
              <li>
                <p><span className="material-icons">star</span> معسكر الأمن السيبراني وثغرات الويب (المستوى الأول) 
                <span className="font-semibold" style={{ color: "#FFCE8E" }}>
                  – TechCampus
                  </span></p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
{/* Slide 4 - Projects */}
<SwiperSlide>
  <div className="slide-content justify-center p-6 rounded-2xl self-center">
    <h2 className="text-2xl font-bold text-gray-700 mb-8">📂 أهم المشاريع</h2>
    <ul className="text-lg text-gray-600 space-y-4 text-right text-center ms-8 ps-8">
    <li>
        <p><span className="material-icons text-yellow-200 me-8">lightbulb</span><span className="font-semibold" style={{ color: "#FFCE8E" }}>
          منصة تعافي - 
          </span>
           منصة لمجموعات الدعم النفسي تم تطويرها بـ Django ,Bootstrap and sqlite3.
        </p>
      </li>
      <li>
        <p><span className="material-icons text-yellow-200 me-8">lightbulb</span><span className="font-semibold" style={{ color: "#FFCE8E" }}>
          متتبع النفقات - 
          </span>
           API تم تطويره بواسطة Laravel وربطه بواجهة React ومصادقة JWT.
        </p>
      </li>
      <li>
        <p><span className="material-icons text-yellow-200 me-8">lightbulb</span><span className="font-semibold" style={{ color: "#FFCE8E" }}>
        PIXELNEC -  
          </span>
           منصة لعرض الصور والتفاعل معها طُوُرت بـjavascript وتم ربطها مع API خارجية.
        </p>
      </li>
      <li>
        <p><span className="material-icons text-yellow-200 me-8">lightbulb</span><span className="font-semibold" style={{ color: "#FFCE8E" }}>
          متجر إلكتروني - 
          </span>
           متجر لعرض وبيع المنتجات مع واجهة للإدارة والتحكم تم تطويره بـ Laravel, TailwindCSS and MySQL.
        </p>
      </li>
    </ul>
  </div>
</SwiperSlide>


        {/* Slide 5 - Why Choose Me? */}
        <SwiperSlide>
          <div className="slide-content text-center p-6 rounded-2xl self-center">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">لماذا تختارني؟ 🤔</h2>
            <ul className="text-lg space-y-3 text-gray-600">
              <li><span className="material-icons">check_circle</span> خبرة عملية واسعة في تطوير الأنظمة البرمجية من الفكرة إلى الإطلاق.</li>
              <li><span className="material-icons">check_circle</span> حلول مخصصة تلبي احتياجاتك وتساعد على نجاح مشروعك.</li>
              <li><span className="material-icons">check_circle</span> دقة واهتمام بالتفاصيل لضمان تجربة استخدام سلسة وفعالة.</li>
              <li><span className="material-icons">check_circle</span> سهولة التواصل والتعاون لتحقيق رؤيتك بأفضل طريقة ممكنة.</li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;
// to do: icons,text aligning, classes names