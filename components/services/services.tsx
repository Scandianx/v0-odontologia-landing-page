import styles from "./services.module.css"
import { ServiceCard } from "../service-card/service-card"

const services = [
  {
    title: "Ortodontia com Aparelho Autoligado",
    description:
      "Tratamento ortodôntico com mais conforto, melhor higienização, resultados previsíveis e menos emergências ao longo do tratamento.",
    image: "/images/modern-dental-braces-orthodontic-treatment-close-u.png",
    href: "/servicos/ortodontia",
  },
  {
    title: "DTM / Dor Orofacial / ATM",
    description:
      "Avaliação e tratamento de dores na região da face, mandíbula e articulação. Sintomas muitas vezes confundidos com cefaleia ou sinusite.",
    image: "/images/jaw-pain-facial-massage-therapy-professional-healt.png",
    href: "/servicos/dtm-atm",
  },
  {
    title: "Endodontia (Tratamento de Canal)",
    description:
      "Preservação do dente natural com técnicas modernas e seguras. Procedimento confortável que elimina a dor e salva seu dente.",
    image: "/images/dental-root-canal-treatment-modern-equipment-profe.png",
    href: "/servicos/endodontia",
  },
  {
    title: "Estética do Sorriso",
    description:
      "Clareamento dental supervisionado e lentes de contato com resultado natural. Transformação do sorriso com planejamento personalizado.",
    image: "/images/beautiful-white-smile-teeth-whitening-before-and-a.png",
    imageFit: "contain",
    href: "/servicos/estetica",
  },
  {
    title: "Bruxismo",
    description:
      "Diagnóstico e tratamento do bruxismo do sono e da vigília. Avaliação de desgaste dental, dor e risco de fraturas.",
    image: "/images/dental-night-guard-bruxism-treatment-oral-health-d.png",
    href: "/servicos/bruxismo",
  },
  {
    title: "Reabilitação Oral",
    description:
      "Próteses e coroas para restaurar função, estética e saúde bucal. Acompanhamento contínuo para manutenção adequada.",
    image: "/images/dental-crown-prosthesis-oral-rehabilitation-modern.jpeg",
    imageFit: "contain",
    href: "/servicos/reabilitacao-oral",
  },
]

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <header className={`${styles.header} fade-in`}>
          <span className={styles.subtitle}>Nossos Serviços</span>
          <h2 className={styles.title}>Cuidados especializados para você</h2>
          <p className={styles.description}>
            Oferecemos tratamentos odontológicos completos com foco em qualidade, conforto e resultados naturais.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
              imageFit={service.imageFit}
              className={`zoom-in anim-delay-${(index % 4) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
