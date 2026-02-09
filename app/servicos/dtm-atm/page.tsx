import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function DtmAtmPage() {
  const serviceData = {
    title: "DTM / Dor Orofacial / ATM",
    subtitle: "Tratamento especializado para dores na face e articulação temporomandibular",
    heroImage: withBasePath("/jaw-pain-facial-massage-therapy-professional-healt.png"),
    description:
      "A DTM (Disfunção Temporomandibular) afeta a articulação que conecta a mandíbula ao crânio e os músculos faciais. Muitas vezes confundida com cefaleia, sinusite ou dor de ouvido, a DTM pode causar desconforto significativo no dia a dia. Realizamos avaliação completa da articulação temporomandibular, músculos mastigatórios e padrões oclusais para identificar a causa da dor e propor o tratamento mais adequado, que pode incluir placas miorrelaxantes, ajustes oclusais e orientações posturais.",
    benefits: [
      "Alívio de dores de cabeça e enxaquecas relacionadas à ATM",
      "Redução de dores faciais e na mandíbula",
      "Tratamento de estalos e travamentos da articulação",
      "Melhora da qualidade do sono",
      "Diminuição de zumbidos no ouvido relacionados à DTM",
      "Correção de hábitos parafuncionais prejudiciais",
    ],
    faqs: [
      {
        question: "Quais são os sintomas da DTM?",
        answer:
          "Os sintomas incluem dor na face, mandíbula ou ouvido, dificuldade para abrir ou fechar a boca, estalos ao mastigar, dores de cabeça frequentes, zumbido no ouvido e até dor no pescoço e ombros.",
      },
      {
        question: "Como é feito o diagnóstico?",
        answer:
          "O diagnóstico é feito através de exame clínico detalhado da articulação, músculos faciais, avaliação da oclusão e, quando necessário, exames complementares como radiografias e ressonância magnética.",
      },
      {
        question: "O tratamento é demorado?",
        answer:
          "O tempo de tratamento varia conforme a gravidade do caso. Muitos pacientes experimentam alívio significativo nas primeiras semanas, mas o tratamento completo pode levar de 3 a 6 meses.",
      },
      {
        question: "A placa miorrelaxante precisa ser usada sempre?",
        answer:
          "Inicialmente, a placa é usada durante a noite e em momentos de estresse. Com a melhora dos sintomas e mudança de hábitos, o uso pode ser reduzido gradualmente conforme orientação profissional.",
      },
    ],
    ctaText: "Agende sua Avaliação",
    ctaLink: "/#contato",
  }

  return (
    <>
      <Header />
      <main>
        <ServiceDetail {...serviceData} />
      </main>
      <Footer />
    </>
  )
}
