import React from 'react';
import './css/WhyChooseMe.css';
import { FaCheckCircle, FaLightbulb, FaRegHandshake, FaSearchPlus } from 'react-icons/fa';

const WhyChooseMe = () => {
  return (
    <section id="why-choose-me" className="why-choose-me">
      <div className="why-choose-me-content">
        <h2>لماذا تختارني؟ 🤔</h2>
        <div className="reasons-grid">
          <div className="reason-item">
            <span className="icon"><FaCheckCircle /></span>
            <div className="text-content">
              <h3>خبرة عملية واسعة في بناء المشاريع</h3>
              <p>أمتلك خبرة واسعة في بناء مشاريع الويب من الصفر، بدءًا من تصميم الواجهات الجذابة وصولًا إلى تطوير الأنظمة الخلفية القوية.</p>
            </div>
          </div>

          <div className="reason-item">
            <span className="icon"><FaLightbulb /></span>
            <div className="text-content">
              <h3>حلول مخصصة و تحسين الأنظمة</h3>
              <p>يمكنني مساعدتك في تحسين نظامك الحالي، سواء كان ذلك بإضافة ميزات جديدة أو تحسين الأداء أو معالجة المشكلات التقنية، وتقديم حلول مخصصة تلبي احتياجاتك.</p>
            </div>
          </div>

          <div className="reason-item">
            <span className="icon"><FaSearchPlus /></span>
            <div className="text-content">
              <h3>دقة واهتمام بالتفاصيل في نقل المعرفة</h3>
              <p>أشارك شغفي بالتقنية من خلال تقديم دورات تدريبية في تطوير الويب، مع دقة واهتمام بالتفاصيل لمساعدة الآخرين على اكتساب المهارات اللازمة.</p>
            </div>
          </div>

          <div className="reason-item">
            <span className="icon"><FaRegHandshake /></span>
            <div className="text-content">
              <h3>سهولة التواصل والتعاون في الاستشارات التقنية</h3>
              <p>إذا كنت بحاجة إلى استشارة فنية لتقييم مشروعك أو الحصول على توجيه في اختيار التقنيات المناسبة، فأنا هنا لمساعدتك، مع سهولة التواصل والتعاون.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;