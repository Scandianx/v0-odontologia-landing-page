"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const REVEAL_SELECTOR =
  ".zoom-in, .drop-in, .slide-left, .fade-in, .blur-in, .light-in, .skew-in, .elastic-in"

function registerRevealElements(observer: IntersectionObserver) {
  const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)

  for (const element of elements) {
    if (element.dataset.revealObserved === "1") continue
    element.dataset.revealObserved = "1"
    observer.observe(element)
  }
}

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add("scroll-reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const element = entry.target as HTMLElement
          element.classList.add("show")
          observer.unobserve(element)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    )

    registerRevealElements(observer)

    const mutationObserver = new MutationObserver(() => {
      registerRevealElements(observer)
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}

