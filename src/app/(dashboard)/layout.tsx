"use client";

import AppSidebar from "@/components/app-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { dashboardRouteLists } from "@/utils/constant";
import { AvatarImage } from "@radix-ui/react-avatar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Find the current route based on the pathname
  const route = dashboardRouteLists.find((route) => route.href === pathname);
  const routeName = route?.name;
  const RouteIcon = route?.icon; // Use a capitalized variable for components

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <section
          id="topbar"
          className="w-full  h-[70px] px-6 flex items-center justify-center"
        >
          <header className="flex items-center justify-center w-full">
          <h1 className="text-xl font-semibold flex-1 flex gap-2">{routeName} {RouteIcon && <RouteIcon />}</h1>
          </header>
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            ></AvatarImage>
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </section>
        <section id="page" className="w-[90%] mx-auto min-h-screen py-7">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
