import { Avatar, AvatarImage } from "@/shared/ui/avatar";

import { cn } from "@/shared/lib/utils";
import { Profile } from "../_domain/types";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={profile.image ?? ""} className="object-cover" />

      {/* <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback> */}
    </Avatar>
  );
};
