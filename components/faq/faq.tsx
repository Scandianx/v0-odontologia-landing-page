"use client"

import { useState } from "react"
import styles from "./faq.module.css"

const faqItems = [
  {
    question: "Como funciona o aparelho autoligado?",
    answer:
      "O aparelho autoligado utiliza brackets com um mecanismo de abertura e fechamento próprio, dispensando o uso de borrachinhas. Isso resulta em menos atrito, maior conforto, melhor higienização e intervalos maiores entre as consultas. O tratamento tende a ser mais rápido e com menos emergências.",
  },
  {
    question: "Quando procurar avaliação para DTM/ATM?",
    answer:
      "Procure avaliação se você apresenta dores na face, mandíbula ou ouvido, dificuldade para abrir ou fechar a boca, estalos ou ruídos ao mastigar, dores de cabeça frequentes ou sensação de travamento da mandíbula. Muitos desses sintomas são confundidos com cefaleia, sinusite ou dor de ouvido.",
  },
  {
    question: "Tratamento de canal dói?",
    answer:
      "Com as técnicas modernas e anestesia adequada, o tratamento de canal é um procedimento confortável. Na verdade, ele serve justamente para aliviar a dor causada pela inflamação ou infecção no interior do dente. A maioria dos pacientes relata muito mais conforto após o procedimento do que antes.",
  },
  {
    question: "Clareamento x lentes: qual escolher?",
    answer:
      "O clareamento é indicado para quem deseja clarear os dentes mantendo sua forma natural. Já as lentes de contato dental são indicadas quando há necessidade de corrigir formato, tamanho ou pequenos desalinhamentos, além de clarear. A escolha ideal depende de uma avaliação das suas expectativas e condições dentárias.",
  },
  {
    question: "Bruxismo sempre precisa tratar?",
    answer:
      "Nem todo bruxismo causa problemas, mas é importante avaliar. O tratamento é indicado quando há desgaste dental, dor muscular ou articular, fraturas de dentes ou restaurações, ou quando o hábito afeta a qualidade do sono. A avaliação profissional determina a necessidade e o tipo de tratamento.",
  },
  {
    question: "Como cuidar de próteses e coroas?",
    answer:
      "A higienização deve ser feita como nos dentes naturais, com escovação após as refeições e uso de fio dental. Evite alimentos muito duros ou pegajosos que possam danificar a prótese. Consultas regulares são essenciais para verificar a adaptação e fazer ajustes quando necessário.",
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
        <header className={styles.header}>
          <span className={styles.subtitle}>Dúvidas Frequentes</span>
          <h2 className={styles.title}>Perguntas e Respostas</h2>
        </header>

        <div className={styles.accordion}>
          {faqItems.map((item, index) => (
            <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ""}`}>
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
