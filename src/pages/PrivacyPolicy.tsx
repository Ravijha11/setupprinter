import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>
            At PrinterDoctor, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website printerdoctor.info 
            and any of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect and process the following types of personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details 
              provided by you through forms on our website.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type, operating system, and other details captured via 
              cookies to enhance user experience.
            </li>
            <li>
              <strong>Usage Data:</strong> Information regarding your interaction with our website, such as page views, time spent 
              on the site, and troubleshooting requests.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and improve our services, including troubleshooting and technical support.</li>
            <li>To communicate with you via email or phone, regarding issues, updates, or services.</li>
            <li>To improve our website's functionality and user experience through analytics.</li>
            <li>To provide you with promotional offers or services, subject to your consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files 
            stored on your device that help us understand how users interact with the website. You can disable cookies through 
            your browser settings; however, this may affect your ability to use certain features of the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing of Personal Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> Trusted third-party service providers who assist us in operating our website and 
              providing our services.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required by law or to protect our rights, we may disclose personal data to 
              comply with legal obligations or in response to valid legal processes.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, 
            disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic 
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p>As a user, you have the following rights concerning your personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access and Correction:</strong> You have the right to request access to or correction of your personal data.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the deletion of your personal data, subject to applicable legal obligations.
            </li>
            <li>
              <strong>Opt-out:</strong> You can opt-out of receiving promotional emails from us at any time by clicking the 
              "unsubscribe" link in our communications.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of 
            these external sites. We encourage users to review the privacy policies of these third-party websites before providing 
            any personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy as necessary to reflect changes in our practices or legal obligations. 
            Any changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
          </p>
          <p className="mt-2">
            <strong>PrinterDoctor</strong><br />
            Email: support@printerdoctor.us<br />
            Phone: [Your Contact Number]
          </p>
        </div>
      </div>
    </Layout>
  );
}
