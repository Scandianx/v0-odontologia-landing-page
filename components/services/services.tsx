import styles from "./services.module.css"
import { ServiceCard } from "../service-card/service-card"
import { withBasePath } from "@/lib/paths"

const services = [
  {
    title: "DTM / Dor Orofacial / ATM",
    description:
      "Condição complexa da ATM e musculatura mastigatória, com foco em diagnóstico e controle da dor.",
    image: withBasePath("/jaw-pain-facial-massage-therapy-professional-healt.png"),
    href: "/servicos/dtm-atm",
  },
  {
    title: "Bruxismo",
    description:
      "Entenda e trate o bruxismo do sono e da vigília para proteger dentes e articulação.",
    image: withBasePath("/dental-night-guard-bruxism-treatment-oral-health-d.png"),
    href: "/servicos/bruxismo",
  },
  {
    title: "Ortodontia",
    description:
      "Bráquetes autoligáveis com mais conforto, melhor higiene e eficiência no alinhamento.",
    image: withBasePath("/modern-dental-braces-orthodontic-treatment-close-u.png"),
    href: "/servicos/ortodontia",
  },
  {
    title: "Estética do Sorriso",
    description:
      "Clareamento, lentes e facetas com planejamento para resultados naturais e duradouros.",
    image: withBasePath("/beautiful-white-smile-teeth-whitening-before-and-a.png"),
    imageFit: "contain",
    href: "/servicos/estetica",
  },
  {
    title: "Especialidades Integradas (Endodontia)",
    description:
      "Tratamento de canal e implantes com planejamento integrado para devolver segurança, função e confiança ao sorrir.",
    image: withBasePath("/dental-root-canal-treatment-modern-equipment-profe.png"),
    href: "/servicos/endodontia",
  },
  {
    title: "Reabilitação Oral Protética",
    description:
      "Próteses e coroas personalizadas para devolver função mastigatória e harmonia do sorriso.",
    image: withBasePath("/dental-crown-prosthesis-oral-rehabilitation-modern.jpeg"),
    imageFit: "contain",
    href: "/servicos/reabilitacao-oral",
  },
  
]

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <header className={`${styles.header} fade-in`}>
          <span className={styles.subtitle}>Sequência dos serviços</span>
          <h2 className={styles.title}>Cuidados especializados para você</h2>
          <p className={styles.description}>
            Conteúdo atualizado conforme o plano clínico e educativo da clínica.
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
