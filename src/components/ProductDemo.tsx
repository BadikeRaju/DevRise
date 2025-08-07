import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Code, Terminal, Cpu, Activity } from "lucide-react";

const ProductDemo = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            <Play className="w-4 h-4 mr-2" />
            See It In Action
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Watch{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DevriseAI
            </span>{" "}
            in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how our AI-powered platform transforms the way developers learn, practice, and prepare for interviews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo video placeholder */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <Button 
                    size="lg" 
                    className="relative z-10 rounded-full w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </Button>
                  
                  {/* Floating UI elements */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                    <Terminal className="w-4 h-4 inline mr-2" />
                    AI Assistant Active
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-2 text-green-400 text-sm">
                    <Activity className="w-4 h-4 inline mr-2" />
                    Focus Mode: 25:00
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Demo features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Interactive Code Analysis</h3>
                  <p className="text-muted-foreground">
                    Watch as our AI analyzes your code in real-time, providing intelligent suggestions and optimization tips.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Voice-Controlled Interface</h3>
                  <p className="text-muted-foreground">
                    Experience hands-free coding assistance with natural language processing and voice commands.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Learning Adaptation</h3>
                  <p className="text-muted-foreground">
                    See how the platform adapts to your learning style and adjusts difficulty based on your progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-500">
                Try Interactive Demo
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20">
                Schedule Walkthrough
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2.5x</div>
            <div className="text-sm text-muted-foreground">Faster Learning</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">87%</div>
            <div className="text-sm text-muted-foreground">Productivity Boost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15min</div>
            <div className="text-sm text-muted-foreground">Daily Setup</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;