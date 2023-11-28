import React from 'react';
import './Style/ContactUs.css'
const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <div className="support-info">
                    <p>24-Hour Support <br />
                        24/7/365<br />
                        Live consultant on-call <br />
                        Every day <br />
                        All night<br />
                        All weekend <br />
                        Always</p>
                </div>
                <p><strong>Phone:</strong> 515-727-5420 </p>
                <p><strong>Email:</strong> support@1itsource.com</p>
                <p><strong>Address:</strong> <br />8350 Hickman Rd. Suite 14, <br />Clive, IA 50325</p>
            </div>

            <div className="contact-form">
                <h3>We're just an email away</h3>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default ContactUs;
