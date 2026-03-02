import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function BruxismoPage() {
  const serviceData = {
    title: "Bruxismo",
    subtitle: "Entenda esse comportamento muscular",
    heroImage: withBasePath("/dental-night-guard-bruxism-treatment-oral-health-d.png"),
    description:
      "O bruxismo é definido atualmente como uma atividade da musculatura mastigatória. Ele se divide em dois tipos distintos, que exigem abordagens diferentes: bruxismo do sono, que ocorre enquanto você dorme e pode estar associado a apneia do sono ou refluxo; e bruxismo da vigília, que ocorre enquanto você está acordado, geralmente manifestado pelo apertamento dos dentes e tensão da mandíbula em momentos de concentração ou estresse.",
    benefits: [
      "Desgaste severo nos dentes",
      "Prevenção de fraturas dentárias recorrentes",
      "Alívio de dor e fadiga muscular",
      "Redução da sobrecarga da articulação (ATM)",
      "Redução de cefaleias do tipo tensional",
      "Menor impacto na qualidade do sono e da vida",
    ],
    faqs: [
      {
        question: "O bruxismo tem cura?",
        answer:
          "Diferente do que muitos pensam, o bruxismo não é uma doença, mas sim um comportamento da musculatura mastigatória orientado pelo sistema nervoso. Por isso, o foco do tratamento moderno não é a “cura” definitiva, mas o gerenciamento das consequências para proteger dentes, articulações e bem-estar.",
      },
      {
        question: "Qual a diferença entre bruxismo do sono e da vigília?",
        answer:
          "O bruxismo do sono ocorre de forma rítmica enquanto você dorme, muitas vezes associado a distúrbios como a apneia. Já o bruxismo da vigília acontece enquanto você está acordado, geralmente manifestado pelo apertamento dos dentes ou tensão na mandíbula em momentos de estresse ou concentração.",
      },
      {
        question: "A placa serve para relaxar o músculo?",
        answer:
          "Utilizamos dispositivos interoclusais de precisão (placas de acrílico rígido) que têm como função principal a proteção dos dentes e a estabilização da articulação (ATM). O termo “placa miorrelaxante” caiu em desuso, pois o relaxamento é um efeito secundário do equilíbrio que a placa proporciona, e não uma ação direta do dispositivo.",
      },
      {
        question: "Como tratar o bruxismo se eu aperto os dentes durante o dia?",
        answer:
          "Para o bruxismo da vigília, a abordagem principal é a conscientização e o biofeedback. Ensinamos técnicas para que o paciente perceba a tensão e aprenda a relaxar a mandíbula durante o dia, quebrando o ciclo de apertamento que causa dores de cabeça e fadiga facial.",
      },
      {
        question: "O estresse pode causar bruxismo?",
        answer:
          "Sim, fatores como estresse, ansiedade, uso de certos medicamentos e até distúrbios do sono são considerados fatores contribuintes. Nossa avaliação busca identificar esses gatilhos para que o controle seja feito de forma completa, e não apenas nos dentes.",
      },
      {
        question: "É possível recuperar os dentes que já foram desgastados?",
        answer:
          "Com certeza. Após estabilizarmos o comportamento muscular e protegermos o sistema com a placa, realizamos a Reabilitação Estética e Funcional. Através de restaurações e técnicas modernas, devolvemos a altura, a forma e a harmonia do sorriso, recuperando a eficiência da mastigação.",
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
