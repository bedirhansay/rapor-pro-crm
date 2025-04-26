import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export function CustomerInfo() {
  return (
    <div className="space-y-6 rounded-lg border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">Müşteri Bilgileri</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Müşteri Tipi */}
        <div className="space-y-2">
          <Label>Müşteri Tipi</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bireysel">Bireysel</SelectItem>
              <SelectItem value="kurumsal">Kurumsal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Ad Soyad */}
        <div className="space-y-2">
          <Label htmlFor="name">Ad Soyad / Şirket Adı</Label>
          <Input id="name" placeholder="Müşteri adı veya şirket adı" />
        </div>

        {/* Telefon */}
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" placeholder="Telefon numarası" />
        </div>

        {/* İkinci Telefon (Opsiyonel) */}
        <div className="space-y-2">
          <Label htmlFor="phone2">Ek Telefon (opsiyonel)</Label>
          <Input id="phone2" placeholder="İkinci telefon numarası" />
        </div>

        {/* E-Posta */}
        <div className="space-y-2">
          <Label htmlFor="email">E-posta</Label>
          <Input id="email" type="email" placeholder="E-posta adresi" />
        </div>

        {/* TC Kimlik No veya Vergi No */}
        <div className="space-y-2">
          <Label htmlFor="identity">TC Kimlik No / Vergi No</Label>
          <Input id="identity" placeholder="TC Kimlik veya Vergi Numarası" />
        </div>

        {/* Adres */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="address">Adres</Label>
          <Input id="address" placeholder="Adres bilgisi" />
        </div>

        {/* Plaka Bilgisi */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="plate">Plaka Bilgisi</Label>
          <Input id="plate" placeholder="Araç plakası" />
        </div>

        {/* Notlar */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="notes">Notlar</Label>
          <Textarea id="notes" placeholder="Varsa özel açıklamalar" className="min-h-[100px]" />
        </div>
      </div>
    </div>
  )
}
