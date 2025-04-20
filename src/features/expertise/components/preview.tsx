import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useExpertiseStore } from '../store/expertise-store'

export function Preview() {
  const { formData } = useExpertiseStore()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Önizleme</h2>
      <div className="space-y-6">
        {/* Müşteri Bilgileri */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Müşteri Bilgileri</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Ad Soyad</Label>
              <p>{formData.customerInfo.name}</p>
            </div>
            <div>
              <Label>Telefon</Label>
              <p>{formData.customerInfo.phone}</p>
            </div>
            <div>
              <Label>Plaka</Label>
              <p>{formData.customerInfo.licensePlate}</p>
            </div>
          </div>
        </Card>

        {/* Araç Bilgileri */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Araç Bilgileri</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Marka</Label>
              <p>{formData.vehicleInfo.brand}</p>
            </div>
            <div>
              <Label>Model</Label>
              <p>{formData.vehicleInfo.model}</p>
            </div>
            <div>
              <Label>Yıl</Label>
              <p>{formData.vehicleInfo.year}</p>
            </div>
            <div>
              <Label>Kilometre</Label>
              <p>{formData.vehicleInfo.mileage}</p>
            </div>
            <div>
              <Label>Vites</Label>
              <p>{formData.vehicleInfo.transmission}</p>
            </div>
            <div>
              <Label>Yakıt</Label>
              <p>{formData.vehicleInfo.fuelType}</p>
            </div>
          </div>
        </Card>

        {/* Parça Durumları */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Parça Durumları</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {formData.partsStatus.map((part) => (
              <div key={part.id}>
                <Label>{part.name}</Label>
                <p>{part.status}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Ek Bilgiler */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Ek Bilgiler</h3>
          <div className="space-y-4">
            <div>
              <Label>Notlar</Label>
              <p>{formData.additionalInfo.notes}</p>
            </div>
            <div>
              <Label>Belgeler</Label>
              <div className="flex flex-wrap gap-2">
                {formData.additionalInfo.documents.map((doc, index) => (
                  <Button key={index}>{doc}</Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
