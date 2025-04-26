'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { useEffect } from 'react'
import { steps } from './constant'
import { useExpertiseStore } from './store/expertise-store'

// Step components will be imported here
import { AdditionalInfo } from './components/additional-info'
import { CustomerInfo } from './components/customer-info'
import { LicenceSection } from './components/licence/licence'
import Packages from './components/packages'
import { PhotoSection } from './components/photos/photo'
import { Preview } from './components/preview'
import Starter from './components/starter'
import { Stepper } from './components/stepper'
import VehicleCondition from './components/vehicle-condition/expertise'
const stepComponents = [
  Starter,
  LicenceSection,
  CustomerInfo,
  PhotoSection,
  Packages,
  VehicleCondition,
  AdditionalInfo,
  Preview,
]

export default function ExpertiseRoute() {
  const { currentStep, setCurrentStep, validateCurrentStep, isValid } = useExpertiseStore()

  useEffect(() => {
    validateCurrentStep()
  }, [currentStep, validateCurrentStep])

  const CurrentStepComponent = stepComponents[currentStep]

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
    if (currentStep < steps.length - 1 && isValid) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStart = () => {
    setCurrentStep(1)
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  if (currentStep === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <Starter onStart={handleStart} />
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Stepper currentStep={currentStep} />

      <CurrentStepComponent onStart={handleStart} currentStep={currentStep} />

      <div className="flex justify-between rounded-lg border p-4 shadow-md">
        <Button onClick={handleBack}>Geri</Button>
        <Button onClick={handleReset}>Sıfırla</Button>
        <Button onClick={handleNext}>{currentStep === steps.length - 1 ? 'Tamamla' : 'İleri'}</Button>
      </div>
    </div>
  )
}
