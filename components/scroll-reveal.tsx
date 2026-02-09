"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const REVEAL_SELECTOR =
  ".zoom-in, .drop-in, .slide-left, .fade-in, .blur-in, .light-in, .skew-in, .elastic-in"

function revealElementsInView(observer: IntersectionObserver) {
  const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
  const viewHeight = window.innerHeight || document.documentElement.clientHeight

  for (const element of elements) {
    if (element.classList.contains("show")) continue
    const rect = element.getBoundingClientRect()
    const inView = rect.bottom > 0 && rect.top < viewHeight * 0.9
    if (!inView) continue
    element.classList.add("show")
    observer.unobserve(element)
  }
}

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const animated = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            const element = entry.target as HTMLElement
            const rect = element.getBoundingClientRect()
            return { element, rect }
          })
          .sort((a, b) => {
            const topDelta = a.rect.top - b.rect.top
            if (Math.abs(topDelta) > 8) return topDelta
            return a.rect.left - b.rect.left
          })

        for (const item of visible) {
          item.element.classList.add("show")
          observer.unobserve(item.element)
        }
      },
      { threshold: 0.2 },
    )

    animated.forEach((element) => observer.observe(element))
    revealElementsInView(observer)

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}
