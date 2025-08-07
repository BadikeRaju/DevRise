import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sparkles, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Demo", href: "#demo" },
        { label: "Pricing", href: "#pricing" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Changelog", href: "#changelog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "API Reference", href: "#api" },
        { label: "Blog", href: "#blog" },
        { label: "Community", href: "#community" },
        { label: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" },
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">DevriseAI</span>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              AI-powered productivity platform designed for developers preparing for top tech roles. 
              Master coding interviews, accelerate learning, and level up your career.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> for developers worldwide
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} DevriseAI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              All systems operational
            </Badge>
            <p className="text-xs text-muted-foreground">
              Made with latest AI technology
            </p>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-gradient-primary">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-1">
                Ready to accelerate your developer career?
              </h3>
              <p className="text-white/80 text-sm">
                Join 10,000+ developers already using DevriseAI
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg">
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;