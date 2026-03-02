import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function DtmAtmPage() {
  const serviceData = {
    title: "DTM / Dor Orofacial / ATM",
    subtitle: "Condição complexa que envolve ATM, músculos mastigatórios e estruturas associadas",
    heroImage: withBasePath("/jaw-pain-facial-massage-therapy-professional-healt.png"),
    description:
      "A Disfunção Temporomandibular (DTM) não é apenas uma dor na mandíbula; é uma condição complexa que envolve a articulação (ATM), os músculos mastigatórios e estruturas associadas. O diagnóstico correto é o primeiro passo para o controle da dor e a recuperação da qualidade de vida. Muitas vezes, a DTM se manifesta através de sintomas que não se associam diretamente aos dentes, como cefaleias e cervicalgias, sintomas otológicos e limitação funcional ao abrir a boca e mastigar.",
    benefits: [
      "Alívio de dores crônicas",
      "Proteção da articulação (ATM)",
      "Redução de estalos e limitação funcional",
      "Melhora da mastigação",
      "Controle de zumbidos, tonturas e sensação de ouvido tampado",
      "Recuperação da qualidade de vida",
    ],
    faqs: [
      {
        question: "Quais são os sintomas da DTM?",
        answer:
          "Os sintomas mais comuns incluem dores de cabeça frequentes, tensão na região do pescoço, sensação de ouvido tampado, zumbidos, tonturas, estalos na articulação e dificuldade para abrir a boca e mastigar.",
      },
      {
        question: "Como é feito o diagnóstico?",
        answer:
          "O diagnóstico é clínico e individualizado, considerando a articulação (ATM), os músculos mastigatórios e a função mandibular para identificar corretamente a origem da dor.",
      },
      {
        question: "O tratamento é sempre igual para todos?",
        answer:
          "Não. O plano de tratamento é definido conforme a causa, os sintomas e a resposta de cada paciente, sempre com foco em controle de dor e estabilidade funcional.",
      },
      {
        question: "A placa oclusal estabilizadora precisa ser usada sempre?",
        answer:
          "Ela funciona promovendo um novo equilíbrio para a articulação (ATM) e reduzindo a carga sobre os dentes, o que permite que o sistema neuromuscular se estabilize. A placa em si é um meio de diagnóstico e proteção, não um “relaxante muscular”.",
      },
    ],
    ctaText: "Agende sua avaliação",
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
