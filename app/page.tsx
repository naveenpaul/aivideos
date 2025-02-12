import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">AI Video Creator</h1>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <PricingSection />
        <CTASection />
      </main>

      <footer className="bg-muted py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 AI Video Creator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Create Stunning Religious <br></br>&<br></br> Motivational Videos in
          Minutes!
        </h2>
        <p className="text-xl mb-8">
          Turn Text into Engaging AI Videos Instantly
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            ✨ AI-Generated Videos – No Editing Skills Required!
          </p>
          <p className="text-lg">
            ✨ Emotionally Tuned AI Voiceovers – Perfect for Sermons &
            Motivation
          </p>
          <p className="text-lg">
            ✨ Auto-Optimized for Instagram, YouTube Shorts & TikTok
          </p>
        </div>
        <Button size="lg" className="mt-8" asChild>
          <a
            href="https://form.typeform.com/to/DyyF0T9w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join waitlist for FREE!
          </a>
        </Button>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    "Designed for Religious & Motivational Creators",
    "One-Click Video Creation",
    "Multi-Language Support",
    "Affordable Pricing",
    "Auto-Captions, Hashtags & Posting Suggestions",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✅</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Enter Your Message",
      description: "Type your sermon, motivational quote, or scripture.",
    },
    {
      number: "2",
      title: "Choose a Voice & Style",
      description: "Select a natural AI voice and background theme.",
    },
    {
      number: "3",
      title: "Generate & Download",
      description: "Get a professionally edited AI video ready to post!",
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  const audiences = [
    "Pastors & Religious Speakers – Share sermons & prayers easily.",
    "Motivational Coaches & Speakers – Inspire your audience with stunning AI videos.",
    "Content Creators & Social Media Influencers – Post engaging shorts without hassle.",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Who Is This For?
        </h2>
        <ul className="space-y-4">
          {audiences.map((audience, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: ["2 videos/month (watermarked)"],
    },
    {
      name: "Basic Plan",
      price: "₹999/month",
      features: ["20 videos (30s each)"],
    },
    {
      name: "Pro Plan",
      price: "₹1999/month",
      features: ["50 videos (60s each)"],
    },
    {
      name: "Enterprise Plan",
      price: "₹4,499/month",
      features: ["Unlimited videos", "API access"],
    },
  ];

  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Inspire Millions?</h2>
        <p className="text-xl mb-8">
          Start creating videos in seconds – No editing skills needed!
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a
            href="https://form.typeform.com/to/DyyF0T9w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up now & get your first AI video FREE!
          </a>
        </Button>
      </div>
    </section>
  );
}
