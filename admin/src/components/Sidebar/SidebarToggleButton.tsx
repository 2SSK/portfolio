"use client";

import { AlignJustify } from "lucide-react";
import { useSidebar } from "./SidebarProvider";

const SidebarToggleButton = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div
      className="rounded-full hover:bg-blue-300/30 p-2 cursor-pointer"
      onClick={toggleSidebar}
    >
      <AlignJustify />
    </div>
  );
};

export default SidebarToggleButton;
