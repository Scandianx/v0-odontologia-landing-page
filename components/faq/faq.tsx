"use client"

import { useState } from "react"
import styles from "./faq.module.css"

const faqItems = [
  {
    question: "Como funciona o aparelho autoligado?",
    answer:
      "O aparelho autoligado usa bráquetes sem borrachinhas, com menor atrito e forças mais leves. Isso melhora o conforto, facilita a higiene e pode otimizar as fases iniciais do alinhamento.",
  },
  {
    question: "Quando procurar avaliação para DTM/ATM?",
    answer:
      "Procure avaliação ao sentir dor na face, mandíbula ou ouvido, estalos, travamento, cefaleias frequentes ou dificuldade para abrir a boca. Esses sintomas podem estar ligados à disfunção temporomandibular.",
  },
  {
    question: "Tratamento de canal dói?",
    answer:
      "Com técnicas anestésicas modernas e instrumentos atuais, o tratamento de canal é confortável. O objetivo é justamente remover a infecção e aliviar a dor.",
  },
  {
    question: "Clareamento ou facetas: qual escolher?",
    answer:
      "O clareamento é indicado para melhorar a cor mantendo a forma natural dos dentes. Facetas e lentes são indicadas quando também é necessário corrigir forma, proporção ou pequenas assimetrias.",
  },
  {
    question: "Bruxismo sempre precisa tratar?",
    answer:
      "Nem todo bruxismo exige intervenção imediata, mas é essencial avaliar. O tratamento é indicado quando há desgaste dental, dor muscular, sobrecarga articular, fraturas ou impacto no sono.",
  },
  {
    question: "Como cuidar de próteses e coroas?",
    answer:
      "A higiene deve ser feita diariamente, como nos dentes naturais, com escovação e fio dental apropriado. Consultas periódicas são importantes para ajustes e maior longevidade.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="duvidas" className={styles.section}>
      <div className={styles.container}>
        <header className={`${styles.header} fade-in`}>
          <span className={styles.subtitle}>Dúvidas frequentes</span>
          <h2 className={styles.title}>Perguntas e respostas</h2>
        </header>

        <div className={styles.accordion}>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.item} fade-in anim-delay-${(index % 4) + 1} ${openIndex === index ? styles.open : ""}`}
            >
              <button
                className={styles.trigger}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                {item.question}
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                className={styles.content}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
