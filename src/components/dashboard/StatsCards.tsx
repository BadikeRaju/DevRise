import { Card, CardContent } from "@/components/ui/card";
import { Clock, Trophy, Mic, Flame } from "lucide-react";

const StatsCards = () => {
  const stats = [
    { label: "Daily Streak", value: 7, icon: Flame, color: "text-orange-500" },
    { label: "Problems Solved", value: 42, icon: Trophy, color: "text-yellow-500" },
    { label: "Study Hours", value: 8.5, icon: Clock, color: "text-blue-500" },
    { label: "Mock Interviews", value: 3, icon: Mic, color: "text-purple-500" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="hover-scale cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;