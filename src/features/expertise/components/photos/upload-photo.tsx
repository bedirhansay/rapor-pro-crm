import { Label } from '@/components/ui/label'
import { useRef, useState } from 'react'

const MAX_UPLOAD = 5

export function UploadPhotos() {
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    if (files.length + images.length > MAX_UPLOAD) {
      setError(`En fazla ${MAX_UPLOAD} fotoğraf yükleyebilirsiniz.`)
      return
    }

    const newImages: string[] = []
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          newImages.push(event.target.result as string)
          if (newImages.length === files.length) {
            setImages((prev) => [...prev, ...newImages])
          }
        }
      }
      reader.readAsDataURL(file)
    })
    setError(null)
    fileInputRef.current!.value = ''
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="mt-4 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="upload" className="mt-4 text-sm font-medium text-gray-700">
          Fotoğraflar ({images.length}/{MAX_UPLOAD})
        </Label>

        {/* Gizli input */}
        <input
          id="upload"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Türkçeleştirilmiş özel stil kutu */}
        <div onClick={() => fileInputRef.current?.click()} className="flex w-full items-center justify-center">
          <label
            htmlFor="upload"
            className="flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <svg
                className="mb-4 h-8 w-8 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4-4m0 0l4 4m-4-4v12m16-8a4 4 0 01-4 4H6a4 4 0 01-4-4V8a4 4 0 014-4h6l2 2h6a4 4 0 014 4z"
                />
              </svg>
              <p className="mb-1 text-sm font-medium text-gray-600">
                <span className="font-semibold">Tıklayarak fotoğraf yükleyin</span> veya sürükleyip bırakın
              </p>
              <p className="text-xs text-gray-500">JPG, PNG veya GIF (maks. 5 fotoğraf)</p>
            </div>
          </label>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded border">
              <img src={src} alt={`upload-${index}`} className="h-32 w-full object-cover" />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 hidden rounded-full bg-red-600 p-1 text-xs text-white group-hover:block"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
