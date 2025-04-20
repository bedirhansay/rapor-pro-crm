import { PackageType } from '@/features/packages/constant'

export const getTypeBadgeColor = (type: PackageType) => {
  switch (type) {
    case PackageType.BASIC:
      return 'bg-gray-100 text-gray-800'
    case PackageType.STANDARD:
      return 'bg-blue-100 text-blue-800'
    case PackageType.PREMIUM:
      return 'bg-purple-100 text-purple-800'
    case PackageType.ENTERPRISE:
      return 'bg-indigo-100 text-indigo-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}
