import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'

export default function LicenceQrReader() {
  const [qrResult, setQrResult] = useState<string | null>(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      {
        fps: 10,
        qrbox: { width: 350, height: 350 },
      },
      false
    )

    scanner.render(
      (decodedText: string) => {
        console.log('✅ QR OKUNDU:', decodedText)
        setQrResult(decodedText)
        scanner.clear()
      },
      (error: string) => {
        console.warn('QR hata:', error)
      }
    )
  }, [])

  return (
    <div className="p-4">
      <h2 className="mb-4 text-center text-xl font-bold">Ruhsat QR Kodunu Okut</h2>
      <div id="qr-reader" className="mx-auto w-full max-w-sm" />

      {qrResult && (
        <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm whitespace-pre-wrap text-gray-800">
          <strong>📄 Okunan Veri:</strong>
          <pre className="mt-2">{qrResult}</pre>
        </div>
      )}
    </div>
  )
}
