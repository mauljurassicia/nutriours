"use client";

import AppSidebar from "@/components/app-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { dashboardRouteLists } from "@/utils/constant";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AtSignIcon, Link, LogInIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import ProfilDropdown from "./_components/profil-dropdown";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Find the current route based on the pathname
  const route = dashboardRouteLists.find((route) =>
    pathname.startsWith(route.href)
  );
  const routeName = route?.name;
  const RouteIcon = route?.icon; // Use a capitalized variable for components

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <section
          id="topbar"
          className="w-full px-[5%] h-[50px] flex items-center justify-center border-b-2 border-gray-300"
        >
          <header className="flex items-center justify-center w-full">
            <h1 className="text-xl font-semibold flex-1 flex gap-2">
              {routeName} {RouteIcon && <RouteIcon />}
            </h1>
          </header>
          <ProfilDropdown>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              ></AvatarImage>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </ProfilDropdown>
        </section>
        <section id="page" className="w-[90%] mx-auto min-h-screen py-4">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
