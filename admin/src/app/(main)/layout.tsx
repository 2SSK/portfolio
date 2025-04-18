import Navbar from "@/components/Navbar";
import SidebarWrapper from "@/components/Sidebar/SidebarWrapper";
import { SidebarProvider } from "@/components/Sidebar/SidebarProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1">
            <SidebarWrapper />
            {children}
          </div>
        </div>
      </SidebarProvider>
    </>
  );
}
