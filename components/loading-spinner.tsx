"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        <motion.div
          className="w-16 h-16 border-4 border-cyan-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-t-4 border-cyan-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

