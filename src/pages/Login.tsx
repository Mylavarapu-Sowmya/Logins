import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/FormInput";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // For demo purposes, navigate to account settings
    if (email && password) {
      navigate("/account-settings");
    }
  };

  const isFormValid = email.length > 0 && password.length > 0;

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pt-8">
      <div className="animate-fade-in">
        <h1 className="mb-2 text-2xl font-bold text-foreground">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="space-y-2">
          <FormInput
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={setEmail}
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={setPassword}
          />
        </div>

        <div className="mt-6">
          <Button
            variant={isFormValid ? "popx" : "popxDisabled"}
            size="full"
            onClick={handleLogin}
            disabled={!isFormValid}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
