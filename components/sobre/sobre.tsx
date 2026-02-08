import styles from "./sobre.module.css"

export function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.textContent} slide-left`}>
            <span className={styles.subtitle}>Sobre Nós</span>
            <h2 className={styles.title}>Cuidado e excelência em cada detalhe</h2>
            <p className={styles.description}>
              Nosso consultório foi pensado para oferecer um atendimento diferenciado, onde cada paciente é tratado de
              forma única. Acreditamos que um sorriso saudável vai além da estética – é qualidade de vida, autoestima e
              bem-estar. Com técnicas modernas e um ambiente acolhedor, trabalhamos para que sua experiência seja
              confortável e seus resultados, duradouros.
            </p>
          </div>

          <div className={`${styles.professionalCard} zoom-in anim-delay-1`}>
            <div className={styles.imageWrapper}>
              <img src="/images/jalimar-foto.jpeg" alt="Dra. Jalimar Martins - Cirurgiã-Dentista" loading="lazy" />
            </div>
            <div className={styles.info}>
              <h3>Dra. Jalimar Martins</h3>
              <p className={styles.specialty}>Especialista em Endodontia (UFF)</p>
              <p className={styles.bio}>
                Com formação sólida e atualização constante, a Dra. Jalimar atua nas áreas de Endodontia, DTM/ATM e Dor
                Orofacial, sempre com foco em um tratamento humanizado e individualizado para cada paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
