'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FaCarSide, FaFile } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'

import { VehicleBodyInfo } from './components/vehicle-body/vehicle-body'
import { VehicleChassisInfo } from './components/vehicle-chassis'
import { VehicleInfo } from './components/vehicle-info/vehicle-info'

export default function Expertise() {
  return (
    <div className="">
      <Tabs defaultValue="account">
        <TabsList className="overflow-auto sm:p-2">
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="account">
            <FaFile className="hidden sm:flex" />
            Ruhsat Bilgileri
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="body">
            <FaCarSide className="hidden sm:flex" />
            Gövdesi Bilgileri
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="chassis">
            <GoPackage className="hidden sm:flex" />
            Şasi Bilgileri
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="account">
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
  )
}
