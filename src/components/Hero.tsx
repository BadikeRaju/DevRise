import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Code2, Brain, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 text-center space-y-8 animate-fade-in">
        {/* Beta badge */}
        <div className="flex justify-center">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/20 bg-gradient-primary text-primary-foreground animate-glow-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Beta • AI-Powered Developer Tools
          </Badge>
        </div>

        {/* Main headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              DevriseAI
            </span>
            <br />
            <span className="text-foreground">
              Code Smarter
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI-powered productivity platform designed for developers preparing for 
            <span className="text-primary font-semibold"> top tech roles</span>. 
            Master DSA, ace interviews, and accelerate your career.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-primary" />
            AI Mock Interviews
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-secondary" />
            Smart Learning Paths
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            Productivity Tracking
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-500 text-lg px-8 py-6 group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 text-primary hover:bg-primary/5 text-lg px-8 py-6"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10k+</div>
            <div className="text-sm text-muted-foreground">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">95%</div>
            <div className="text-sm text-muted-foreground">Interview Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Companies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;