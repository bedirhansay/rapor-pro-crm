import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Calendar, CheckCircle, ChevronDown, DollarSign, Edit, Eye, MapPin, Search, XCircle } from 'lucide-react'
import Link from 'next/link'
import { reports } from './contant'

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Raporlar</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Rapor ara..." className="w-64 pl-9" />
          </div>
          <Dropdown>
            <DropdownButton as={Button}>
              Sırala
              <ChevronDown className="ml-2 h-4 w-4" />
            </DropdownButton>
            <DropdownMenu>
              <DropdownItem>En yeni</DropdownItem>
              <DropdownItem>En eski</DropdownItem>
              <DropdownItem>En çok gelir</DropdownItem>
              <DropdownItem>En az gelir</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Rapor Adı
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Durum
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Toplam Gelir
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Tarih
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Konum
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                Sayfa Görüntülenme
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
              >
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                        <span className="font-medium text-indigo-600">{report.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <Link
                        href={`/reports/${report.id}`}
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
                      >
                        {report.name}
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    className={
                      report.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }
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
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Badge className="bg-blue-100 text-blue-800">
                      <span className="flex items-center">
                        <DollarSign className="mr-1.5 h-4 w-4 text-blue-500" />
                        {report.totalRevenue}
                      </span>
                    </Badge>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1.5 h-4 w-4 text-gray-400" />
                    {report.date} - {report.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1.5 h-4 w-4 text-gray-400" />
                    {report.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-500">
                    <Eye className="mr-1.5 h-4 w-4 text-gray-400" />
                    {report.pageViews}
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                  <div className="flex items-center justify-end space-x-2">
                    <Link href={`/reports/${report.id}`} className="text-indigo-600 hover:text-indigo-900">
                      <Badge className="bg-indigo-100 text-indigo-800">
                        <span className="flex items-center">
                          <Eye className="mr-1.5 h-4 w-4 text-indigo-500" />
                          Görüntüle
                        </span>
                      </Badge>
                    </Link>
                    <Button>
                      <span className="flex items-center">
                        <Edit className="mr-1.5 h-4 w-4" />
                        Düzenle
                      </span>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
