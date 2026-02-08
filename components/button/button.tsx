"use client"

import styles from "./button.module.css"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  ariaLabel?: string
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  href,
  target,
  rel,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size !== "medium" ? styles[size] : "",
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
