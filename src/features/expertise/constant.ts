export enum VehiclePartStatus {
  ORIGINAL = 'Orijinal',
  PAINTED = 'Boyalı',
  CHANGED = 'Değişen',
}

export enum TransmissionType {
  MANUAL = 'Manuel',
  AUTOMATIC = 'Otomatik',
  SEMI_AUTOMATIC = 'Yarı Otomatik',
}

export enum FuelType {
  GASOLINE = 'Benzin',
  DIESEL = 'Dizel',
  LPG = 'LPG',
  ELECTRIC = 'Elektrik',
  HYBRID = 'Hibrit',
}

export interface VehiclePart {
  id: string
  name: string
  status: VehiclePartStatus
}

export const vehicleParts: VehiclePart[] = [
  { id: 'hood', name: 'Kaput', status: VehiclePartStatus.ORIGINAL },
  { id: 'front_bumper', name: 'Ön Tampon', status: VehiclePartStatus.ORIGINAL },
  { id: 'front_right_fender', name: 'Sağ Ön Çamurluk', status: VehiclePartStatus.ORIGINAL },
  { id: 'front_left_fender', name: 'Sol Ön Çamurluk', status: VehiclePartStatus.ORIGINAL },
  { id: 'right_front_door', name: 'Sağ Ön Kapı', status: VehiclePartStatus.ORIGINAL },
  { id: 'left_front_door', name: 'Sol Ön Kapı', status: VehiclePartStatus.ORIGINAL },
  { id: 'right_rear_door', name: 'Sağ Arka Kapı', status: VehiclePartStatus.ORIGINAL },
  { id: 'left_rear_door', name: 'Sol Arka Kapı', status: VehiclePartStatus.ORIGINAL },
  { id: 'trunk', name: 'Bagaj', status: VehiclePartStatus.ORIGINAL },
  { id: 'roof', name: 'Tavan', status: VehiclePartStatus.ORIGINAL },
  { id: 'rear_bumper', name: 'Arka Tampon', status: VehiclePartStatus.ORIGINAL },
]

export interface ExpertiseFormData {
  // Step 1: Customer Info
  customerInfo: {
    name: string
    phone: string
    licensePlate: string
  }

  // Step 2: Photos
  photos: {
    front?: string
    rear?: string
    interior?: string
    engine?: string
    side?: string
  }

  // Step 3: Vehicle Info
  vehicleInfo: {
    brand: string
    model: string
    year: number
    mileage: number
    transmission: TransmissionType
    fuelType: FuelType
  }

  // Step 4: Parts Status
  partsStatus: VehiclePart[]

  // Step 5: Additional Info
  additionalInfo: {
    notes: string
    documents: string[]
  }
}

export const initialFormData: ExpertiseFormData = {
  customerInfo: {
    name: '',
    phone: '',
    licensePlate: '',
  },
  photos: {},
  vehicleInfo: {
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: 0,
    transmission: TransmissionType.MANUAL,
    fuelType: FuelType.GASOLINE,
  },
  partsStatus: vehicleParts,
  additionalInfo: {
    notes: '',
    documents: [],
  },
}

export const steps = [
  {
    id: 'customer-info',
    title: 'Expertise Başlangıç',
    description: 'Expertise başlangıç bilgilerini girin',
  },
  {
    id: 'customer-select',
    title: 'Araç Ruhsat Bilgileri',
    description: 'Araç ruhsat bilgilerini seçin',
  },
  {
    id: 'vehicle-info',
    title: 'Müşteri Bilgileri',
    description: 'Müşteri bilgilerini girin',
  },
  {
    id: 'photos',
    title: 'Fotoğraflar',
    description: 'Aracın fotoğraflarını çekin',
  },
  {
    id: 'packages',
    title: 'Paket Seçimi',
    description: 'Paket seçin',
  },

  {
    id: 'vehicle-condition',
    title: 'Araç Durumu',
    description: 'Araç durumunu belirleyin',
  },

  {
    id: 'additional-info',
    title: 'Ek Bilgiler',
    description: 'Not ve belgeleri ekleyin',
  },
  {
    id: 'preview',
    title: 'Önizleme',
    description: 'Bilgileri kontrol edin ve onaylayın',
  },
]
