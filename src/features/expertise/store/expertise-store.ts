import { create } from 'zustand'
import { ExpertiseFormData, initialFormData } from '../constant'

interface ExpertiseStore {
  currentStep: number
  formData: ExpertiseFormData
  isValid: boolean
  setCurrentStep: (step: number) => void
  updateFormData: (data: Partial<ExpertiseFormData>) => void
  validateCurrentStep: () => boolean
  resetForm: () => void
}

export const useExpertiseStore = create<ExpertiseStore>((set, get) => ({
  currentStep: 0,
  formData: initialFormData,
  isValid: false,

  setCurrentStep: (step) => set({ currentStep: step }),

  updateFormData: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    })),

  validateCurrentStep: () => {
    const { currentStep, formData } = get()
    let isValid = false

    switch (currentStep) {
      case 0: // Customer Info
        isValid = !!(formData.customerInfo.name && formData.customerInfo.phone && formData.customerInfo.licensePlate)
        break

      case 1: // Photos
        isValid = Object.keys(formData.photos).length >= 3 // En az 3 fotoğraf gerekli
        break

      case 2: // Vehicle Info
        isValid = !!(
          formData.vehicleInfo.brand &&
          formData.vehicleInfo.model &&
          formData.vehicleInfo.year &&
          formData.vehicleInfo.mileage
        )
        break

      case 3: // Parts Status
        isValid = formData.partsStatus.every((part) => part.status)
        break

      case 4: // Additional Info
        isValid = true // Opsiyonel alan
        break

      case 5: // Preview
        isValid = true // Tüm adımlar tamamlandıysa zaten geçerli
        break

      default:
        isValid = false
    }

    set({ isValid })
    return isValid
  },

  resetForm: () => set({ currentStep: 0, formData: initialFormData, isValid: false }),
}))
