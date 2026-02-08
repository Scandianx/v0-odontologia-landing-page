import styles from "./service-detail.module.css"
import { Button } from "@/components/button/button"
import Link from "next/link"

export interface ServiceDetailProps {
  title: string
  subtitle: string
  heroImage: string
  description: string
  benefits: string[]
  images: Array<{
    src: string
    alt: string
  }>
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
  description,
  benefits,
  images,
  faqs,
  ctaText = "Agendar Consulta",
  ctaLink = "#contato",
}: ServiceDetailProps) {
  return (
    <div className={styles.serviceDetail}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img src={heroImage || "/placeholder.svg"} alt="" className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Inicio</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <Link href="/#servicos" className={styles.breadcrumbLink}>Servicos</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>{title}</span>
          </nav>

          <div className={styles.heroLabel}>
            <span className={styles.heroLabelLine} aria-hidden="true" />
            <span>Especialidade</span>
          </div>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          <div className={styles.heroCta}>
            <Button href={ctaLink} variant="primary" size="large">
              {ctaText}
            </Button>
            <Button href="https://wa.me/5522999956389" target="_blank" rel="noopener noreferrer" variant="secondary" size="large">
              WhatsApp
            </Button>
          </div>
        </div>

        <div className={styles.heroScrollHint} aria-hidden="true">
          <span className={styles.heroScrollLine} />
        </div>
      </section>

      {/* Description Section */}
      <section className={styles.description}>
        <div className="container">
          <div className={styles.descriptionContent}>
            <h2 className={styles.sectionTitle}>Sobre o Tratamento</h2>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
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

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <div className={styles.galleryGrid}>
            {images.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
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
          <div className={styles.ctaContent}>
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
