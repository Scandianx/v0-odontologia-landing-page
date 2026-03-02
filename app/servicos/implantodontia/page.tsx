import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function ImplantodontiaPage() {
  const serviceData = {
    title: "Implantodontia (Implantes Dentários)",
    subtitle: "Base sólida, segura e permanente para o seu novo sorriso",
    heroImage: withBasePath("/dental-crown-prosthesis-oral-rehabilitation-modern.jpeg"),
    heroImageFit: "contain",
    description:
      "A perda de um ou mais dentes impacta não apenas a estética, mas a saúde em sua totalidade. Ela afeta a mastigação, a fala e a estrutura óssea do rosto. Os implantes dentários representam o que há de mais moderno na odontologia para substituir a raiz de dentes perdidos, oferecendo uma base sólida, segura e permanente para o seu novo sorriso.",
    benefits: [
      "Liberdade para sorrir sem vergonha",
      "Segurança para comer em público",
      "Especialista à sua disposição",
      "Conveniência e confiança em um só lugar",
      "Planejamento integrado e preciso",
      "Acompanhamento e suporte",
    ],
    faqs: [
      {
        question: "Quanto tempo demora para colocar um implante?",
        answer:
          "O tempo varia conforme o caso, mas a cirurgia em si é rápida. O que exige paciência é o período de osseointegração (união do implante ao osso), que garante a estabilidade definitiva. Em casos específicos, é possível planejar coroas provisórias no mesmo dia.",
      },
      {
        question: "O meu corpo pode rejeitar o implante?",
        answer:
          "O titânio utilizado nos implantes é biocompatível, ou seja, o corpo não o reconhece como objeto estranho. O insucesso é raro e geralmente está ligado a fatores de saúde bucal ou sistêmica, avaliados no planejamento.",
      },
      {
        question: "Vou ficar sem dentes durante o tratamento de implante?",
        answer:
          "Nunca. Durante a cicatrização, utilizamos próteses provisórias estéticas para que você possa sorrir e falar com confiança enquanto o implante final é confeccionado.",
      },
      {
        question: "Como é o pós-operatório do implante?",
        answer:
          "É mais simples do que a maioria imagina. Seguindo as recomendações de medicação e repouso nas primeiras 48 horas, o desconforto é mínimo e facilmente controlado, permitindo retorno rápido às atividades normais.",
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
