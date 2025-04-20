import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CustomerInfo() {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-md">
      <h2 className="text-2xl font-bold">Müşteri Bilgileri</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Ad Soyad</Label>
          <Input id="name" placeholder="Müşteri adı soyadı" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" placeholder="Telefon numarası" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-posta</Label>
          <Input id="email" type="email" placeholder="E-posta adresi" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Adres</Label>
          <Input id="address" placeholder="Adres bilgisi" />
        </div>
      </div>
    </div>
  )
}
