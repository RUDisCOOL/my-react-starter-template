import AppSidebar from "@/components/appSidebar";
import { ModeToggle } from "@/components/modeToggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-2">
          <SidebarTrigger className="" />
          {"{/* HEADER CONTENT HERE IF ANY *  /}"}
          <ModeToggle />
        </header>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
