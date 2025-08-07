import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatsCards from "@/components/dashboard/StatsCards";
import PomodoroTimer from "@/components/dashboard/PomodoroTimer";
import AIAssistant from "@/components/dashboard/AIAssistant";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TodaysProgress from "@/components/dashboard/TodaysProgress";
import LearningPath from "@/components/dashboard/LearningPath";
import QuickActions from "@/components/dashboard/QuickActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Brain, Clock, TrendingUp, BookOpen, Zap } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="focus" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Focus
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="learning" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Learning
            </TabsTrigger>
            <TabsTrigger value="actions" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Actions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <StatsCards />
            <TodaysProgress />
          </TabsContent>

          <TabsContent value="focus" className="space-y-6">
            <PomodoroTimer />
          </TabsContent>

          <TabsContent value="ai-assistant" className="space-y-6">
            <AIAssistant />
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <RecentActivity />
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <LearningPath />
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <QuickActions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;