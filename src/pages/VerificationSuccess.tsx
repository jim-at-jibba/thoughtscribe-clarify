import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VerificationSuccess = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">
            Email Verified Successfully!
          </h1>
          <p className="text-muted-foreground">
            Thank you for verifying your email address. You can now access all
            features of your account.
          </p>
        </div>
        <Button asChild className="w-full">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default VerificationSuccess;
