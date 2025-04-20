import { getEvent, getEventOrders } from '@/data'
import SingleReport from '@/features/reports/single-reports'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  let event = await getEvent(params.id)

  return {
    title: event?.name,
  }
}

export default async function Event({ params }: { params: { id: string } }) {
  let event = await getEvent(params.id)
  let orders = await getEventOrders(params.id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <SingleReport id={params.id} />
    </>
  )
}
