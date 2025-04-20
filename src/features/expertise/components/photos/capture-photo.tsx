import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useRef, useState } from 'react'
import Webcam from 'react-webcam'

const MAX_PHOTOS = 5

export function CapturePhoto() {
  const webcamRef = useRef<Webcam>(null)
  const [photos, setPhotos] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const capturePhoto = () => {
    if (photos.length >= MAX_PHOTOS) {
      setError('En fazla 5 fotoğraf çekebilirsiniz.')
      return
    }
    setError(null)
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setPhotos((prev) => [...prev, imageSrc])
    }
  }

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <Label className="block text-sm font-medium text-gray-700">Canlı Kamera</Label>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-lg border shadow-sm"
          />
          <Button onClick={capturePhoto} disabled={photos.length >= MAX_PHOTOS} className="w-full">
            Fotoğraf Çek
          </Button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="space-y-2">
          <Label className="block text-sm font-medium text-gray-700">Çekilen Fotoğraflar ({photos.length}/5)</Label>
          <div className="grid grid-cols-2 gap-4">
            {photos.map((src, index) => (
              <div key={index} className="group relative">
                <img src={src} alt={`photo-${index}`} className="w-full rounded border" />
                <button
                  onClick={() => removePhoto(index)}
                  className="absolute top-1 right-1 hidden rounded-full bg-red-600 p-1 text-xs text-white group-hover:block"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
