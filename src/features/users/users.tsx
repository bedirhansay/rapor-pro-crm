'use client'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, Filter, Mail, MapPin, MoreHorizontal, Phone, Search, User2, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { UserRole, UserStatus, users } from './constant'

export default function Users() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<UserStatus | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const itemsPerPage = 6

  // Filter users based on search query, role, and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = !selectedRole || user.role === selectedRole
    const matchesStatus = !selectedStatus || user.status === selectedStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage)

  // Get role badge color
  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case UserRole.ADMIN:
        return 'bg-red-100 text-red-800'
      case UserRole.EXPERT:
        return 'bg-blue-100 text-blue-800'
      case UserRole.MANAGER:
        return 'bg-purple-100 text-purple-800'
      case UserRole.OPERATOR:
        return 'bg-green-100 text-green-800'
      case UserRole.VIEWER:
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Get status badge color
  const getStatusBadgeColor = (status: UserStatus) => {
    switch (status) {
      case UserStatus.ACTIVE:
        return 'bg-green-100 text-green-800'
      case UserStatus.INACTIVE:
        return 'bg-red-100 text-red-800'
      case UserStatus.PENDING:
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Kullanıcılar</h1>
          <p className="mt-1 text-sm text-gray-500">Tüm kullanıcıları görüntüleyin ve yönetin</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Yeni Kullanıcı
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kullanıcı Listesi</CardTitle>
          <CardDescription>Toplam {filteredUsers.length} kullanıcı bulundu</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Kullanıcı ara..."
                className="w-full pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Dropdown>
                <DropdownButton as={Button}>
                  <Filter className="mr-2 h-4 w-4" />
                  Rol: {selectedRole ? selectedRole : 'Tümü'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedRole(null)}>Tümü</DropdownItem>
                  {Object.values(UserRole).map((role) => (
                    <DropdownItem key={role} onClick={() => setSelectedRole(role)}>
                      {role}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownButton as={Button}>
                  <Filter className="mr-2 h-4 w-4" />
                  Durum: {selectedStatus ? selectedStatus : 'Tümü'}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedStatus(null)}>Tümü</DropdownItem>
                  {Object.values(UserStatus).map((status) => (
                    <DropdownItem key={status} onClick={() => setSelectedStatus(status)}>
                      {status}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
            <TabsList className="mb-4">
              <TabsTrigger value="grid">
                <User2 className="mr-2 h-4 w-4" />
                Grid
              </TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
            </TabsList>
          </Tabs>

          {viewMode === 'grid' ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentUsers.map((user) => (
                <Card key={user.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar src={user.avatar} className="h-12 w-12" />
                        <div>
                          <CardTitle className="text-lg">{user.name}</CardTitle>
                          <CardDescription>{user.email}</CardDescription>
                        </div>
                      </div>
                      <Dropdown>
                        <DropdownButton as={Button}>
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
                      <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                      <Badge className={getStatusBadgeColor(user.status)}>{user.status}</Badge>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        {user.location}
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        {user.department}
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        {user.phone}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 px-6 py-3">
                    <div className="text-xs text-gray-500">Son aktif: {user.lastActive}</div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <div className="overflow-hidden rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Kullanıcı
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Rol
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Departman
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Durum
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        Son Aktif
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">İşlemler</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Avatar src={user.avatar} className="h-10 w-10" />
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getRoleBadgeColor(user.role)}>{user.role}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{user.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge className={getStatusBadgeColor(user.status)}>{user.status}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">{user.lastActive}</td>
                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                          <Dropdown>
                            <DropdownButton as={Button}>
                              <MoreHorizontal className="h-4 w-4" />
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
            </Card>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t px-6 py-4">
          <div className="text-sm text-gray-500">
            Sayfa {currentPage} / {totalPages}
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Önceki
            </Button>
            <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
              Sonraki
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
