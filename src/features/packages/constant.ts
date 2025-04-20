// Package status
export enum PackageStatus {
  ACTIVE = 'Aktif',
  INACTIVE = 'Pasif',
  DISCONTINUED = 'Sonlandırılmış',
}

// Package type
export enum PackageType {
  BASIC = 'Temel',
  STANDARD = 'Standart',
  PREMIUM = 'Premium',
  ENTERPRISE = 'Kurumsal',
}

// Package interface
export interface Package {
  id: string
  name: string
  type: PackageType
  status: PackageStatus
  price: number
  description: string
  features: string[]
  maxUsers: number
  maxBranches: number
  createdAt: string
  updatedAt: string
}

// Mock package data
export const packages: Package[] = [
  {
    id: '1',
    name: 'Temel Paket',
    type: PackageType.BASIC,
    status: PackageStatus.ACTIVE,
    price: 199,
    description: 'Küçük işletmeler için temel özellikler',
    features: ['Temel raporlama', 'Müşteri yönetimi', 'Basit analitik'],
    maxUsers: 5,
    maxBranches: 1,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'Standart Paket',
    type: PackageType.STANDARD,
    status: PackageStatus.ACTIVE,
    price: 399,
    description: 'Orta ölçekli işletmeler için gelişmiş özellikler',
    features: ['Gelişmiş raporlama', 'Müşteri yönetimi', 'Detaylı analitik', 'E-posta entegrasyonu'],
    maxUsers: 15,
    maxBranches: 3,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '3',
    name: 'Premium Paket',
    type: PackageType.PREMIUM,
    status: PackageStatus.ACTIVE,
    price: 799,
    description: 'Büyük işletmeler için premium özellikler',
    features: ['Premium raporlama', 'Gelişmiş müşteri yönetimi', 'AI destekli analitik', 'Tam entegrasyon'],
    maxUsers: 50,
    maxBranches: 10,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '4',
    name: 'Kurumsal Paket',
    type: PackageType.ENTERPRISE,
    status: PackageStatus.ACTIVE,
    price: 1499,
    description: 'Kurumsal şirketler için özel çözümler',
    features: [
      'Özel raporlama',
      'Kurumsal müşteri yönetimi',
      'Özelleştirilebilir analitik',
      'Tam entegrasyon',
      '7/24 destek',
    ],
    maxUsers: 100,
    maxBranches: 25,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '5',
    name: 'Eski Standart Paket',
    type: PackageType.STANDARD,
    status: PackageStatus.DISCONTINUED,
    price: 299,
    description: 'Eski standart paket özellikleri',
    features: ['Temel raporlama', 'Müşteri yönetimi', 'Basit analitik'],
    maxUsers: 10,
    maxBranches: 2,
    createdAt: '2023-01-01',
    updatedAt: '2023-12-31',
  },
]
