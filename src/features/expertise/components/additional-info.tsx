import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function AdditionalInfo() {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4 shadow-md">
      <h2 className="text-2xl font-bold">Ek Bilgiler</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="notes">Notlar</Label>
          <Textarea id="notes" placeholder="Ek notlarınızı buraya yazın" className="min-h-[100px]" />
        </div>
        <div className="space-y-2">
          <p>Belgeler</p>
          <div className="flex items-center gap-2">
            <Button className="w-full">Belge Yükle</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
