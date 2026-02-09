import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function BruxismoPage() {
  const serviceData = {
    title: "Bruxismo",
    subtitle: "Proteja seus dentes do desgaste e elimine dores causadas pelo ranger e apertar",
    heroImage: withBasePath("/dental-night-guard-bruxism-treatment-oral-health-d.png"),
    description:
      "O bruxismo é o hábito involuntário de ranger ou apertar os dentes, que pode ocorrer durante o sono (bruxismo do sono) ou durante o dia (bruxismo da vigília). Esse hábito causa desgaste excessivo dos dentes, dores na mandíbula, dores de cabeça e até fraturas dentárias. Realizamos avaliação completa para identificar o grau de desgaste, sintomas associados e fatores contribuintes. O tratamento inclui confecção de placas miorrelaxantes personalizadas, orientações sobre gestão de estresse e, quando necessário, reabilitação dos dentes desgastados.",
    benefits: [
      "Proteção dos dentes contra desgaste e fraturas",
      "Alívio de dores de cabeça e tensão muscular",
      "Redução de dores na mandíbula e face",
      "Melhora da qualidade do sono",
      "Prevenção de problemas futuros na ATM",
      "Placas personalizadas confortáveis",
    ],
    faqs: [
      {
        question: "Como sei se tenho bruxismo?",
        answer:
          "Sinais comuns incluem desgaste visível dos dentes, dor ao acordar na mandíbula ou têmporas, dores de cabeça frequentes, sensibilidade dental aumentada e, em alguns casos, o parceiro pode relatar que você range os dentes durante o sono.",
      },
      {
        question: "A placa de bruxismo cura o problema?",
        answer:
          "A placa não cura o bruxismo, mas protege os dentes contra desgaste e fraturas, relaxa a musculatura e reduz sintomas como dor. O controle de estresse e ansiedade também é importante no tratamento.",
      },
      {
        question: "Preciso usar a placa para sempre?",
        answer:
          "O uso da placa geralmente é contínuo para proteção dos dentes, especialmente durante o sono. Com controle de fatores de risco como estresse, algumas pessoas conseguem reduzir o uso ao longo do tempo.",
      },
      {
        question: "Qual a diferença entre placa de bruxismo e placa para DTM?",
        answer:
          "Ambas são similares, mas têm objetivos diferentes. A placa de bruxismo foca em proteger os dentes do desgaste, enquanto a placa para DTM tem design específico para reposicionar a mandíbula e relaxar a articulação.",
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
