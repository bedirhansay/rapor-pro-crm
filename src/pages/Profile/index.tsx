import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PackageFormValues } from "./schema";
import AddPackageForm from "./components/AddPackageForm";
import PackageCard from "./components/PackageCard";
import { PlusCircle } from "lucide-react";

const Profile = () => {
  const [packages, setPackages] = useState<PackageFormValues[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddPackage = (data: PackageFormValues) => {
    setPackages((prev) => [...prev, data]);
    setIsDialogOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profilim</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Yeni Paket Ekle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Yeni Paket Ekle</DialogTitle>
            </DialogHeader>
            <AddPackageForm onSubmit={handleAddPackage} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>

      {packages.length === 0 && (
        <div className="flex h-[200px] items-center justify-center rounded-lg border-2 border-dashed">
          <p className="text-gray-500">Henüz paket eklenmemiş</p>
        </div>
      )}
    </div>
  );
};

export default Profile; 