
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, FileText, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-lg bg-thoughtscribe-100 px-3 py-1 text-sm font-medium text-thoughtscribe-800 mb-8">
                <span className="animate-pulse bg-thoughtscribe-500 rounded-full w-2 h-2 mr-2"></span>
                Now with enhanced AI capabilities
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-thoughtscribe-900">
              Transform Speech into
              <br />
              Polished Text
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-thoughtscribe-600">
              Record your thoughts naturally, and let our AI transform them into
              clear, well-structured text. Perfect for notes, articles, or any
              written content.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-thoughtscribe-900 text-white hover:bg-thoughtscribe-800"
              >
                Start Recording
                <Mic className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-thoughtscribe-200"
              >
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-thoughtscribe-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl font-bold text-thoughtscribe-900 mb-4">
              Everything You Need for Perfect Transcription
            </h2>
            <p className="text-thoughtscribe-600 max-w-2xl mx-auto">
              Thoughtscribe combines powerful features to deliver accurate,
              polished text from your speech.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 border-thoughtscribe-100 bg-white/50 backdrop-blur-sm animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <feature.icon className="h-12 w-12 text-thoughtscribe-500 mb-4" />
                <h3 className="text-xl font-semibold text-thoughtscribe-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-thoughtscribe-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-thoughtscribe-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
            <h2 className="text-3xl font-bold">
              Ready to Transform Your Speech into Perfect Text?
            </h2>
            <p className="text-thoughtscribe-100">
              Join thousands of users who are already saving time and creating
              better content with Thoughtscribe.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-white text-thoughtscribe-900 hover:bg-thoughtscribe-100"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Instant Recording",
    description: "Start recording with a single click. No complex setup needed.",
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
    description: "Enhances readability while maintaining your original meaning.",
    icon: CheckCircle2,
  },
];

export default Index;
