import { HomeIcon, UserIcon, ArchiveIcon, CookingPotIcon, FileTextIcon, LibraryBigIcon, SettingsIcon, UtensilsIcon, CalendarIcon, BedIcon } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react'; // Adjust the import based on your actual icon library


interface Route {

  name: string;

  href: string;

  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

}
export const dashboardRouteLists: Route[] = [
    {
        name: "Beranda",
        href: "/dashboard",
        icon: HomeIcon,
      },
      {
        name: "Kalender",
        href: "/calendar",
        icon: CalendarIcon,
      },
      {
        name: "Ruangan",
        href: "/rooms",
        icon: BedIcon,
      },
      {
        name: "Dapur",
        href: "/kitchen",
        icon: CookingPotIcon,
      },
      {
        name: "Rekam Medis",
        href: "/medical-records",
        icon: FileTextIcon,
      },
      {
        name: "Resep",
        href: "/food-recipes",
        icon: UtensilsIcon,
      },
      {
        name: "Persediaan",
        href: "/stock",
        icon: ArchiveIcon,
      },
      {
        name: "Perpustakaan",
        href: "/library",
        icon: LibraryBigIcon,
      },
      {
        name: "Pengaturan",
        href: "/settings",
        icon: SettingsIcon,
      },
];