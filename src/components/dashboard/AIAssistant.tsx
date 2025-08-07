import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Mic, BookOpen, Target } from "lucide-react";

const AIAssistant = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          AI Learning Assistant
          <Badge variant="secondary" className="ml-2">Active</Badge>
        </CardTitle>
        <CardDescription>
          Your personalized learning companion
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50 border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Daily Recommendation</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on your progress, I recommend focusing on Dynamic Programming today. 
                  Start with the "Climbing Stairs" problem to warm up.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Mic className="w-4 h-4 mr-2" />
              Voice Chat
            </Button>
            <Button size="sm" variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Study Plan
            </Button>
            <Button size="sm" variant="outline">
              <Target className="w-4 h-4 mr-2" />
              Mock Interview
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;