export enum TransactionStatus {
  COMPLETED = 'Tamamlandı',
  PENDING = 'Beklemede',
  CANCELLED = 'İptal Edildi',
}

export const getStatusBadgeColor = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.COMPLETED:
      return 'bg-green-100 text-green-800'
    case TransactionStatus.PENDING:
      return 'bg-yellow-100 text-yellow-800'
    case TransactionStatus.CANCELLED:
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
