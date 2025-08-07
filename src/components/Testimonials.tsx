import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior SWE at Google",
    company: "Google",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "DevriseAI completely transformed my interview prep. The AI mock interviews felt incredibly realistic and helped me land my dream role at Google. The voice assistant is a game-changer for productivity.",
    badge: "FAANG Success"
  },
  {
    name: "Marcus Rodriguez",
    role: "Full Stack Developer",
    company: "Meta",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "The learning roadmaps are phenomenal. I went from struggling with system design to confidently architecting distributed systems. The AI adapts to your pace perfectly.",
    badge: "System Design Pro"
  },
  {
    name: "Emily Johnson",
    role: "Frontend Engineer",
    company: "Netflix",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "The daily coding challenges with gamification kept me motivated throughout my job search. The resume AI suggestions were spot-on and helped me get multiple offers.",
    badge: "5 Job Offers"
  },
  {
    name: "David Park",
    role: "DevOps Engineer",
    company: "Stripe",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "Love the Pomodoro integration with coding sessions. The productivity insights helped me optimize my workflow and code 40% more efficiently. Absolutely brilliant platform.",
    badge: "Productivity King"
  },
  {
    name: "Alex Thompson",
    role: "Backend Developer",
    company: "Uber",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "The voice assistant understands context so well. I can discuss algorithms while coding and get instant feedback. It's like having a senior engineer mentoring you 24/7.",
    badge: "AI Enthusiast"
  },
  {
    name: "Lisa Wang",
    role: "Software Engineer",
    company: "Amazon",
    image: "/api/placeholder/150/150",
    rating: 5,
    text: "From bootcamp to Amazon in 8 months using DevriseAI. The structured learning path and AI interviews gave me the confidence to tackle any technical challenge.",
    badge: "Career Pivot"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-4 py-2">
            <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
            5.0 Stars • 10,000+ Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              developers
            </span>{" "}
            worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who've accelerated their careers with DevriseAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-sm leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by developers at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Google", "Meta", "Netflix", "Amazon", "Stripe", "Uber", "Microsoft", "Apple"].map((company) => (
              <div key={company} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;