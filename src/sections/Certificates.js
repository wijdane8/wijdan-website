import React from 'react';
import './css/Certificates.css';

const Certificates = () => {
  return (
    <div className="certificates-section">
      <div className="slide-content">
        <h2>📜 أهم الدورات والشهادات</h2>
        <ul>
          <li>
            🌟 معسكر تطوير المواقع باستخدام Python & Django –{' '}
            <span className="highlight">أكاديمية طويق</span>
          </li>
          <li>
            🌟 معسكر تطوير المواقع باستخدام PHP & Laravel –{' '}
            <span className="highlight">أكاديمية طويق</span>
          </li>
          <li>
            🌟 تطوير المواقع باستخدام React js  –{' '}
            <span className="highlight">يودمي Udemy</span>
          </li>
          <li>
            🌟 إكمال مسار DevOps التأسيسي (دورات متعددة) –{' '}
            <span className="highlight">الأكاديمية السعودية الرقمية</span>
          </li>
          <li>
            🌟 معسكر الأمن السيبراني وثغرات الويب (المستوى الأول) –{' '}
            <span className="highlight">TechCampus</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certificates;