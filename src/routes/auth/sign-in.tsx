'use client'

import { Button } from '@/components/ui/button'
import { ErrorMessage } from '@/components/ui/error-message'
import { Input } from '@/components/ui/input'
import { Link } from '@/components/ui/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { LoginFormData, loginSchema } from './auth.schema'
import { useLogin } from './query'
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'info@coskunotoekspertiz.com',
      password: 'P@ssword123!?',
      rememberMe: false,
    },
  })

  const { mutate: login, isPending } = useLogin()

  const onSubmit = async (data: LoginFormData) => {
    login({
      authenticateRequest: {
        username: data.username,
        password: data.password,
      },
    })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12 dark:bg-zinc-800">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Hesabınıza giriş yapın
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-200">
                Email adresi
              </label>
              <div className="mt-2">
                <Input {...register('username')} type="text" />
                {errors.username && <ErrorMessage message={errors.username.message} />}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-200">
                Şifre
              </label>
              <div className="mt-2">
                <Input {...register('password')} type="password" />
                {errors.password && <ErrorMessage message={errors.password.message} />}
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
                <Checkbox {...register('rememberMe')} />
                <label htmlFor="remember-me" className="ml-3 block text-sm/6 text-gray-900 dark:text-gray-200">
                  Beni hatırla
                </label>
              </div> */}

              <div className="text-sm/6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Şifrenizi mi unuttunuz?
                </a>
              </div>
            </div>

            <div>
              <Button className="w-full" color="indigo" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Giriş yapılıyor...' : 'Giriş yap'}
              </Button>
            </div>
          </form>

          <div>
            <div className="relative mt-10">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-zinc-700" />
              </div>
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="bg-white px-6 text-gray-900 dark:bg-zinc-800 dark:text-gray-200">
                  Veya devam etmek için
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-zinc-700 dark:text-white dark:ring-zinc-600 dark:hover:bg-zinc-600"
              >
                <FcGoogle className="h-5 w-5" />
                <span>Google</span>
              </a>

              <Link
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-zinc-700 dark:text-white dark:ring-zinc-600 dark:hover:bg-zinc-600"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
          Üye değil misiniz?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            14 gün ücretsiz deneme
          </a>
        </p>
      </div>
    </div>
  )
}
