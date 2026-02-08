import styles from "./hero.module.css"
import { Button } from "../button/button"

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.headline}>
            Seu sorriso merece <span className={styles.headlineAccent}>cuidado especial</span>
          </h1>
          <p className={styles.subtitle}>
            Odontologia humanizada com foco em conforto, estética natural e resultados que transformam. Cada tratamento
            é planejado de forma individual para você.
          </p>

          <div className={styles.ctaGroup}>
            <Button
              href="https://wa.me/5522999956389"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
            >
              Agendar Consulta
            </Button>
            <Button href="#servicos" variant="secondary" size="large">
              Ver Serviços
            </Button>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Atendimento acolhedor</span>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Planejamento individual</span>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Foco em conforto</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/images/consultorio-jalimar.jpeg"
            alt="Interior do consultório odontológico Dra. Jalimar Martins com equipamentos modernos"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
