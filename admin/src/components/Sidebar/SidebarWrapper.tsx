"use client";

import { Sidebar } from "./Sidebar";
import { useSidebar } from "./SidebarProvider";

export default function SidebarWrapper() {
  const { isOpen } = useSidebar();

  if (!isOpen) return null;

  return (
    <div className="transition-all duration-300">
      <Sidebar />
    </div>
  );
}
