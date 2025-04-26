'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { useExpertiseStore } from '../../store/expertise-store'

export const PackageStep = () => {
  const { setCurrentStep } = useExpertiseStore()

  const packages = [
    {
      id: 1,
      name: 'Temel Paket',
      price: '499',
      description: 'Temel ekspertiz hizmetleri',
      features: ['Temel araç kontrolü', 'Motor kontrolü', 'Kaporta kontrolü', 'Basit rapor'],
    },
    {
      id: 2,
      name: 'Standart Paket',
      price: '799',
      description: 'En çok tercih edilen paket',
      features: [
        'Temel araç kontrolü',
        'Detaylı motor kontrolü',
        'Detaylı kaporta kontrolü',
        'Boya kontrolü',
        'Standart rapor',
      ],
    },
    {
      id: 3,
      name: 'Premium Paket',
      price: '1299',
      description: 'Tam kapsamlı ekspertiz',
      features: [
        'Detaylı araç kontrolü',
        'İleri düzey motor kontrolü',
        'Detaylı kaporta kontrolü',
        'Profesyonel boya kontrolü',
        'Detaylı hasar raporu',
        'Premium rapor',
      ],
    },
  ]

  const handleSelectPackage = (packageId: number) => {
    // Burada seçilen paketi store'a kaydedebilirsiniz
    setCurrentStep(1) // Bir sonraki adıma geç
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold">Ekspertiz Paketleri</h1>
        <p className="text-gray-600">İhtiyacınıza en uygun ekspertiz paketini seçin</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="flex flex-col p-6">
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-bold">{pkg.name}</h2>
              <p className="mb-4 text-gray-600">{pkg.description}</p>
              <p className="mb-6 text-3xl font-bold">
                {pkg.price} <span className="text-sm font-normal">TL</span>
              </p>
              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button onClick={() => handleSelectPackage(pkg.id)} className="w-full">
              Paketi Seç
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
