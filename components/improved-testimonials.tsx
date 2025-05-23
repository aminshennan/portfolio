"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  title: string
  image: string
  company?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "John's data science expertise transformed our business. His predictive models increased our revenue by 25% in just six months.",
    author: "Sarah Johnson",
    title: "CTO",
    company: "TechInnovate",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with John was a game-changer for our team. His ability to translate complex data into actionable insights is unparalleled.",
    author: "Michael Chen",
    title: "Product Manager",
    company: "DataDrive",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "John's machine learning solutions helped us identify patterns we never knew existed in our customer data, leading to a complete revamp of our strategy.",
    author: "Emily Rodriguez",
    title: "Marketing Director",
    company: "GrowthMetrics",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function ImprovedTestimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  useEffect(() => {
    if (!isAutoPlaying || !inView) return

    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [current, isAutoPlaying, inView])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div ref={ref} className="relative py-12">
      {/* Background elements */}
      <div className="absolute top-0 left-0 opacity-5">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 transform rotate-180">
        <Quote className="w-32 h-32 text-pink-500" />
      </div>

      {/* Testimonial slider */}
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[300px] md:h-[250px] overflow-hidden">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === current && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border"
                  >
                    <div className="md:w-1/3 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-500 rounded-full opacity-75 blur-sm animate-pulse"></div>
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-border relative z-10"
                        />
                      </div>
                    </div>

                    <div className="md:w-2/3 text-center md:text-left">
                      <Quote className="h-8 w-8 text-primary mb-2 mx-auto md:mx-0" />
                      <p className="text-foreground text-lg italic mb-4">{testimonial.quote}</p>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                        <p className="text-primary text-sm">
                          {testimonial.title}
                          {testimonial.company && <span> at {testimonial.company}</span>}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <motion.button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrent(index)
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-gradient-to-r from-primary to-pink-500 scale-125"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

