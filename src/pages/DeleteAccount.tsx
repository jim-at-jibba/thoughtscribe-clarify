import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trash2 } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function DeleteAccount() {
  const [emailRevealed, setEmailRevealed] = useState(false);

  // Email parts split to avoid easy scraping
  const emailUser = "support";
  const emailDomain = "jamesbest.uk";

  const handleRevealEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    setEmailRevealed(true);

    // Create the actual mailto link after user interaction
    const emailAddress = `${emailUser}@${emailDomain}`;
    const subject = "ThoughtScribe Account Deletion Request";
    const body =
      "Please include your account email address and username in this email to help us process your deletion request.";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

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
            <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 className="h-12 w-12 text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl font-bold">Delete Your Account</h1>

          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-muted-foreground">
              We're sorry to see you go. Account deletion is permanent and
              cannot be undone.
            </p>

            <p className="text-muted-foreground">
              All your data, including saved transcriptions, preferences, and
              personal information will be permanently removed from our systems.
            </p>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-8">
              <h2 className="text-xl font-semibold mb-3 text-black">
                Important Information
              </h2>
              <ul className="list-disc pl-5 text-left space-y-2 text-black">
                <li>Account deletion is permanent and cannot be reversed</li>
                <li>All your data will be permanently deleted</li>
                <li>Processing may take up to 30 days to complete</li>
              </ul>

              <div className="mt-6">
                <p className="mb-4 text-left text-black">
                  To delete your account, please use our mobile app or contact
                  our deletion team directly:
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
                    <img
                      src="/apple.png"
                      alt="Apple Icon"
                      className="mr-2 h-5"
                    />
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
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              If you're unable to use our mobile app, you can request account
              deletion via email at{" "}
              <a
                href="#delete-account-email"
                onClick={handleRevealEmail}
                className="text-red-600 hover:underline"
                aria-label="Reveal account deletion email address"
              >
                {emailRevealed
                  ? `${emailUser}@${emailDomain}`
                  : "click to reveal email"}
              </a>
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4">
              <p className="text-sm text-slate-600">
                <strong>Note:</strong> For security reasons, account deletion
                requests must come from the email address associated with your
                account.
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
