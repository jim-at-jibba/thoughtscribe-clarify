import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-thoughtscribe-white">
      {/* Header */}
      <div className="bg-thoughtscribe-background py-8">
        <div className="container px-4 mx-auto">
          <Link
            to="/"
            className="text-thoughtscribe-primary hover:text-thoughtscribe-primary/90"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-thoughtscribe-black mt-4">
            Terms and Conditions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 mx-auto py-12">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <p className="text-thoughtscribe-grey-dark">
              Last updated: 19/02/2025
            </p>
            <p className="text-thoughtscribe-grey-dark">
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using the ThoughtScribe mobile
              application (the "Service") operated by ThoughtScribe ("us", "we",
              or "our").
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              1. Acceptance of Terms
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              2. Changes to Terms
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will try to provide at least 30
              days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              3. Access to the Service
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We grant you a limited, non-exclusive, non-transferable, and
              revocable license to access and use the Service for your personal,
              non-commercial use.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              4. Account Registration
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              You must register for an account to access certain features of the
              Service. You agree to provide accurate and complete information
              and to update such information to keep it accurate and current.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              5. User Responsibilities
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to accept responsibility for all
              activities that occur under your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              6. Acceptable Use
            </h2>
            <p className="text-thoughtscribe-grey-dark">You agree not to:</p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>
                Use the Service for any illegal purpose or in violation of any
                local, state, national, or international law
              </li>
              <li>
                Violate or encourage others to violate the rights of third
                parties, including intellectual property rights
              </li>
              <li>Upload or transmit viruses or other malicious code</li>
              <li>
                Attempt to access, search, or scrape the Service by any means
                other than our publicly supported interfaces
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Service
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              7. Intellectual Property
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of ThoughtScribe and
              its licensors. The Service is protected by copyright, trademark,
              and other laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              8. Disclaimers
            </h2>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis
                without any representation or warranty.
              </li>
              <li>
                ThoughtScribe is not a healthcare provider and the Service is
                not intended to be a substitute for professional medical advice,
                diagnosis, or treatment.
              </li>
              <li>
                We do not warrant that the Service will be uninterrupted,
                secure, or error-free.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              9. Limitation of Liability
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              In no event shall ThoughtScribe, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              10. Termination
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              11. Governing Law
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              These Terms shall be governed and construed in accordance with the
              laws of United Kingdom, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              12. Contact Us
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-thoughtscribe-grey-dark">ThoughtScribe Team</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
