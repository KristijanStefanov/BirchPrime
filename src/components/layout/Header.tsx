import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";

export function Header() {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  );
}
