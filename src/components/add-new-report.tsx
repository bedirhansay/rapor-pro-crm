'use client'

import { PlusIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export function AddNewReportButton() {
  return (
    <motion.a
      href="/new-reports"
      whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-3 text-white scheme-light shadow-[0px_4px_15px_rgba(255,255,255,0.2)] transition-all duration-300 ease-in-out hover:from-gray-800 hover:to-gray-600"
    >
      <PlusIcon className="h-6 w-6 text-gray-300 transition-colors duration-300 group-hover:text-white" />
      <span className="font-semibold">Yeni Rapor Ekle</span>
    </motion.a>
  )
}
