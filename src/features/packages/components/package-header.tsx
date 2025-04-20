import { Button } from '@/components/ui/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Grid, List, Plus } from 'lucide-react'
import { useState } from 'react'
import { PackageStatus, PackageType } from '../constant'

export interface PackageHeaderProps {
  viewMode: 'grid' | 'list'
  setViewMode: (viewMode: 'grid' | 'list') => void
}

export const PackageHeader = ({ viewMode, setViewMode }: PackageHeaderProps) => {
  const [selectedType, setSelectedType] = useState<PackageType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<PackageStatus | null>(null)

  return (
    <div className="flex flex-col space-y-4 border-b pb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Paketler</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Yeni Paket
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2">
          <Dropdown>
            <DropdownButton as={Button} outline>
              {selectedType ? selectedType : 'Paket Tipi'}
            </DropdownButton>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedType(null)}>Tümü</DropdownItem>
              {Object.values(PackageType).map((type) => (
                <DropdownItem key={type} onClick={() => setSelectedType(type)}>
                  {type}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownButton as={Button} outline>
              {selectedStatus ? selectedStatus : 'Durum'}
            </DropdownButton>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedStatus(null)}>Tümü</DropdownItem>
              {Object.values(PackageStatus).map((status) => (
                <DropdownItem key={status} onClick={() => setSelectedStatus(status)}>
                  {status}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
            <TabsList>
              <TabsTrigger value="grid">
                <Grid className="mr-2 h-4 w-4" />
                Grid
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="mr-2 h-4 w-4" />
                Liste
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
