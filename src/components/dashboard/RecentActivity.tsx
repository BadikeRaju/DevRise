import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Code, GitBranch, Mic, BookOpen } from "lucide-react";

const RecentActivity = () => {
  const recentActivity = [
    { action: "Completed", item: "Binary Search Tree Implementation", time: "2 hours ago", type: "code" },
    { action: "Finished", item: "System Design: Chat Application", time: "4 hours ago", type: "design" },
    { action: "Scheduled", item: "Mock Interview with AI", time: "Tomorrow 2PM", type: "interview" },
    { action: "Reviewed", item: "Resume Optimization", time: "Yesterday", type: "resume" }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "code":
        return <Code className="w-4 h-4 text-primary" />;
      case "design":
        return <GitBranch className="w-4 h-4 text-primary" />;
      case "interview":
        return <Mic className="w-4 h-4 text-primary" />;
      case "resume":
        return <BookOpen className="w-4 h-4 text-primary" />;
      default:
        return <Code className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-primary/10">
                {getIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="font-medium">
                  {activity.action} <span className="text-primary">{activity.item}</span>
                </p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;