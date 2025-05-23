"use client"

import { useEffect } from 'react'

/**
 * Component that adds smooth scrolling behavior to the entire application
 * and handles anchor links for smooth navigation
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          
          const targetElement = document.querySelector(href)
          if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
            
            // Update URL hash without causing a jump
            if (window.history && window.history.pushState) {
              window.history.pushState(null, '', href)
            }
          }
        }
      }
    }

    // Add event listener for click events
    document.addEventListener('click', handleAnchorClick)

    // Cleanup function
    return () => {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = ''
      }
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  // This is a utility component with no visual output
  return null
} 