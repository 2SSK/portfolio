"use client";

import { useUser } from "@/components/UserProvider";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { LogOut } from "lucide-react";

const LogoutItem = () => {
  const { setLoggedIn } = useUser();

  return (
    <>
      <DropdownMenuItem
        className="flex justify-between"
        onClick={() => setLoggedIn(false)}
      >
        <span>Logout</span>
        <LogOut />
      </DropdownMenuItem>
    </>
  );
};

export default LogoutItem;
