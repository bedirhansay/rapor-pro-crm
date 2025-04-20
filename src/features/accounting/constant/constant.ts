import { TransactionStatus } from '@/lib/utils/status-badge'

export enum TransactionType {
  INCOME = 'Gelir',
  EXPENSE = 'Gider',
  TRANSFER = 'Transfer',
}

export enum PaymentMethod {
  CASH = 'Nakit',
  CREDIT_CARD = 'Kredi Kartı',
  BANK_TRANSFER = 'Banka Transferi',
  CHECK = 'Çek',
}

export enum TransactionCategory {
  SALES = 'Satışlar',
  SALARY = 'Maaş Ödemeleri',
  RENT = 'Kira',
  UTILITIES = 'Faturalar',
  MARKETING = 'Pazarlama',
  MAINTENANCE = 'Bakım',
  OTHER = 'Diğer',
}

export interface Transaction {
  id: string
  date: string
  type: TransactionType
  category: TransactionCategory
  description: string
  amount: number
  paymentMethod: PaymentMethod
  status: TransactionStatus
  reference: string
  attachments?: string[]
}

export const transactions: Transaction[] = [
  {
    id: '1',
    date: '2024-03-15',
    type: TransactionType.INCOME,
    category: TransactionCategory.SALES,
    description: 'Paket satışı - Premium',
    amount: 1499.99,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    status: TransactionStatus.COMPLETED,
    reference: 'INV-2024-001',
  },
  {
    id: '2',
    date: '2024-03-14',
    type: TransactionType.EXPENSE,
    category: TransactionCategory.SALARY,
    description: 'Mart ayı maaş ödemeleri',
    amount: 12500.0,
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: TransactionStatus.COMPLETED,
    reference: 'SAL-2024-003',
  },
  {
    id: '3',
    date: '2024-03-13',
    type: TransactionType.EXPENSE,
    category: TransactionCategory.UTILITIES,
    description: 'Elektrik faturası',
    amount: 850.0,
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: TransactionStatus.PENDING,
    reference: 'UTIL-2024-002',
  },
  {
    id: '4',
    date: '2024-03-12',
    type: TransactionType.INCOME,
    category: TransactionCategory.SALES,
    description: 'Paket satışı - Standart',
    amount: 399.99,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    status: TransactionStatus.COMPLETED,
    reference: 'INV-2024-002',
  },
  {
    id: '5',
    date: '2024-03-11',
    type: TransactionType.EXPENSE,
    category: TransactionCategory.MARKETING,
    description: 'Google Ads ödemesi',
    amount: 750.0,
    paymentMethod: PaymentMethod.CREDIT_CARD,
    status: TransactionStatus.COMPLETED,
    reference: 'MKT-2024-001',
  },
]

export interface FinancialSummary {
  totalIncome: number
  totalExpense: number
  netIncome: number
  pendingPayments: number
  monthlyRecurring: number
}

export const financialSummary: FinancialSummary = {
  totalIncome: 45000.0,
  totalExpense: 28500.0,
  netIncome: 16500.0,
  pendingPayments: 3200.0,
  monthlyRecurring: 15000.0,
}
