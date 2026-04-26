import React from 'react';
import LegalLayout from './LegalLayout';

const PrivacyPolicy = () => {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="April 16, 2024">
            <section>
                <h2><span className="section-dot"></span>1. Introduction</h2>
                <p>Welcome to We Made Logix. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>2. Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                    <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>
            </section>

            <section>
                <h2><span className="section-dot"></span>3. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party).</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
            </section>

            <section>
                <h2><span className="section-dot"></span>4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>

            <div className="legal-contact-box">
                <h3>Contact Our Privacy Team</h3>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <p><strong>Email:</strong> privacy@wemadelogix.com</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
            </div>
        </LegalLayout>
    );
};

export default PrivacyPolicy;
