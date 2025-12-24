import { Camera } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <h1 className="text-lg font-medium text-foreground">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="px-6 py-6 animate-fade-in">
        <div className="flex items-start gap-4">
          {/* Avatar with camera icon */}
          <div className="relative">
            <div className="h-16 w-16 overflow-hidden rounded-full bg-muted">
              <img
                src={profileAvatar}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <Camera className="h-3 w-3 text-primary-foreground" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-base font-medium text-foreground">Marry Doe</h2>
            <p className="text-sm text-muted-foreground">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        {/* Dividers */}
        <div className="mt-8 space-y-4">
          <div className="border-t border-dashed border-border" />
          <div className="border-t border-dashed border-border" />
          <div className="border-t border-dashed border-border" />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
