import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mic,
  FileText,
  Zap,
  CheckCircle2,
  ArrowRight,
  Apple,
  SmartphoneNfc,
  Key,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-thoughtscribe-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-lg bg-thoughtscribe-background px-3 py-1 text-sm font-medium text-thoughtscribe-black mb-8">
                <span className="animate-pulse bg-thoughtscribe-primary rounded-full w-2 h-2 mr-2"></span>
                Now with enhanced AI capabilities
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-thoughtscribe-black">
              Transform Speech into
              <br />
              Polished Text
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-thoughtscribe-grey-dark">
              Record your thoughts naturally, and let our AI transform them into
              clear, well-structured text. Perfect for notes, articles, or any
              written content.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-thoughtscribe-primary text-white hover:bg-thoughtscribe-primary/90"
                >
                  Start Recording
                  <Mic className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-thoughtscribe-grey-soft hover:bg-thoughtscribe-grey-bg"
                >
                  Watch Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-4 mt-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-thoughtscribe-primary bg-white text-black hover:bg-thoughtscribe-grey-bg"
                >
                  <img src="/apple.png" alt="Apple Icon" className="mr-2 h-5" />
                  Download on the App Store
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-thoughtscribe-primary bg-white text-black hover:bg-thoughtscribe-grey-bg"
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-thoughtscribe-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold text-thoughtscribe-black mb-4">
              Everything You Need for Perfect Transcription
            </h2>
            <p className="text-thoughtscribe-grey-dark max-w-2xl mx-auto">
              Thoughtscribe combines powerful features to deliver accurate,
              polished text from your speech.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 border-thoughtscribe-grey-soft bg-white/50 backdrop-blur-sm animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <feature.icon className="h-12 w-12 text-thoughtscribe-primary mb-4" />
                <h3 className="text-xl font-semibold text-thoughtscribe-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-thoughtscribe-grey-dark">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-thoughtscribe-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Speech into Perfect Text?
            </h2>
            <p className="text-thoughtscribe-accent">
              Join thousands of users who are already saving time and creating
              better content with Thoughtscribe.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-white text-thoughtscribe-primary hover:bg-thoughtscribe-grey-bg"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-thoughtscribe-background">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-thoughtscribe-grey-dark">
              © {new Date().getFullYear()} Thoughtscribe. All rights reserved.
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

const features = [
  {
    title: "Instant Recording",
    description:
      "Start recording with a single click. No complex setup needed.",
    icon: Mic,
  },
  {
    title: "AI Transcription",
    description: "Advanced AI converts your speech to text with high accuracy.",
    icon: FileText,
  },
  {
    title: "Smart Formatting",
    description: "Automatically formats and structures your text for clarity.",
    icon: Zap,
  },
  {
    title: "Perfect Polish",
    description:
      "Enhances readability while maintaining your original meaning.",
    icon: CheckCircle2,
  },
  {
    title: "Bring Your Own Key",
    description:
      "Use your own API key with full encryption. Pay only for what you use, no subscriptions needed.",
    icon: Key,
  },
];

export default Index;
