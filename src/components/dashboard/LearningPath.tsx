import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";

const LearningPath = () => {
  const learningPaths = [
    { subject: "Data Structures", progress: 85 },
    { subject: "Algorithms", progress: 72 },
    { subject: "System Design", progress: 45 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Learning Path
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {learningPaths.map((path, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{path.subject}</span>
                <span className="text-xs text-muted-foreground">{path.progress}%</span>
              </div>
              <Progress value={path.progress} className="h-2" />
            </div>
          ))}
          <Button className="w-full mt-4" variant="outline">
            View Full Roadmap
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPath;