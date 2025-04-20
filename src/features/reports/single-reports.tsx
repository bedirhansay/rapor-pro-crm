'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  DollarSign,
  Download,
  Eye,
  MapPin,
  MoreVertical,
  Share2,
  XCircle,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { reports } from './contant'

interface SingleReportProps {
  id: string
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let event = reports.find((r) => r.id === parseInt(params.id))

  return {
    title: event?.name,
  }
}

export default function SingleReport({ id }: SingleReportProps) {
  const params = useParams()
  const reportId = params.id ? parseInt(params.id as string, 10) : null
  const report = reportId !== null ? reports.find((r) => r.id === reportId) : null

  if (!report) {
    return (
      <div className="flex h-[450px] items-center justify-center">
        <p className="text-lg text-gray-500">Rapor bulunamadı</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/reports" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">{report.name}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-1.5 h-4 w-4" />
            İndir
          </Button>
          <Button>
            <Share2 className="mr-1.5 h-4 w-4" />
            Paylaş
          </Button>
          <Dropdown>
            <DropdownButton as={Button}>
              <MoreVertical className="h-4 w-4" />
            </DropdownButton>
            <DropdownMenu>
              <DropdownItem>Düzenle</DropdownItem>
              <DropdownItem>Sil</DropdownItem>
              <DropdownItem>Arşivle</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Toplam Gelir</p>
              <p className="text-2xl font-semibold text-gray-900">{report.totalRevenue}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Satılan Bilet</p>
              <p className="text-2xl font-semibold text-gray-900">{report.ticketsSold}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Sayfa Görüntülenme</p>
              <p className="text-2xl font-semibold text-gray-900">{report.pageViews}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-amber-100 p-3">
              <Calendar className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Durum</p>
              <Badge
                className={report.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
              >
                {report.status === 'Tamamlandı' ? (
                  <span className="flex items-center">
                    <CheckCircle className="mr-1.5 h-4 w-4 text-green-500" />
                    {report.status}
                  </span>
                ) : (
                  <span className="flex items-center">
                    <XCircle className="mr-1.5 h-4 w-4 text-red-500" />
                    {report.status}
                  </span>
                )}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-medium text-gray-900">Rapor Detayları</h2>
        <Divider className="my-4" />
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Tarih</h3>
            <div className="mt-1 flex items-center">
              <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-900">
                {report.date} - {report.time}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Konum</h3>
            <div className="mt-1 flex items-center">
              <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
              <p className="text-sm text-gray-900">{report.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
