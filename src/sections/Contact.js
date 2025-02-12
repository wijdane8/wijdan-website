import React from 'react';
import './css/Contact.css';
import ContactForm from './ContactForm'; // Import the ContactForm component

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="slide-content">
                <h2>تواصل معي ✨</h2>

                <ContactForm /> {/* Include the ContactForm component here */}

                <p>
                    يسعدني تواصلك معي لطرح أفكارك ومشاريعك، أو لأي استفسارات لديك.
                    <br />
                    يمكنك التواصل عبر الطرق التالية:
                </p>

                <div className="contact-info">
                    {/* Add your contact information here - email, phone, social links, etc. */}
                    <p><strong>البريد الإلكتروني:</strong> <a href="mailto:wijdane.ali@gmail.com">wijdane.ali@gmail.com</a></p>
                    {/* Example for a phone number link (replace with your actual phone number) */}
                    <p><strong>رقم الهاتف:</strong> <a href="tel:+966566292233">+966566292233</a></p>
                    {/* You can add social media links or a contact form here as well */}
                </div>
            </div>
        </section>
    );
};

export default Contact;