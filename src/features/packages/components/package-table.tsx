import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { getTypeBadgeColor } from '@/lib/utils'
import { packages } from '../constant'

export interface PackageTableProps {
  packages: typeof packages
}

export const PackageTable = ({ packages }: PackageTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border">
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
          {packages.map((pkg) => (
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
                <Badge>{pkg.status}</Badge>
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
  )
}
