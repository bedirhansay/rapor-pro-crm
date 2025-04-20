'use client'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building2, ChevronDown, Filter, MapPin, MoreHorizontal, Phone, Search, UserPlus, Users2 } from 'lucide-react'
import { useState } from 'react'
import { ClientStatus, ClientType, clients } from './constant'

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<ClientType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<ClientStatus | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const itemsPerPage = 6

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !selectedType || client.type === selectedType
    const matchesStatus = !selectedStatus || client.status === selectedStatus
    return matchesSearch && matchesType && matchesStatus
  })

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentClients = filteredClients.slice(startIndex, startIndex + itemsPerPage)

  const getTypeBadgeColor = (type: ClientType) => {
    switch (type) {
      case ClientType.CORPORATE:
        return 'blue'
      case ClientType.INDIVIDUAL:
        return 'purple'
      case ClientType.GOVERNMENT:
        return 'emerald'
      case ClientType.NGO:
        return 'orange'
      default:
        return 'zinc'
    }
  }

  const getStatusBadgeColor = (status: ClientStatus) => {
    switch (status) {
      case ClientStatus.ACTIVE:
        return 'green'
      case ClientStatus.INACTIVE:
        return 'red'
      case ClientStatus.PENDING:
        return 'yellow'
      default:
        return 'zinc'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Müşteriler</h1>
          <p className="mt-1 text-sm text-gray-500">Tüm müşterileri görüntüleyin ve yönetin</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Yeni Müşteri
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Müşteri Listesi</CardTitle>
          <CardDescription>Toplam {filteredClients.length} müşteri bulundu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Müşteri ara..."
                className="w-full pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Dropdown>
                <DropdownButton className="flex items-center gap-2">
                  <Filter className="mr-2 w-4" /> Tip: {selectedType ? selectedType : 'Tümü'}
                  <ChevronDown />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedType(null)}>Tümü</DropdownItem>
                  {Object.values(ClientType).map((type) => (
                    <DropdownItem key={type} onClick={() => setSelectedType(type)}>
                      {type}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownButton className="flex items-center gap-2">
                  <Filter className="mr-2 h-4 w-4" /> Durum: {selectedStatus ? selectedStatus : 'Tümü'}
                  <ChevronDown />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedStatus(null)}>Tümü</DropdownItem>
                  {Object.values(ClientStatus).map((status) => (
                    <DropdownItem key={status} onClick={() => setSelectedStatus(status)}>
                      {status}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
            <TabsList>
              <TabsTrigger value="grid">
                <Users2 className="mr-2 h-4 w-4" /> Grid
              </TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
            </TabsList>
          </Tabs>

          {viewMode === 'grid' ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentClients.map((client) => (
                <Card key={client.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar src={client.avatar} className="h-12 w-12 rounded-full" />
                        <div className="max-w-[160px] truncate">
                          <CardTitle className="truncate text-base font-semibold text-gray-900">
                            {client.name}
                          </CardTitle>
                          <CardDescription className="truncate text-sm text-gray-500">{client.email}</CardDescription>
                        </div>
                      </div>
                      <Dropdown>
                        <DropdownButton>
                          <MoreHorizontal className="h-4 w-4" />
                        </DropdownButton>
                        <DropdownMenu>
                          <DropdownItem>Düzenle</DropdownItem>
                          <DropdownItem>Detaylar</DropdownItem>
                          <DropdownItem>Devre Dışı Bırak</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge color={getTypeBadgeColor(client.type)}>{client.type}</Badge>
                      <Badge color={getStatusBadgeColor(client.status)}>{client.status}</Badge>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building2 className="mr-2 h-4 w-4" /> {client.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" /> {client.location}
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" /> {client.phone}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 px-6 py-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Son işlem: {client.lastTransaction}</span>
                      <span>Toplam işlem: {client.totalTransactions}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="mt-6 overflow-hidden rounded-lg border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Müşteri</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tip</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Şirket</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Son İşlem</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentClients.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Avatar src={client.avatar} className="h-10 w-10 rounded-full" />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{client.name}</div>
                            <div className="text-sm text-gray-500">{client.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge color={getTypeBadgeColor(client.type)}>{client.type}</Badge>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{client.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge color={getStatusBadgeColor(client.status)}>{client.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                        <div>{client.lastTransaction}</div>
                        <div className="text-xs">Toplam: {client.totalTransactions} işlem</div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                        <Dropdown>
                          <DropdownButton>
                            <Button className="rounded-full">
                              <MoreHorizontal className="h-4 w-4 !text-white" />
                            </Button>
                          </DropdownButton>
                          <DropdownMenu>
                            <DropdownItem>Düzenle</DropdownItem>
                            <DropdownItem>Detaylar</DropdownItem>
                            <DropdownItem>Devre Dışı Bırak</DropdownItem>
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
        <CardFooter className="flex items-center justify-between border-t px-6 py-4">
          <div className="text-sm text-gray-500">
            Sayfa {currentPage} / {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Önceki
            </Button>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Sonraki
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
