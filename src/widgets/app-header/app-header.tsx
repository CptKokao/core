// import { Button } from "@/shared/ui/button";
import { Layout } from "./_ui/layout";
import { Logo } from "./_ui/logo";
import { MainNav } from "./_ui/main-nav";
import { Profile } from "./_ui/profile";
// import { HelpCircle } from "lucide-react";
import { ToggleTheme } from "@/features/theme/theme-toogle";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public";
}) {
  const isProfile = variant !== "auth";
  console.log(isProfile);
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={<Profile />}
      actions={
        <ToggleTheme />
        // <Button size={"icon"} variant={"ghost"} asChild>
        //   <a href="https://t.me/microcourses_support">
        //     <HelpCircle className="h-5 w-5" />
        //   </a>
        // </Button>
      }
    />
  );
}
