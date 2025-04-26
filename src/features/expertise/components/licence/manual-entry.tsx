import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const LicenceManualEntry = () => {
  return (
    <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
      {/* Sahip Bilgileri */}
      <div className="space-y-2">
        <Label htmlFor="name">Ad Soyad / Ünvan</Label>
        <Input id="name" placeholder="Müşteri adı veya şirket adı" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tc">TC Kimlik No / Vergi No</Label>
        <Input id="tc" placeholder="TC Kimlik veya Vergi No" />
      </div>

      {/* Araç Bilgileri */}
      <div className="space-y-2">
        <Label htmlFor="plate">Plaka</Label>
        <Input id="plate" placeholder="Araç plakası" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" placeholder="Telefon numarası" />
      </div>

      {/* Teknik Bilgiler */}
      <div className="space-y-2">
        <Label htmlFor="brand">Marka</Label>
        <Input id="brand" placeholder="Örneğin: Ford" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="model">Model</Label>
        <Input id="model" placeholder="Örneğin: Focus" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="year">Model Yılı</Label>
        <Input id="year" type="number" placeholder="Örneğin: 2020" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Araç Tipi</Label>
        <Input id="type" placeholder="Sedan, SUV, Hatchback" />
      </div>

      {/* Şasi ve Motor Bilgileri */}
      <div className="space-y-2">
        <Label htmlFor="chassis">Şasi No</Label>
        <Input id="chassis" placeholder="Şasi Numarası" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="engine">Motor No</Label>
        <Input id="engine" placeholder="Motor Numarası" />
      </div>

      {/* Ruhsat ve Trafik Bilgileri */}
      <div className="space-y-2">
        <Label htmlFor="licence">Ruhsat Seri No</Label>
        <Input id="licence" placeholder="Ruhsat Seri Numarası" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="registrationDate">Tescil Tarihi</Label>
        <Input id="registrationDate" type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="firstTrafficDate">Trafiğe Çıkış Tarihi</Label>
        <Input id="firstTrafficDate" type="date" />
      </div>

      {/* Diğer Bilgiler */}
      <div className="space-y-2">
        <Label htmlFor="color">Renk</Label>
        <Input id="color" placeholder="Beyaz, Siyah, vs." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fuel">Yakıt Türü</Label>
        <Input id="fuel" placeholder="Benzin, Dizel, Elektrik" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gear">Vites Türü</Label>
        <Input id="gear" placeholder="Manuel, Otomatik" />
      </div>
    </div>
  )
}
