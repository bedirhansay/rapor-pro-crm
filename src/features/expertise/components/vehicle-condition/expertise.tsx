'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FaCarSide } from 'react-icons/fa'
import { GoPackage } from 'react-icons/go'

import { VehicleBodyInfo } from './vehicle-body'
import { VehicleChassisInfo } from './vehicle-chassis'

export default function VehicleCondition() {
  return (
    <div className="">
      <Tabs defaultValue="body">
        <TabsList className="overflow-hidden sm:p-2">
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="body">
            <FaCarSide className="hidden sm:flex" />
            Gövdesi Bilgileri
          </TabsTrigger>
          <TabsTrigger className="flex items-center gap-2 md:px-6" value="chassis">
            <GoPackage className="hidden sm:flex" />
            Şasi Bilgileri
          </TabsTrigger>
        </TabsList>
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
