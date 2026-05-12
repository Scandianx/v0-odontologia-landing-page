import styles from "./service-detail.module.css"
import { Button } from "@/components/button/button"
import Link from "next/link"

export interface ServiceDetailProps {
  title: string
  subtitle: string
  heroImage: string
  heroImageFit?: "cover" | "contain"
  heroImagePosition?: string
  description: string
  benefits: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
  ctaText?: string
  ctaLink?: string
}

export function ServiceDetail({
  title,
  subtitle,
  heroImage,
  heroImageFit = "cover",
  heroImagePosition = "center",
  description,
  benefits,
  faqs,
  ctaText = "Agendar Consulta",
  ctaLink = "/#contato",
}: ServiceDetailProps) {
  return (
    <div className={styles.serviceDetail}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src={heroImage || "/placeholder.svg"}
          alt={title}
          className={styles.heroImage}
          style={{ objectFit: heroImageFit, objectPosition: heroImagePosition }}
        />
        <div className={`${styles.heroContent} reveal`}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className={`${styles.description} reveal`}>
        <div className="container">
          <div className={styles.descriptionContent}>
            <h2 className={styles.sectionTitle}>Sobre o Tratamento</h2>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.benefits} reveal`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Benefícios</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitNumber}>{String(index + 1).padStart(2, "0")}</div>
                <p className={styles.benefitText}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faq} reveal`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  {faq.question}
                  <span className={styles.faqIcon}>+</span>
                </summary>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={`${styles.ctaContent} reveal`}>
            <h2 className={styles.ctaTitle}>Pronto para transformar seu sorriso?</h2>
            <p className={styles.ctaText}>Agende sua avaliação e descubra como podemos ajudar você.</p>
            <Link href={ctaLink}>
              <Button variant="primary" size="large">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
