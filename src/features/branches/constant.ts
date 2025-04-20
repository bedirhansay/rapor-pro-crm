// Branch status
export enum BranchStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

// Branch type
export enum BranchType {
  HEAD_OFFICE = 'HEAD_OFFICE',
  REGIONAL = 'REGIONAL',
  BRANCH = 'BRANCH',
  SERVICE = 'SERVICE',
}

// Branch data interface
export interface Branch {
  id: string
  name: string
  code: string
  type: BranchType
  status: BranchStatus
  address: string
  city: string
  phone: string
  email: string
  manager: string
  employeeCount: number
  createdAt: string
}

// Mock branch data
export const branches: Branch[] = [
  {
    id: '1',
    name: 'Merkez Ofis',
    code: 'HQ001',
    type: BranchType.HEAD_OFFICE,
    status: BranchStatus.ACTIVE,
    address: 'Levent, Büyükdere Cad. No:123',
    city: 'İstanbul',
    phone: '+90 212 123 4567',
    email: 'merkez@raporpro.com',
    manager: 'Ahmet Yılmaz',
    employeeCount: 45,
    createdAt: '2023-01-15',
  },
  {
    id: '2',
    name: 'Ankara Bölge Ofisi',
    code: 'REG001',
    type: BranchType.REGIONAL,
    status: BranchStatus.ACTIVE,
    address: 'Çankaya, Atatürk Bulvarı No:456',
    city: 'Ankara',
    phone: '+90 312 234 5678',
    email: 'ankara@raporpro.com',
    manager: 'Mehmet Demir',
    employeeCount: 30,
    createdAt: '2023-02-20',
  },
  {
    id: '3',
    name: 'İzmir Şubesi',
    code: 'BR001',
    type: BranchType.BRANCH,
    status: BranchStatus.ACTIVE,
    address: 'Konak, Cumhuriyet Bulvarı No:789',
    city: 'İzmir',
    phone: '+90 232 345 6789',
    email: 'izmir@raporpro.com',
    manager: 'Ayşe Kaya',
    employeeCount: 25,
    createdAt: '2023-03-10',
  },
  {
    id: '4',
    name: 'Antalya Servis Merkezi',
    code: 'SVC001',
    type: BranchType.SERVICE,
    status: BranchStatus.ACTIVE,
    address: 'Muratpaşa, Fevzi Çakmak Cad. No:321',
    city: 'Antalya',
    phone: '+90 242 456 7890',
    email: 'antalya@raporpro.com',
    manager: 'Ali Öztürk',
    employeeCount: 15,
    createdAt: '2023-04-05',
  },
  {
    id: '5',
    name: 'Bursa Şubesi',
    code: 'BR002',
    type: BranchType.BRANCH,
    status: BranchStatus.PENDING,
    address: 'Nilüfer, Görükle Cad. No:654',
    city: 'Bursa',
    phone: '+90 224 567 8901',
    email: 'bursa@raporpro.com',
    manager: 'Zeynep Yıldız',
    employeeCount: 20,
    createdAt: '2023-05-15',
  },
  {
    id: '6',
    name: 'Adana Servis Merkezi',
    code: 'SVC002',
    type: BranchType.SERVICE,
    status: BranchStatus.INACTIVE,
    address: 'Seyhan, İnönü Cad. No:987',
    city: 'Adana',
    phone: '+90 322 678 9012',
    email: 'adana@raporpro.com',
    manager: 'Mustafa Şahin',
    employeeCount: 12,
    createdAt: '2023-06-20',
  },
]
