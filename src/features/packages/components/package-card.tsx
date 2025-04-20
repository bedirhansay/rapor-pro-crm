import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { getTypeBadgeColor } from '@/lib/utils'
import { PackageStatus, PackageType } from '../constant'

export interface PackageCardProps {
  name: string
  description: string
  type: PackageType
  price: number
  status: PackageStatus
  features: string[]
  maxUsers: number
  maxBranches: number
}

export const PackageCard = ({
  name,
  description,
  type,
  price,
  status,
  features,
  maxUsers,
  maxBranches,
}: PackageCardProps) => {
  return (
    <Card key={name}>
      <CardHeader>
        <div className="flex items-start justify-between ">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <Badge className={getTypeBadgeColor(type)}>{type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <div className="flex h-full flex-col justify-between gap-4">
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-2xl font-bold">₺{price}/ay</div>
              <Badge>{status}</Badge>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Özellikler:</div>
              <ul className="list-inside list-disc space-y-1 text-sm">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Max Kullanıcı: {maxUsers}</span>
              <span>Max Şube: {maxBranches}</span>
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
  )
}
