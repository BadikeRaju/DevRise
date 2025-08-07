import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Mic, BookOpen, Coffee } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { label: "Coding Challenge", icon: Code },
    { label: "Mock Interview", icon: Mic },
    { label: "Study Plan", icon: BookOpen },
    { label: "Break Timer", icon: Coffee }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button key={index} variant="outline" className="h-20 flex-col gap-2">
              <action.icon className="w-5 h-5" />
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;