import { AuthApiFactory } from '@/apis/rapor-pro-api'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { toast } from 'react-hot-toast'
import useLocalStorage from '../../lib/hook/use-local-storage'

const authApi = AuthApiFactory()

export const useLogin = () => {
  const [, setToken] = useLocalStorage<string | null>('raporProAuthToken', null)
  const router = useRouter()

  return useMutation({
    mutationFn: authApi.authenticate,
    onMutate: () => {
      const toastId = toast.loading('Kullanıcı Bilgileri Kontrol ediliyor.')
      return { toastId }
    },
    onError: (_, __, context) => {
      if (context?.toastId) toast.dismiss(context.toastId)
      toast.error('Giriş başarısız')
    },
    onSuccess: (data, _, context) => {
      if (context?.toastId) toast.dismiss(context.toastId)
      setToken(data?.data?.accessToken ?? null)
      toast.success('Giriş başarılı')

      setTimeout(() => {
        router.push('/')
      }, 1000)
    },
  })
}

export const useLogout = () => {
  const [, setToken] = useLocalStorage<string | null>('raporProAuthToken', null)
  const router = useRouter()
  router.push('/login')
  setToken(null)
}
