import styles from "./service-card.module.css"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href?: string
  className?: string
  imageFit?: "cover" | "contain"
  imagePosition?: string
}

export function ServiceCard({
  title,
  description,
  image,
  href = "#",
  className = "",
  imageFit = "cover",
  imagePosition = "center",
}: ServiceCardProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#")

  return (
    <article className={`${styles.card} ${className}`.trim()}>
      <div className={styles.imageWrapper}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={styles.image}
          style={{ objectFit: imageFit, objectPosition: imagePosition }}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {isInternal ? (
          <Link href={href} className={styles.link}>
            Saiba mais
            <svg className={styles.linkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <a href={href} className={styles.link}>
            Saiba mais
            <svg className={styles.linkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </article>
  )
}
