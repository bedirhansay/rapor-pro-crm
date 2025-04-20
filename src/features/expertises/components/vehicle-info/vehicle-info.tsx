import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Camera } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { vehicleSchema } from './schema/vehicle-info-schema'

type VehicleForm = z.infer<typeof vehicleSchema>

export const VehicleInfo = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleForm>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      licensePlate: '',
      chassisNumber: '',
      engineCapacity: undefined,
      enginePower: undefined,
      color: '',
      vehicleType: '',
      registrationDate: '',
      ownerName: '',
    },
  })

  const onSubmit = (data: VehicleForm) => {
    console.log('Form Data:', data)
    alert('Form başarıyla gönderildi!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-12 py-4 lg:grid-cols-12">
      <div className="relative col-span-4 flex h-fit flex-col gap-8 overflow-hidden rounded-lg">
        <img src={'/images/car.png'} />

        <div className="flex">
          <Button type="button" className="w-full">
            Araç Bilgilerini Okut <Camera size={44} />
          </Button>
        </div>
      </div>

      <div className="col-span-8 flex flex-col gap-5">
        <div>
          <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700">
            Araç Plakası
          </label>
          <Controller
            name="licensePlate"
            control={control}
            render={({ field }) => <Input {...field} id="licensePlate" placeholder="Plaka giriniz" />}
          />
          {errors.licensePlate && <p className="text-sm text-red-600">{errors.licensePlate.message}</p>}
        </div>

        {/* Şasi Numarası */}
        <div>
          <label htmlFor="chassisNumber" className="block text-sm font-medium text-gray-700">
            Şasi Numarası
          </label>
          <Controller
            name="chassisNumber"
            control={control}
            render={({ field }) => <Input {...field} id="chassisNumber" placeholder="Şasi numarası giriniz" />}
          />
          {errors.chassisNumber && <p className="text-sm text-red-600">{errors.chassisNumber.message}</p>}
        </div>

        {/* Motor Hacmi */}
        <div>
          <label htmlFor="engineCapacity" className="block text-sm font-medium text-gray-700">
            Motor Hacmi (cc)
          </label>
          <Controller
            name="engineCapacity"
            control={control}
            render={({ field }) => (
              <Input {...field} id="engineCapacity" type="number" placeholder="Motor hacmini giriniz" />
            )}
          />
          {errors.engineCapacity && <p className="text-sm text-red-600">{errors.engineCapacity.message}</p>}
        </div>

        {/* Motor Gücü */}
        <div>
          <label htmlFor="enginePower" className="block text-sm font-medium text-gray-700">
            Motor Gücü (hp)
          </label>
          <Controller
            name="enginePower"
            control={control}
            render={({ field }) => (
              <Input {...field} id="enginePower" type="number" placeholder="Motor gücünü giriniz" />
            )}
          />
          {errors.enginePower && <p className="text-sm text-red-600">{errors.enginePower.message}</p>}
        </div>

        {/* Araç Rengi */}
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
            Araç Rengi
          </label>
          <Controller
            name="color"
            control={control}
            render={({ field }) => <Input {...field} id="color" placeholder="Araç rengi giriniz" />}
          />
          {errors.color && <p className="text-sm text-red-600">{errors.color.message}</p>}
        </div>

        {/* Araç Tipi */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
            Araç Tipi
          </label>
          <Controller
            name="vehicleType"
            control={control}
            render={({ field }) => (
              <Input {...field} id="vehicleType" placeholder="Araç tipi giriniz (ör. Sedan, SUV)" />
            )}
          />
          {errors.vehicleType && <p className="text-sm text-red-600">{errors.vehicleType.message}</p>}
        </div>

        {/* Tescil Tarihi */}
        <div>
          <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
            Tescil Tarihi
          </label>
          <Controller
            name="registrationDate"
            control={control}
            render={({ field }) => <Input {...field} id="registrationDate" />}
          />
          {errors.registrationDate && <p className="text-sm text-red-600">{errors.registrationDate.message}</p>}
        </div>

        {/* Araç Sahibinin Adı */}
        <div>
          <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
            Araç Sahibinin Adı
          </label>
          <Controller
            name="ownerName"
            control={control}
            render={({ field }) => <Input {...field} id="ownerName" placeholder="Araç sahibinin adını giriniz" />}
          />
          {errors.ownerName && <p className="text-sm text-red-600">{errors.ownerName.message}</p>}
        </div>

        {/* Gönder Butonu */}
        <Button type="submit">Gönder</Button>
      </div>
    </form>
  )
}
