import { useMutation, useQuery } from '@tanstack/react-query'

import { TestPackagesApiFactory } from '@/apis/rapor-pro-api'
import { queryClient } from '@/lib/providers/provider'
import { packageQueryKeys } from './keys'

import { toast } from 'react-hot-toast'

const TestPackagesApi = TestPackagesApiFactory()

const { ALL, LIST, SINGLE } = packageQueryKeys

export const usePackages = (parameters: any) => {
  return useQuery({
    queryKey: LIST(parameters),
    queryFn: () => TestPackagesApi.getTestPackages(parameters),
  })
}

export const useCreatePackage = () => {
  return useMutation({
    mutationFn: TestPackagesApi.createTestPackage,
    onMutate: () => {
      toast.loading('Ürün oluşturuluyor...')
    },
    onError: (error: any) => {
      toast.error('Hata!')
    },
    onSuccess: () => {
      toast.success('Başarılı!')

      queryClient.invalidateQueries({ queryKey: ALL })
    },
  })
}

export const useUpdatePackage = () => {
  return useMutation({
    mutationFn: TestPackagesApi.updateTestPackage,
    onMutate: () => {
      toast.loading('Ürün güncelleniyor...')
    },
    onError: (error: any) => {
      toast.error('Hata!')
    },
    onSuccess: () => {
      toast.success('Başarılı!')
      queryClient.invalidateQueries({ queryKey: ALL })
    },
  })
}

export const useDeletePackage = () => {
  return useMutation({
    mutationFn: TestPackagesApi.deleteTestPackage,
    onMutate: () => {
      toast.loading('Ürün siliniyor...')
    },
    onError: (error: any) => {
      toast.error('Hata!')
    },
    onSuccess: () => {
      toast.success('Başarılı!')

      queryClient.invalidateQueries({ queryKey: ALL })
    },
  })
}
