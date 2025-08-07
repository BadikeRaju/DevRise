import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  Timer, 
  BookOpen, 
  Briefcase, 
  FileText, 
  MessageCircle,
  Trophy,
  Smartphone,
  Calendar
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Voice Assistant",
    description: "Natural speech recognition with intelligent responses. Get coding help, interview prep, and productivity insights through voice commands.",
    badge: "Speech & TTS",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Timer,
    title: "Smart Pomodoro",
    description: "AI-powered productivity tracking with personalized break suggestions and focus optimization based on your coding patterns.",
    badge: "Productivity",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: BookOpen,
    title: "Learning Roadmaps",
    description: "Personalized AI curriculum for DSA, System Design, LLD, and HLD. Adaptive learning paths that evolve with your progress.",
    badge: "AI Learning",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Briefcase,
    title: "Job Tracker Pro",
    description: "Intelligent job application tracking with AI resume tailoring and hiring funnel optimization for top tech companies.",
    badge: "Career",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: FileText,
    title: "Resume Intelligence",
    description: "AI-powered resume review with ATS optimization and calendar sync for seamless interview scheduling.",
    badge: "Smart Review",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: MessageCircle,
    title: "Mock Interviews",
    description: "Realistic AI interviews powered by Mistral with behavioral, technical, and system design scenarios.",
    badge: "Mistral AI",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    icon: Trophy,
    title: "Daily Challenges",
    description: "Gamified coding challenges with leaderboards, achievements, and personalized difficulty progression.",
    badge: "Gamification",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Smartphone,
    title: "Mobile & Extension",
    description: "Progressive Web App with Chrome extension for seamless productivity tracking across all your devices.",
    badge: "PWA Ready",
    gradient: "from-teal-500 to-blue-600"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            🚀 Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              accelerate your career
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI-powered tools designed specifically for developers aiming for top tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Powered by industry-leading technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Firebase Auth",
              "Firestore",
              "Mistral AI",
              "Speech Recognition",
              "Chrome Extensions",
              "PWA Ready"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;