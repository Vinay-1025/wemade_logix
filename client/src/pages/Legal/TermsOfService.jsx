import React from 'react';
import LegalLayout from './LegalLayout';

const TermsOfService = () => {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="April 16, 2024">
            <section>
                <h2><span className="section-dot"></span>1. Terms</h2>
                <p>By accessing the website at https://wemadelogix.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials (information or software) on We Made Logix's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul>
                    <li>Modify or copy the materials.</li>
                    <li>Use the materials for any commercial purpose, or for any public display.</li>
                    <li>Attempt to decompile or reverse engineer any software contained on We Made Logix's website.</li>
                    <li>Remove any copyright or other proprietary notations from the materials.</li>
                </ul>
            </section>

            <section>
                <h2><span className="section-dot"></span>3. Disclaimer</h2>
                <p>The materials on We Made Logix's website are provided on an 'as is' basis. We Made Logix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>4. Limitations</h2>
                <p>In no event shall We Made Logix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on We Made Logix's website, even if We Made Logix or a We Made Logix authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </section>

            <section>
                <h2><span className="section-dot"></span>5. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of Telangana, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </section>

            <div className="legal-contact-box">
                <h3>Legal Department</h3>
                <p>If you have any questions regarding these terms, please reach out to our legal team:</p>
                <p><strong>Email:</strong> legal@wemadelogix.com</p>
            </div>
        </LegalLayout>
    );
};

export default TermsOfService;
