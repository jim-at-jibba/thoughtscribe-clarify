import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Email parts split to avoid easy scraping
  const emailUser = "support";
  const emailDomain = "jamesbest.uk";

  const handleRevealEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    setEmailRevealed(true);

    // Create the actual mailto link after user interaction
    const emailAddress = `${emailUser}@${emailDomain}`;
    const subject = "ThoughtScribe Support Request";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}`;

    // Open the email client after a short delay
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container max-w-2xl py-12 flex-grow">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-thoughtscribe-background flex items-center justify-center">
              <Smartphone className="h-12 w-12 text-thoughtscribe-primary" />
            </div>
          </div>

          <h1 className="text-3xl font-bold">Contact Us</h1>

          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-muted-foreground">
              We've moved our contact system to our mobile application to
              provide you with a better and more responsive experience.
            </p>

            <p className="text-muted-foreground">
              Please download our mobile app to send us messages, report bugs,
              request features, or provide feedback. Our support team is ready
              to assist you through the app.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8">
              <h2 className="text-xl font-semibold mb-3">
                Get the ThoughtScribe App
              </h2>
              <p className="mb-4">
                Access all features including direct messaging with our support
                team.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
                id="download-buttons"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-thoughtscribe-primary bg-white text-black hover:bg-thoughtscribe-grey-bg"
                  onClick={() => {
                    window.open(
                      "https://apps.apple.com/us/app/thoughtscribe/id6742878479",
                      "_blank",
                    );
                  }}
                >
                  <img src="/apple.png" alt="Apple Icon" className="mr-2 h-5" />
                  Download on the App Store
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-thoughtscribe-primary bg-white text-black hover:bg-thoughtscribe-grey-bg"
                  onClick={() => {
                    alert("Coming soon!");
                  }}
                >
                  <img
                    src="/google.png"
                    alt="Google Icon"
                    className="mr-2 h-5 w-5 bg-white rounded-full"
                  />
                  Get it on Google Play
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              If you're unable to use our mobile app, you can still reach us via
              email at{" "}
              <a
                href="#contact-email"
                onClick={handleRevealEmail}
                className="text-blue-600 hover:underline"
                aria-label="Reveal support email address"
              >
                {emailRevealed
                  ? `${emailUser}@${emailDomain}`
                  : "click to reveal email"}
              </a>
            </p>

            <div className="border-t border-slate-200 mt-8 pt-6">
              <p className="text-sm text-muted-foreground">
                Looking to delete your account?{" "}
                <Link
                  to="/delete-account"
                  className="text-red-600 hover:underline"
                >
                  Go to account deletion page
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="ghost" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
