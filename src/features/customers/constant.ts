// Client status
export enum ClientStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
}

// Client type
export enum ClientType {
  INDIVIDUAL = 'INDIVIDUAL',
  CORPORATE = 'CORPORATE',
  GOVERNMENT = 'GOVERNMENT',
  NGO = 'NGO',
}

// Client data interface
export interface Client {
  id: string
  name: string
  email: string
  avatar: string
  type: ClientType
  status: ClientStatus
  company: string
  location: string
  phone: string
  lastTransaction: string
  totalTransactions: number
}

// Mock client data
export const clients: Client[] = [
  {
    id: '1',
    name: 'Mehmet Yılmaz',
    email: 'mehmet.yilmaz@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    type: ClientType.CORPORATE,
    status: ClientStatus.ACTIVE,
    company: 'Tech Solutions A.Ş.',
    location: 'İstanbul',
    phone: '+90 555 123 4567',
    lastTransaction: '2 gün önce',
    totalTransactions: 15,
  },
  {
    id: '2',
    name: 'Ayşe Kaya',
    email: 'ayse.kaya@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    type: ClientType.INDIVIDUAL,
    status: ClientStatus.ACTIVE,
    company: '-',
    location: 'Ankara',
    phone: '+90 555 234 5678',
    lastTransaction: '1 hafta önce',
    totalTransactions: 3,
  },
  {
    id: '3',
    name: 'Devlet Su İşleri',
    email: 'contact@dsi.gov.tr',
    avatar: 'https://i.pravatar.cc/150?img=3',
    type: ClientType.GOVERNMENT,
    status: ClientStatus.ACTIVE,
    company: 'Devlet Su İşleri',
    location: 'Ankara',
    phone: '+90 555 345 6789',
    lastTransaction: '3 gün önce',
    totalTransactions: 8,
  },
  {
    id: '4',
    name: 'Yeşil Dünya Derneği',
    email: 'info@yesildunya.org',
    avatar: 'https://i.pravatar.cc/150?img=4',
    type: ClientType.NGO,
    status: ClientStatus.PENDING,
    company: 'Yeşil Dünya Derneği',
    location: 'İzmir',
    phone: '+90 555 456 7890',
    lastTransaction: '1 ay önce',
    totalTransactions: 2,
  },
  {
    id: '5',
    name: 'Ali Öztürk',
    email: 'ali.ozturk@example.com',
    avatar: 'https://i.pravatar.cc/150?img=5',
    type: ClientType.INDIVIDUAL,
    status: ClientStatus.INACTIVE,
    company: '-',
    location: 'Antalya',
    phone: '+90 555 567 8901',
    lastTransaction: '2 ay önce',
    totalTransactions: 1,
  },
  {
    id: '6',
    name: 'Global Tech Ltd.',
    email: 'contact@globaltech.com',
    avatar: 'https://i.pravatar.cc/150?img=6',
    type: ClientType.CORPORATE,
    status: ClientStatus.ACTIVE,
    company: 'Global Tech Ltd.',
    location: 'İstanbul',
    phone: '+90 555 678 9012',
    lastTransaction: '1 gün önce',
    totalTransactions: 25,
  },
  {
    id: '7',
    name: 'Belediye Başkanlığı',
    email: 'info@belediye.gov.tr',
    avatar: 'https://i.pravatar.cc/150?img=7',
    type: ClientType.GOVERNMENT,
    status: ClientStatus.ACTIVE,
    company: 'Belediye Başkanlığı',
    location: 'Bursa',
    phone: '+90 555 789 0123',
    lastTransaction: '4 gün önce',
    totalTransactions: 12,
  },
  {
    id: '8',
    name: 'Eğitim Vakfı',
    email: 'iletisim@egitimvakfi.org',
    avatar: 'https://i.pravatar.cc/150?img=8',
    type: ClientType.NGO,
    status: ClientStatus.ACTIVE,
    company: 'Eğitim Vakfı',
    location: 'Ankara',
    phone: '+90 555 890 1234',
    lastTransaction: '5 gün önce',
    totalTransactions: 6,
  },
  {
    id: '9',
    name: 'Zeynep Demir',
    email: 'zeynep.demir@example.com',
    avatar: 'https://i.pravatar.cc/150?img=9',
    type: ClientType.INDIVIDUAL,
    status: ClientStatus.ACTIVE,
    company: '-',
    location: 'İzmir',
    phone: '+90 555 901 2345',
    lastTransaction: '1 hafta önce',
    totalTransactions: 4,
  },
  {
    id: '10',
    name: 'Tech Innovations Inc.',
    email: 'contact@techinnovations.com',
    avatar: 'https://i.pravatar.cc/150?img=10',
    type: ClientType.CORPORATE,
    status: ClientStatus.PENDING,
    company: 'Tech Innovations Inc.',
    location: 'İstanbul',
    phone: '+90 555 012 3456',
    lastTransaction: '2 hafta önce',
    totalTransactions: 18,
  },
]
