import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { dashboardRouteLists } from "@/utils/constant";
import { usePathname } from "next/navigation";

const pages = dashboardRouteLists;

export default function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="h-[50px]"></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((page) => (
                <SidebarMenuItem key={page.name}>
                  <SidebarMenuButton asChild  isActive={pathName.startsWith(page.href)} variant={"default"} size={"default"}>
                    <Link href={page.href}>
                      <page.icon /> {page.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
