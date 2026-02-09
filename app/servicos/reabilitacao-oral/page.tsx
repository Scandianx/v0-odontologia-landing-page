import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function ReabilitacaoOralPage() {
  const serviceData = {
    title: "Reabilitação Oral",
    subtitle: "Restaure função, estética e saúde bucal com próteses de qualidade",
    heroImage: withBasePath("/dental-crown-prosthesis-oral-rehabilitation-modern.jpeg"),
    heroImageFit: "contain",
    description:
      "A reabilitação oral é a área que devolve função mastigatória, estética e saúde bucal através de próteses dentárias, coroas, pontes e implantes. É indicada para pacientes que perderam dentes ou têm dentes muito desgastados ou comprometidos. Realizamos planejamento completo do caso, desde a avaliação inicial até a confecção e adaptação das próteses, utilizando materiais de alta qualidade que proporcionam naturalidade e durabilidade. Acompanhamos nossos pacientes continuamente para garantir a longevidade e o sucesso do tratamento.",
    benefits: [
      "Restauração da função mastigatória adequada",
      "Melhora da estética e do sorriso",
      "Próteses naturais e confortáveis",
      "Prevenção de problemas na ATM e postura",
      "Materiais de alta qualidade e durabilidade",
      "Acompanhamento contínuo e manutenção",
    ],
    faqs: [
      {
        question: "Qual a diferença entre prótese fixa e removível?",
        answer:
          "A prótese fixa (coroa, ponte ou sobre implante) é cimentada ou parafusada e não pode ser removida pelo paciente. A prótese removível pode ser retirada para higienização e é indicada quando há limitações para próteses fixas.",
      },
      {
        question: "Quanto tempo dura uma prótese dentária?",
        answer:
          "Com cuidados adequados, uma prótese fixa pode durar 10 a 15 anos ou mais. Próteses removíveis geralmente precisam ser refeitas a cada 5 a 7 anos devido a mudanças na estrutura óssea e desgaste do material.",
      },
      {
        question: "É possível fazer reabilitação sem implantes?",
        answer:
          "Sim! Existem várias opções de reabilitação com próteses convencionais (pontes fixas ou próteses removíveis) que não exigem implantes, dependendo das condições clínicas do paciente.",
      },
      {
        question: "Como é o processo de confecção da prótese?",
        answer:
          "O processo envolve várias etapas: avaliação inicial, moldagens, provas estéticas e funcionais, ajustes e instalação final. O número de consultas varia conforme a complexidade do caso.",
      },
    ],
    ctaText: "Agende sua Consulta",
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
