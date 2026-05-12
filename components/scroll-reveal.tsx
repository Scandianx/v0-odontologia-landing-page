"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal")
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return null
}
