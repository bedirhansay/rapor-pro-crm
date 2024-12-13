import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, FileText, Package } from 'lucide-react';
import { VehicleBodyInfo } from './pages/vehicle-body/vehicle-body';
import { VehicleChassisInfo } from './pages/vehicle-chassis';
import { VehicleInfo } from './pages/vehicle-info/vehicle-info';

export const NewExpertise = () => {
  return (
    <div className="">
      <Tabs defaultValue="account">
        <TabsList className="sm:p-2 overflow-auto">
          <TabsTrigger className="flex items-center gap-2  md:px-6" value="account">
            <FileText className="hidden sm:flex" />
            Ruhsat Bilgileri
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="body">
            <Car className="hidden sm:flex" />
            Gövdesi Bilgileri
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2  md:px-6" value="chassis">
            <Package className="hidden sm:flex" />
            Şasi Bilgileri
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full " value="account">
          <VehicleInfo />
        </TabsContent>
        <TabsContent className="" value="body">
          <VehicleBodyInfo />
        </TabsContent>
        <TabsContent value="chassis">
          <VehicleChassisInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
};
