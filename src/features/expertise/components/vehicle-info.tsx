import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function VehicleInfo() {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-md">
      <h2 className="text-2xl font-bold">Araç Bilgileri</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="brand">Marka</Label>
          <Select>
            <SelectTrigger id="brand">
              <SelectValue placeholder="Marka seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="volkswagen">Volkswagen</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">Model</Label>
          <Input id="model" placeholder="Model" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Yıl</Label>
          <Input id="year" type="number" placeholder="Üretim yılı" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="plate">Plaka</Label>
          <Input id="plate" placeholder="Plaka" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="km">Kilometre</Label>
          <Input id="km" type="number" placeholder="Kilometre" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="color">Renk</Label>
          <Input id="color" placeholder="Renk" />
        </div>
      </div>
    </div>
  )
}
