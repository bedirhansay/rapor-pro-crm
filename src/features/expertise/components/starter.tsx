import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface StarterProps {
  onStart: () => void
}

export default function Starter({ onStart }: StarterProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
        <h1 className="text-3xl font-bold">Rapor Pro ile Ekspertiz Raporu Oluştur</h1>
        <p className="max-w-md text-gray-600">
          Araç ekspertiz raporu oluşturmak için aşağıdaki butona tıklayarak başlayabilirsiniz.
        </p>
        <Button onClick={onStart}>Başla</Button>
      </CardContent>
    </Card>
  )
}
