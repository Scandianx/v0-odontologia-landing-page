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
  images: Array<{
    src: string
    alt: string
    fit?: "cover" | "contain"
    position?: string
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
  heroImageFit = "cover",
  heroImagePosition = "center",
  description,
  benefits,
  images,
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
        <div className={`${styles.heroContent} drop-in`}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className={`${styles.description} fade-in`}>
        <div className="container">
          <div className={styles.descriptionContent}>
            <h2 className={styles.sectionTitle}>Sobre o Tratamento</h2>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.benefits} fade-in`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Benefícios</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={`${styles.benefitCard} slide-left anim-delay-${(index % 4) + 1}`.trim()}>
                <div className={styles.benefitNumber}>{String(index + 1).padStart(2, "0")}</div>
                <p className={styles.benefitText}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={`${styles.gallery} fade-in`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Galeria</h2>
          <div className={styles.galleryGrid}>
            {images.map((image, index) => (
              <div key={index} className={`${styles.galleryItem} zoom-in anim-delay-${(index % 4) + 1}`.trim()}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={styles.galleryImage}
                  style={{ objectFit: image.fit ?? "cover", objectPosition: image.position ?? "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faq} fade-in`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={index} className={`${styles.faqItem} fade-in anim-delay-${(index % 4) + 1}`.trim()}>
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
          <div className={`${styles.ctaContent} elastic-in`}>
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
