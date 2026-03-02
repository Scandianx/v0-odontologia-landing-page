import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function ReabilitacaoOralPage() {
  const serviceData = {
    title: "Reabilitação Oral Protética",
    subtitle: "Resgate da dignidade, função mastigatória e harmonia do sorriso",
    heroImage: withBasePath("/dental-crown-prosthesis-oral-rehabilitation-modern.jpeg"),
    heroImageFit: "contain",
    description:
      "A reabilitação oral vai além da reposição de dentes; é o resgate da sua dignidade e do prazer de conviver socialmente. Através de próteses e coroas personalizadas, devolvemos a plena capacidade mastigatória e a harmonia do sorriso, sempre respeitando a sua biologia única. Nosso diferencial está no planejamento integrado e na utilização de materiais de alta performance, que garantem resistência e naturalidade. Nosso foco é o acompanhamento contínuo da saúde dos tecidos e da adaptação do novo sorriso para garantir longevidade, segurança e bem-estar.",
    benefits: [
      "Restauração da função mastigatória adequada",
      "Melhora da estética e do sorriso",
      "Próteses naturais e confortáveis",
      "Protege a estabilidade dos dentes naturais restantes",
      "Materiais de alta qualidade e durabilidade",
      "Acompanhamento contínuo e manutenção",
    ],
    faqs: [
      {
        question: "Qual a diferença entre prótese fixa e removível?",
        answer:
          "A prótese fixa é cimentada ou parafusada e não pode ser removida pelo paciente. A removível pode ser retirada para higienização e é indicada quando há limitações para opções fixas.",
      },
      {
        question: "Quanto tempo dura uma prótese dentária?",
        answer:
          "Com cuidados adequados, uma prótese fixa pode durar muitos anos. Próteses removíveis tendem a precisar de substituição com mais frequência.",
      },
      {
        question: "É possível fazer reabilitação sem implantes?",
        answer:
          "Sim. Existem alternativas com próteses convencionais, como pontes fixas e próteses removíveis, dependendo da avaliação clínica.",
      },
      {
        question: "Como é o processo de confecção da prótese?",
        answer:
          "Inclui avaliação, moldagens, provas estéticas e funcionais, ajustes e instalação final.",
      },
    ],
    ctaText: "Agende sua consulta",
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
