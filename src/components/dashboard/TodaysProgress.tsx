import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

const TodaysProgress = () => {
  const todaysTasks = [
    { task: "Complete 2 LeetCode problems", completed: true },
    { task: "30min System Design study", completed: true },
    { task: "Mock interview prep", completed: false },
    { task: "Resume review", completed: false }
  ];

  const completedTasks = todaysTasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / todaysTasks.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Today's Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Daily Goals</span>
              <span>{completedTasks}/{todaysTasks.length} completed</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <Separator />
          <div className="space-y-3">
            {todaysTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  task.completed 
                    ? "bg-primary border-primary" 
                    : "border-muted-foreground"
                }`} />
                <span className={`text-sm ${
                  task.completed 
                    ? "line-through text-muted-foreground" 
                    : ""
                }`}>
                  {task.task}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodaysProgress;