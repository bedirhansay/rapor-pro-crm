import { ArrowDownCircleIcon, ArrowPathIcon, ArrowUpCircleIcon } from '@heroicons/react/20/solid'

export const navigation = [
  { name: 'Ana Sayfa', href: '#' },
  { name: 'Faturalar', href: '#' },
  { name: 'Müşteriler', href: '#' },
  { name: 'Giderler', href: '#' },
]

export const secondaryNavigation = [
  { name: 'Son 7 gün', href: '#', current: true },
  { name: 'Son 30 gün', href: '#', current: false },
  { name: 'Tüm zamanlar', href: '#', current: false },
]

export const stats = [
  { name: 'Gelir', value: '₺405.091,00', change: '+%4,75', changeType: 'positive' },
  { name: 'Gecikmiş faturalar', value: '₺12.787,00', change: '+%54,02', changeType: 'negative' },
  { name: 'Bekleyen faturalar', value: '₺245.988,00', change: '-%1,39', changeType: 'positive' },
  { name: 'Giderler', value: '₺30.156,00', change: '+%10,18', changeType: 'negative' },
]

export const statuses = {
  Ödendi: 'text-green-700 bg-green-50 ring-green-600/20',
  Çekildi: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Gecikmiş: 'text-red-700 bg-red-50 ring-red-600/10',
}

export const days = [
  {
    date: 'Bugün',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '₺7.600,00 TL',
        tax: '₺500,00',
        status: 'Ödendi',
        client: 'Ahmet Yılmaz',
        description: 'BMW 320i Motor Bakımı',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '₺10.000,00 TL',
        status: 'Çekildi',
        client: 'Mehmet Demir',
        description: 'Araç Parça Alımı',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '₺2.000,00 TL',
        tax: '₺130,00',
        status: 'Gecikmiş',
        client: 'Ayşe Kaya',
        description: 'Mercedes C200 Fren Sistemi',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Dün',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '₺14.000,00 TL',
        tax: '₺900,00',
        status: 'Ödendi',
        client: 'Ali Öztürk',
        description: 'Audi A4 Şanzıman Tamiri',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]

export const clients = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    imageUrl: 'https://tailwindui.com/plus-assets/img/logos/48x48/tuple.svg',
    lastInvoice: { date: '13 Aralık 2022', dateTime: '2022-12-13', amount: '₺2.000,00', status: 'Gecikmiş' },
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    imageUrl: 'https://tailwindui.com/plus-assets/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: '22 Ocak 2023', dateTime: '2023-01-22', amount: '₺14.000,00', status: 'Ödendi' },
  },
  {
    id: 3,
    name: 'Ayşe Kaya',
    imageUrl: 'https://tailwindui.com/plus-assets/img/logos/48x48/reform.svg',
    lastInvoice: { date: '23 Ocak 2023', dateTime: '2023-01-23', amount: '₺7.600,00', status: 'Ödendi' },
  },
]

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
