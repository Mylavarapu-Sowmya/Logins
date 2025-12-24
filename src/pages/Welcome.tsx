import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import welcomeBg from "@/assets/welcome-bg.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top image section */}
      <div 
        className="h-[45vh] bg-muted bg-cover bg-center"
        style={{ backgroundImage: `url(${welcomeBg})` }}
      />
      
      {/* Content section */}
      <div className="flex flex-1 flex-col justify-end px-6 pb-8 animate-fade-in">
        <h1 className="mb-2 text-2xl font-bold text-foreground">
          Welcome to PopX
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
        
        <div className="space-y-3">
          <Button
            variant="popx"
            size="full"
            onClick={() => navigate("/create-account")}
          >
            Create Account
          </Button>
          <Button
            variant="popxSecondary"
            size="full"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
