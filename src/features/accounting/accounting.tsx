'use client'

import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/dropdown'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowDownRight, ArrowUpRight, BadgeDollarSign, Calendar, Download, Filter, Plus, Wallet } from 'lucide-react'
import { useState } from 'react'
import { TransactionCategory, TransactionStatus, TransactionType, financialSummary, transactions } from './constant'

export function Accounting() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<TransactionType | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<TransactionCategory | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<TransactionStatus | null>(null)
  const [viewMode, setViewMode] = useState<'all' | 'income' | 'expense'>('all')

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      searchQuery === '' ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = !selectedType || transaction.type === selectedType
    const matchesCategory = !selectedCategory || transaction.category === selectedCategory
    const matchesStatus = !selectedStatus || transaction.status === selectedStatus
    const matchesViewMode =
      viewMode === 'all' ||
      (viewMode === 'income' && transaction.type === TransactionType.INCOME) ||
      (viewMode === 'expense' && transaction.type === TransactionType.EXPENSE)

    return matchesSearch && matchesType && matchesCategory && matchesStatus && matchesViewMode
  })

  const getStatusBadgeColor = (status: TransactionStatus) => {
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount)
  }

  return (
    <div className="space-y-6">
      <BreadcrumbNav pageName="accounting" />

      <div className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            {
              title: 'Toplam Gelir',
              icon: <BadgeDollarSign className="h-5 w-5 text-green-600" />,
              amount: financialSummary.totalIncome,
              color: 'text-green-600',
              subtitle: '+12.5% geçen aya göre',
            },
            {
              title: 'Toplam Gider',
              icon: <Wallet className="h-5 w-5 text-red-600" />,
              amount: financialSummary.totalExpense,
              color: 'text-red-600',
              subtitle: '-2.5% geçen aya göre',
            },
            {
              title: 'Net Gelir',
              icon: <ArrowUpRight className="h-5 w-5 text-blue-600" />,
              amount: financialSummary.netIncome,
              color: 'text-blue-600',
              subtitle: '+8.2% geçen aya göre',
            },
            {
              title: 'Bekleyen Ödemeler',
              icon: <Calendar className="h-5 w-5 text-yellow-600" />,
              amount: financialSummary.pendingPayments,
              color: 'text-yellow-600',
              subtitle: '5 bekleyen işlem',
            },
            {
              title: 'Aylık Yinelenen',
              icon: <ArrowDownRight className="h-5 w-5 text-purple-600" />,
              amount: financialSummary.monthlyRecurring,
              color: 'text-purple-600',
              subtitle: '8 yinelenen işlem',
            },
          ].map(({ title, icon, amount, color, subtitle }) => (
            <Card key={title} className="rounded-2xl border border-gray-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
                {icon}
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${color}`}>{formatCurrency(amount)}</div>
                <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader className="flex flex-col gap-4 pb-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-xl font-semibold text-gray-800">İşlemler</CardTitle>
              <div className="flex items-center gap-2">
                <Button className="rounded-lg">
                  <Download className="mr-2 h-4 w-4" /> Dışa Aktar
                </Button>
                <Button className="rounded-lg">
                  <Plus className="mr-2 h-4 w-4" /> Yeni İşlem
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Input
                placeholder="İşlem ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="max-w-[260px]"
              />
              <Dropdown>
                <DropdownButton as={Button} outline>
                  <Filter className="mr-2 h-4 w-4" /> {selectedType || 'İşlem Tipi'}
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedType(null)}>Tümü</DropdownItem>
                  {Object.values(TransactionType).map((type) => (
                    <DropdownItem key={type} onClick={() => setSelectedType(type)}>
                      {type}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownButton as={Button} outline>
                  <Filter className="mr-2 h-4 w-4" /> {selectedCategory || 'Kategori'}
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedCategory(null)}>Tümü</DropdownItem>
                  {Object.values(TransactionCategory).map((cat) => (
                    <DropdownItem key={cat} onClick={() => setSelectedCategory(cat)}>
                      {cat}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownButton as={Button} outline>
                  <Filter className="mr-2 h-4 w-4" /> {selectedStatus || 'Durum'}
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSelectedStatus(null)}>Tümü</DropdownItem>
                  {Object.values(TransactionStatus).map((status) => (
                    <DropdownItem key={status} onClick={() => setSelectedStatus(status)}>
                      {status}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Tabs value={viewMode} onValueChange={(val) => setViewMode(val as 'all' | 'income' | 'expense')}>
                <TabsList>
                  <TabsTrigger value="all">Tümü</TabsTrigger>
                  <TabsTrigger value="income">Gelir</TabsTrigger>
                  <TabsTrigger value="expense">Gider</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Tarih</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Referans</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Açıklama</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Kategori</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Ödeme Yöntemi</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600">Durum</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-600">Tutar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        {new Date(transaction.date).toLocaleDateString('tr-TR')}
                      </td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-800">{transaction.reference}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.description}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.category}</td>
                      <td className="px-4 py-3 text-gray-600">{transaction.paymentMethod}</td>
                      <td className="px-4 py-3">
                        <Badge className={getStatusBadgeColor(transaction.status)}>{transaction.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        <span
                          className={transaction.type === TransactionType.INCOME ? 'text-green-600' : 'text-red-600'}
                        >
                          {transaction.type === TransactionType.INCOME ? '+' : '-'}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
