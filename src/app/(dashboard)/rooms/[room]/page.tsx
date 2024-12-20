import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { InfoIcon } from "lucide-react";
import { TableComponent as Table } from "./_components/table";

import Image from "next/image";

export default async function page({
  params
}: {
  params: { room: string };
}) {
  const { room } = await params;

  // Dummy room data
  const dummyRoomData = {
    name: room, // Use the room parameter as the name
    capacity: 20,
    available: 10,
    roomPIC: "John Doe",
    specialization: ["Umum", "Gigi", "Kebidanan"],
    generalDoctors: ["Dr. John Doe", "Dr. Jane Doe"],
    dentalDoctors: ["Dr. Alice Smith", "Dr. Bob Brown"],
    maternityDoctors: ["Dr. Emily White", "Dr. Sarah Black"],
  };

  // Directly use the dummy data
  const roomData = dummyRoomData;

  return (
    <section id="room">
      <h1 className="text-l font-bold mb-4 h-6">Ruangan {roomData.name}</h1>

      <div className="w-full grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="w-[200px] h-[200px] bg-slate-300 rounded-lg">
            <Image
              src="/room.png"
              alt="Room Image"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center">
              <InfoIcon className="mr-2" /> Detail Ruangan
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full grid grid-cols-2 gap-6">
            <div>
              <Label className="flex items-center justify-between text-sm mb-1">
                Penanggung Jawab
              </Label>
              <Input
                type="text"
                value={roomData.roomPIC}
                placeholder="Penanggung Jawab"
                className="w-full"
                disabled={true}
              />
            </div>

            <div className="col-span-2">
              <Label className="flex items-center justify-between text-sm mb-1">
                Deskripsi
              </Label>
              <Textarea
                placeholder="Masukkan deskripsi ruangan"
                className="w-full"
                disabled={true}
                cols={20}
              />
            </div>
            <div>
              <Label className="flex items-center justify-between text-sm mb-1">
                Kapasitas
              </Label>
              <Input
                type="number"
                value={roomData.capacity}
                placeholder="Masukkan kapasitas ruangan"
                className="w-full"
                disabled={true}
              />
            </div>
            <div>
              <Label className="flex items-center justify-between text-sm mb-1">
                Tersedia
              </Label>
              <Input
                type="number"
                value={roomData.available}
                placeholder="Data ketersediaan ruangan"
                className="w-full"
                readOnly={true}
              />
            </div>
            <div>
              <Label className="flex items-center justify-between text-sm mb-1">
                Spesialisasi
              </Label>
              <div className="flex flex-wrap gap-1">
                {roomData.specialization.map((specialization, index) => (
                  <Badge key={index} color={index % 2 === 0 ? "blue" : "green"}>
                    {specialization}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Table />
      </div>
    </section>
  );
}
