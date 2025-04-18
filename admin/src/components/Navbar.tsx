import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { assets } from "@/assets/assets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ExternalLink, LogOut, Github } from "lucide-react";
import ModeToggle from "./mode-toggle";
import SidebarToggleButton from "./Sidebar/SidebarToggleButton";

const Navbar = () => {
  return (
    <div className="w-full bg-secondary flex items-center justify-between px-4 py-2 sticky top-0 z-50">
      <div className="inline-flex items-center gap-2">
        <SidebarToggleButton />
        <span className="text-xl font-bold font-sans">Dashboard</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          {/* Avatar */}
          <Avatar>
            <AvatarImage src={assets.image.src} alt="" />
            <AvatarFallback />
          </Avatar>
        </DropdownMenuTrigger>
        {/* Dropdown Menu Items */}
        <DropdownMenuContent className="w-50 px-2 py-1.5 relative top-1 right-4 border-2 rounded-lg">
          <DropdownMenuLabel className="text-center">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Link List */}
          <DropdownMenuGroup>
            {/* Theme Toggle Component */}
            <ModeToggle />
            {/* Github repo link */}
            <DropdownMenuItem className="flex justify-between">
              <span>Repository</span>
              <Github />
            </DropdownMenuItem>
            {/* Fronted Btn */}
            <DropdownMenuItem className="flex justify-between">
              <span> Frontend</span>
              <ExternalLink />
            </DropdownMenuItem>
            {/* Backend Btn */}
            <DropdownMenuItem className="flex justify-between">
              <span>Backend</span>
              <ExternalLink />
            </DropdownMenuItem>
            {/* Logout Btn */}
            <DropdownMenuItem className="flex justify-between">
              <span>Logout</span>
              <LogOut />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
