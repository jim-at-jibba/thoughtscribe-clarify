import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Privacy Policy
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
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              1. Introduction
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              ThoughtScribe ("we", "our", or "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application ThoughtScribe (the "App").
            </p>
            <p className="text-thoughtscribe-grey-dark">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              2. Information We Collect
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>Record audio for transcription</li>
              <li>Use our AI transcription services</li>
              <li>Format and structure your text</li>
              <li>Contact us for support</li>
            </ul>
            <p className="text-thoughtscribe-grey-dark mt-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>Audio recordings (stored for processing)</li>
              <li>Transcribed text content</li>
              <li>Usage data (e.g., transcription length, feature usage)</li>
              <li>Device information and settings</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              3. How We Use Your Information
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>Convert your speech into text using AI transcription</li>
              <li>Format and structure your transcribed content</li>
              <li>Enhance readability while maintaining original meaning</li>
              <li>Improve our transcription accuracy and features</li>
              <li>
                Send you technical notices, updates, security alerts, and
                support messages
              </li>
              <li>
                Protect, investigate, and deter against fraudulent,
                unauthorized, or illegal activity
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              4. Data Storage and Security
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We use industry-standard encryption and security measures to
              protect your data. Audio recordings are temporarily processed and
              immediately deleted after transcription. Your API keys are fully
              encrypted, and we maintain strict security protocols for all data
              transmission and storage.
            </p>
            <p className="text-thoughtscribe-grey-dark mt-4">
              When using your own API key, you maintain full control over your
              usage and costs, with no subscription requirements from us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              5. Data Processing and AI Usage
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              Our service uses advanced AI capabilities to:
            </p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>Convert speech to text with high accuracy</li>
              <li>Format and structure transcribed content</li>
              <li>Enhance readability and clarity</li>
              <li>Maintain the original meaning of your content</li>
            </ul>
            <p className="text-thoughtscribe-grey-dark mt-4">
              All AI processing is performed securely, and we do not store or
              use your content for AI training purposes without explicit
              consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              6. Sharing of Your Information
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information in the following
              situations:
            </p>
            <ul className="list-disc pl-6 text-thoughtscribe-grey-dark space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>
                With service providers who help us operate the App (subject to
                confidentiality agreements)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-thoughtscribe-black">
              9. Contact Us
            </h2>
            <p className="text-thoughtscribe-grey-dark">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-thoughtscribe-grey-dark">Thoughtscribe Team</p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-thoughtscribe-background mt-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-thoughtscribe-grey-dark">
              © {new Date().getFullYear()} ThoughtScribe. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-thoughtscribe-grey-dark hover:text-thoughtscribe-primary"
              >
                Privacy Policy
              </Link>
              <a
                href="mailto:support@thoughtscribe.ai"
                className="text-thoughtscribe-grey-dark hover:text-thoughtscribe-primary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
