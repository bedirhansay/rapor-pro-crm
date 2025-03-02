import { z } from 'zod';

export const vehicleSchema = z.object({
  licensePlate: z
    .string()
    .min(1, 'Plaka alanı zorunludur.')
    .regex(/^[A-Z0-9\s-]+$/, 'Geçerli bir plaka giriniz.'),
  chassisNumber: z
    .string()
    .min(17, 'Şasi numarası 17 karakterden az olamaz.')
    .max(17, 'Şasi numarası 17 karakterden fazla olamaz.')
    .regex(/^[A-Z0-9]+$/, 'Geçerli bir şasi numarası giriniz.'),
  engineCapacity: z
    .number({ invalid_type_error: 'Motor hacmi bir sayı olmalıdır.' })
    .min(50, 'Motor hacmi minimum 50 cc olmalıdır.')
    .max(10000, "Motor hacmi 10.000 cc'yi geçemez."),
  enginePower: z
    .number({ invalid_type_error: 'Motor gücü bir sayı olmalıdır.' })
    .min(1, 'Motor gücü minimum 1 hp olmalıdır.'),
  color: z.string().min(1, 'Araç rengi zorunludur.'),
  vehicleType: z.string().min(1, 'Araç tipi seçilmelidir.'),
  registrationDate: z.string().min(1, 'Tescil tarihi zorunludur.'), // Tarih formatı kontrol edilebilir
  ownerName: z.string().min(1, 'Araç sahibinin adı zorunludur.'),
});
export type VehicleForm = z.infer<typeof vehicleSchema>;
