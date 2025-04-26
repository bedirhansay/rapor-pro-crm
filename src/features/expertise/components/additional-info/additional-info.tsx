import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export function AdditionalInfo() {
  const [hasPreviousDamage, setHasPreviousDamage] = useState<string | null>(null)

  return (
    <div className="space-y-6 rounded-lg border bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">Ek Bilgiler</h2>

      <div className="space-y-4">
        {/* Önceki Hasar Kaydı */}
        <div className="space-y-2">
          <Label>Önceki Hasar Kaydı Var mı?</Label>
          <Select onValueChange={(value) => setHasPreviousDamage(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="evet">Evet</SelectItem>
              <SelectItem value="hayir">Hayır</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {hasPreviousDamage === 'evet' && (
          <div className="space-y-2">
            <Label>Hasar Tutarı (₺)</Label>
            <Input type="number" placeholder="Örneğin: 15000" />
          </div>
        )}

        <div className="space-y-2">
          <Label>KM Tespiti</Label>
          <Input type="number" placeholder="Örneğin: 85000" />
        </div>

        {/* Lastik Durumu */}
        <div className="space-y-2">
          <Label>Lastik Durumu (%)</Label>
          <Input type="number" placeholder="Örneğin: 70" />
        </div>

        {/* Akü Durumu */}
        <div className="space-y-2">
          <Label>Akü Durumu</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="iyi">İyi</SelectItem>
              <SelectItem value="orta">Orta</SelectItem>
              <SelectItem value="zayif">Zayıf</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Yedek Anahtar */}
        <div className="space-y-2">
          <Label>Yedek Anahtar Var mı?</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="var">Var</SelectItem>
              <SelectItem value="yok">Yok</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Ek Notlar */}
        <div className="space-y-2">
          <Label htmlFor="notes">Ek Notlar</Label>
          <Textarea id="notes" placeholder="Ek notlarınızı buraya yazın" className="min-h-[100px]" />
        </div>

        {/* Belge Yükleme */}
        <div className="space-y-2">
          <Label>Belgeler</Label>
          <div className="flex items-center gap-2">
            <Button className="w-full">Belge Yükle</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
