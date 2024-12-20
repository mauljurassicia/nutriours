import AddRoomDialog from "@/app/(dashboard)/rooms/_components/add-room-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section id="rooms">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Daftar Ruangan</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Link key={i} href={`/rooms/${i + 1}`}>
            <Card key={i} className="h-[200px] hover:bg-slate-50">
              <CardHeader>
                <CardTitle>Ruangan {i + 1}</CardTitle>
                <CardDescription>
                  Kode Ruangan: {`RM-${("0" + (i + 1)).slice(-2)}`}
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[calc(100%-100px)]">
                <div className="flex items-center justify-center h-full w-full rounded-lg bg-slate-200"></div>
              </CardContent>
            </Card>
          </Link>
        ))}
        <AddRoomDialog>
          <Card className="hover:cursor-pointer bg-slate-100 hover:bg-slate-300 h-[200px]">
            <CardContent className="flex items-center justify-center h-full p-0 ">
              <PlusIcon className="h-8 w-8" />
            </CardContent>
          </Card>
        </AddRoomDialog>
      </div>
    </section>
  );
}
