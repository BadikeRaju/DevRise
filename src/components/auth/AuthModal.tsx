import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultForm?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, defaultForm = "login" }: AuthModalProps) {
  const [currentForm, setCurrentForm] = useState<"login" | "signup">(defaultForm);

  const handleLogin = async (data: { email: string; password: string }) => {
    console.log("Login attempt:", data);
    // TODO: Integrate with your MongoDB authentication
    // Example: await loginUser(data.email, data.password);
    
    // Redirect to dashboard after successful login
    window.location.href = "/dashboard";
    onClose();
  };

  const handleSignup = async (data: { name: string; email: string; password: string; acceptTerms: boolean }) => {
    console.log("Signup attempt:", data);
    // TODO: Integrate with your MongoDB user creation
    // Example: await createUser(data.name, data.email, data.password);
    
    // Redirect to dashboard after successful signup
    window.location.href = "/dashboard";
    onClose();
  };

  const toggleForm = () => {
    setCurrentForm(currentForm === "login" ? "signup" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-background/80 backdrop-blur-md border-primary/20">
        <div className="p-6">
          {currentForm === "login" ? (
            <LoginForm onToggleForm={toggleForm} onSubmit={handleLogin} />
          ) : (
            <SignupForm onToggleForm={toggleForm} onSubmit={handleSignup} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}