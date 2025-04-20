'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { BranchStatus, BranchType, branches } from './constant'

export function Branches() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<BranchType | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<BranchStatus | null>(null)

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      searchQuery === '' ||
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.manager.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = !selectedType || branch.type === selectedType
    const matchesStatus = !selectedStatus || branch.status === selectedStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeBadgeColor = (type: BranchType) => {
    switch (type) {
      case BranchType.HEAD_OFFICE:
        return 'bg-purple-100 text-purple-800'
      case BranchType.REGIONAL:
        return 'bg-blue-100 text-blue-800'
      case BranchType.BRANCH:
        return 'bg-green-100 text-green-800'
      case BranchType.SERVICE:
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusBadgeColor = (status: BranchStatus) => {
    switch (status) {
      case BranchStatus.ACTIVE:
        return 'bg-green-100 text-green-800'
      case BranchStatus.INACTIVE:
        return 'bg-red-100 text-red-800'
      case BranchStatus.PENDING:
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="rounded-2xl shadow-xl">
      <CardHeader className="flex flex-col gap-4 pb-4 md:flex-row md:items-center md:justify-between">
        <CardTitle className="text-xl font-semibold tracking-tight">Şubeler</CardTitle>
        <div className="flex flex-wrap items-center gap-2">
          <Input
            placeholder="Şube ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
          <Dropdown>
            <DropdownButton as={Button}>{selectedType ? selectedType : 'Şube Tipi'}</DropdownButton>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedType(null)}>Tümü</DropdownItem>
              {Object.values(BranchType).map((type) => (
                <DropdownItem key={type} onClick={() => setSelectedType(type)}>
                  {type}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownButton as={Button}>{selectedStatus ? selectedStatus : 'Durum'}</DropdownButton>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedStatus(null)}>Tümü</DropdownItem>
              {Object.values(BranchStatus).map((status) => (
                <DropdownItem key={status} onClick={() => setSelectedStatus(status)}>
                  {status}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button className="rounded-xl px-6">+ Yeni Şube</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Şube Kodu</th>
                <th className="px-4 py-3 text-left">Şube Adı</th>
                <th className="px-4 py-3 text-left">Tip</th>
                <th className="px-4 py-3 text-left">Durum</th>
                <th className="px-4 py-3 text-left">Şehir</th>
                <th className="px-4 py-3 text-left">Yönetici</th>
                <th className="px-4 py-3 text-left">Çalışan</th>
                <th className="px-4 py-3 text-left">İletişim</th>
                <th className="px-4 py-3 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredBranches.map((branch) => (
                <tr key={branch.id} className="hover:bg-muted/40">
                  <td className="px-4 py-3 font-medium text-gray-900">{branch.code}</td>
                  <td className="px-4 py-3">{branch.name}</td>
                  <td className="px-4 py-3">
                    <Badge className={getTypeBadgeColor(branch.type)}>{branch.type}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge className={getStatusBadgeColor(branch.status)}>{branch.status}</Badge>
                  </td>
                  <td className="px-4 py-3">{branch.city}</td>
                  <td className="px-4 py-3">{branch.manager}</td>
                  <td className="px-4 py-3">{branch.employeeCount}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col text-sm">
                      <span>{branch.phone}</span>
                      <span className="text-xs text-muted-foreground">{branch.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Dropdown>
                      <DropdownButton as={Button}>
                        <MoreHorizontal className="h-4 w-4" />
                      </DropdownButton>
                      <DropdownMenu>
                        <DropdownItem>Düzenle</DropdownItem>
                        <DropdownItem>Detaylar</DropdownItem>
                        <DropdownItem>Çalışanlar</DropdownItem>
                        <DropdownItem className="text-red-600">Sil</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
