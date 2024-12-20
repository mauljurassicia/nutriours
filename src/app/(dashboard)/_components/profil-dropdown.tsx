import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AtSignIcon, LogInIcon } from "lucide-react";
import Link from "next/link";

interface ProfilDropdownProps {
  children: React.ReactNode;
}


export default function ProfilDropdown({ children }: ProfilDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/login" className="flex items-center gap-4">
            Login <LogInIcon  size={20} />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/register" className="flex items-center gap-4">
            Register <AtSignIcon size={18} />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
