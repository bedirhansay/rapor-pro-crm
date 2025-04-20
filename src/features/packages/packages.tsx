'use client'

import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Grid, List, Plus } from 'lucide-react'
import { useState } from 'react'
import { PackageStatus, PackageType, packages } from './constant'

export function Packages() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<PackageType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<PackageStatus | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      searchQuery === '' ||
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = !selectedType || pkg.type === selectedType
    const matchesStatus = !selectedStatus || pkg.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeBadgeColor = (type: PackageType) => {
    switch (type) {
      case PackageType.BASIC:
        return 'bg-gray-100 text-gray-800'
      case PackageType.STANDARD:
        return 'bg-blue-100 text-blue-800'
      case PackageType.PREMIUM:
        return 'bg-purple-100 text-purple-800'
      case PackageType.ENTERPRISE:
        return 'bg-indigo-100 text-indigo-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Get badge color based on package status
  const getStatusBadgeColor = (status: PackageStatus) => {
    switch (status) {
      case PackageStatus.ACTIVE:
        return 'bg-green-100 text-green-800'
      case PackageStatus.INACTIVE:
        return 'bg-yellow-100 text-yellow-800'
      case PackageStatus.DISCONTINUED:
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <BreadcrumbNav pageName="packages" />

      <Card>
        <CardHeader className="flex flex-col space-y-4 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Paketler</CardTitle>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Yeni Paket
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Input
              placeholder="Paket ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-[300px]"
            />
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
        </CardHeader>
        <CardContent>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPackages.map((pkg) => (
                <Card key={pkg.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <p className="mt-1 text-sm text-gray-500">{pkg.description}</p>
                      </div>
                      <Badge className={getTypeBadgeColor(pkg.type)}>{pkg.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="h-full">
                    <div className="flex h-full flex-col justify-between gap-4">
                      <div className="space-y-4">
                        <div>
                          <div className="mb-2 text-2xl font-bold">₺{pkg.price}/ay</div>
                          <Badge className={getStatusBadgeColor(pkg.status)}>{pkg.status}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm text-gray-500">Özellikler:</div>
                          <ul className="list-inside list-disc space-y-1 text-sm">
                            {pkg.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Max Kullanıcı: {pkg.maxUsers}</span>
                          <span>Max Şube: {pkg.maxBranches}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1">Düzenle</Button>
                        <Dropdown>
                          <DropdownButton as={Button} outline>
                            İşlemler
                          </DropdownButton>
                          <DropdownMenu>
                            <DropdownItem>Detaylar</DropdownItem>
                            <DropdownItem>Kopyala</DropdownItem>
                            <DropdownItem className="text-red-600">Sil</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">Paket Adı</th>
                    <th className="px-4 py-3 text-left">Tip</th>
                    <th className="px-4 py-3 text-left">Durum</th>
                    <th className="px-4 py-3 text-left">Fiyat</th>
                    <th className="px-4 py-3 text-left">Max Kullanıcı</th>
                    <th className="px-4 py-3 text-left">Max Şube</th>
                    <th className="px-4 py-3 text-left">Son Güncelleme</th>
                    <th className="px-4 py-3 text-left">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPackages.map((pkg) => (
                    <tr key={pkg.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div>
                          <div className="font-medium">{pkg.name}</div>
                          <div className="text-sm text-gray-500">{pkg.description}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={getTypeBadgeColor(pkg.type)}>{pkg.type}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusBadgeColor(pkg.status)}>{pkg.status}</Badge>
                      </td>
                      <td className="px-4 py-3">₺{pkg.price}/ay</td>
                      <td className="px-4 py-3">{pkg.maxUsers}</td>
                      <td className="px-4 py-3">{pkg.maxBranches}</td>
                      <td className="px-4 py-3">{new Date(pkg.updatedAt).toLocaleDateString('tr-TR')}</td>
                      <td className="px-4 py-3">
                        <Dropdown>
                          <DropdownButton as={Button}>İşlemler</DropdownButton>
                          <DropdownMenu>
                            <DropdownItem>Düzenle</DropdownItem>
                            <DropdownItem>Detaylar</DropdownItem>
                            <DropdownItem>Kopyala</DropdownItem>
                            <DropdownItem className="text-red-600">Sil</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
