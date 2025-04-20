import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { vehicleParts } from '../constant'

export function PartsStatus() {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-md">
      <h2 className="text-2xl font-bold">Parça Durumları</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {vehicleParts.map((part) => (
          <div key={part.id} className="space-y-2">
            <Label htmlFor={part.id}>{part.name}</Label>
            <Select defaultValue={part.status}>
              <SelectTrigger id={part.id}>
                <SelectValue placeholder="Durum seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="original">Orijinal</SelectItem>
                <SelectItem value="painted">Boyalı</SelectItem>
                <SelectItem value="changed">Değişen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  )
}
