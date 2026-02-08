import styles from "./service-card.module.css"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href?: string
}

export function ServiceCard({ title, description, image, href = "#" }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image || "/placeholder.svg"} alt={title} className={styles.image} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={href} className={styles.link}>
          Saiba mais
          <svg className={styles.linkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}
