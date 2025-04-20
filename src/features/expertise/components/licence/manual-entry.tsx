export const LicenceManualEntry = () => {
  return (
    <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">Ad Soyad</label>
        <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">TC Kimlik No</label>
        <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Plaka</label>
        <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Telefon</label>
        <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 text-sm" />
      </div>
    </div>
  )
}
