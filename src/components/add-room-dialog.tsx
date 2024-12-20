import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function AddRoomDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tambah Ruangan</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">Nama Ruangan</Label>
          <Input id="name" type="text" placeholder="Masukkan nama ruangan" className="col-span-3"/>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="code" className="text-right">Kode Ruangan</Label>
          <Input id="code" type="text" placeholder="Masukkan kode ruangan" className="col-span-3"/>
        </div>

        <DialogFooter>
          <Button type="submit">Tambah</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
