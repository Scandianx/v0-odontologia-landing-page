import styles from "./diferenciais.module.css"

const diferenciais = [
  {
    title: "Atendimento Humanizado",
    description: "Cuidado individualizado e acolhedor, respeitando suas necessidades e expectativas.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Planejamento Individual",
    description: "Cada tratamento é único e pensado especificamente para você e seus objetivos.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Foco em Conforto",
    description: "Ambiente tranquilo e técnicas que priorizam seu bem-estar durante todo o procedimento.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Técnicas Modernas",
    description: "Equipamentos de última geração e protocolos atualizados para melhores resultados.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Estética Natural",
    description: "Resultados harmônicos que valorizam a beleza natural do seu sorriso.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Acompanhamento Contínuo",
    description: "Suporte durante e após o tratamento para garantir resultados duradouros.",
    icon: (
      <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export function Diferenciais() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={`${styles.header} fade-in`}>
          <span className={styles.subtitle}>Por que nos escolher</span>
          <h2 className={styles.title}>Nossos Diferenciais</h2>
        </header>

        <div className={styles.grid}>
          {diferenciais.map((item, index) => (
            <div key={item.title} className={`${styles.item} skew-in anim-delay-${(index % 4) + 1}`.trim()}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
