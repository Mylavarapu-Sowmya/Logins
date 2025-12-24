import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/FormInput";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState<boolean | null>(null);

  const handleCreateAccount = () => {
    // For demo purposes, navigate to account settings
    if (fullName && phone && email && password && isAgency !== null) {
      navigate("/account-settings");
    }
  };

  const isFormValid =
    fullName.length > 0 &&
    phone.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    isAgency !== null;

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 pt-8 pb-8">
      <div className="animate-fade-in">
        <div className="mb-6 flex items-start">
          <h1 className="text-2xl font-bold text-foreground">
            Create your
            <br />
            PopX account
          </h1>
          <div className="ml-2 -mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
            1
          </div>
        </div>

        <div className="space-y-1">
          <FormInput
            label="Full Name"
            placeholder="Marry Doe"
            value={fullName}
            onChange={setFullName}
            required
          />
          <FormInput
            label="Phone number"
            type="tel"
            placeholder="Marry Doe"
            value={phone}
            onChange={setPhone}
            required
          />
          <FormInput
            label="Email address"
            type="email"
            placeholder="Marry Doe"
            value={email}
            onChange={setEmail}
            required
          />
          <FormInput
            label="Password"
            type="password"
            placeholder="Marry Doe"
            value={password}
            onChange={setPassword}
            required
          />
          <FormInput
            label="Company name"
            placeholder="Marry Doe"
            value={company}
            onChange={setCompany}
          />
        </div>

        <div className="mt-4 mb-8">
          <label className="form-label mb-3 block">
            Are you an Agency?<span className="text-destructive">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                  isAgency === true
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {isAgency === true && (
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                )}
              </div>
              <input
                type="radio"
                name="agency"
                className="sr-only"
                checked={isAgency === true}
                onChange={() => setIsAgency(true)}
              />
              <span className="text-sm text-foreground">Yes</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                  isAgency === false
                    ? "border-primary"
                    : "border-muted-foreground"
                }`}
              >
                {isAgency === false && (
                  <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                )}
              </div>
              <input
                type="radio"
                name="agency"
                className="sr-only"
                checked={isAgency === false}
                onChange={() => setIsAgency(false)}
              />
              <span className="text-sm text-foreground">No</span>
            </label>
          </div>
        </div>

        <div className="mt-auto">
          <Button
            variant={isFormValid ? "popx" : "popxDisabled"}
            size="full"
            onClick={handleCreateAccount}
            disabled={!isFormValid}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
