import React from 'react';
import LegalLayout from './LegalLayout';

const CookiePolicy = () => {
    return (
        <LegalLayout title="Cookie Policy" lastUpdated="April 16, 2024">
            <section>
                <h2><span className="section-dot"></span>1. What Are Cookies</h2>
                <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>2. How We Use Cookies</h2>
                <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>3. The Cookies We Set</h2>
                <ul>
                    <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
                    <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
                    <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
                </ul>
            </section>

            <section>
                <h2><span className="section-dot"></span>4. Disabling Cookies</h2>
                <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site.</p>
            </section>

            <div className="legal-contact-box">
                <h3>Transparency Matters</h3>
                <p>If you are still looking for more information or have concerns about how we use cookies, you can contact us through our email:</p>
                <p><strong>Email:</strong> support@wemadelogix.com</p>
            </div>
        </LegalLayout>
    );
};

export default CookiePolicy;
