import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Play, Pause } from "lucide-react";

const PomodoroTimer = () => {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, pomodoroTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePomodoro = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setPomodoroTime(25 * 60);
    setIsRunning(false);
  };

  return (
    <Card className="bg-gradient-subtle border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Focus Session
        </CardTitle>
        <CardDescription>
          Stay productive with the Pomodoro technique
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-mono font-bold mb-4 text-primary">
              {formatTime(pomodoroTime)}
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={togglePomodoro}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow"
              >
                {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isRunning ? "Pause" : "Start"}
              </Button>
              <Button
                variant="outline"
                onClick={resetTimer}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PomodoroTimer;