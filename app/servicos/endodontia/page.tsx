import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function EndodontiaPage() {
  const serviceData = {
    title: "Endodontia (Tratamento de Canal)",
    subtitle: "Salve seu dente natural com técnicas modernas e procedimentos confortáveis",
    heroImage: withBasePath("/images/dental-root-canal-treatment-modern-equipment-profe.png"),
    description:
      "A endodontia é a especialidade que trata a polpa dentária e os canais radiculares. Quando há infecção ou inflamação profunda no dente, o tratamento de canal é a solução para preservar o dente natural e evitar a extração. Utilizamos tecnologia de ponta, incluindo localizadores apicais eletrônicos e instrumentos rotatórios, que tornam o procedimento mais rápido, preciso e confortável. Com anestesia adequada, o tratamento é indolor e pode ser realizado em uma ou mais sessões, dependendo da complexidade do caso.",
    benefits: [
      "Preservação do dente natural evitando extração",
      "Eliminação da dor de dente aguda",
      "Procedimento moderno e confortável",
      "Tratamento de infecções e abscessos dentários",
      "Maior durabilidade com tecnologia de ponta",
      "Recuperação rápida e eficaz",
    ],
    faqs: [
      {
        question: "O tratamento de canal dói?",
        answer:
          "Não! Com anestesia adequada, o procedimento é indolor. O objetivo do tratamento de canal é justamente eliminar a dor causada pela infecção ou inflamação do nervo do dente.",
      },
      {
        question: "Quantas sessões são necessárias?",
        answer:
          "Depende da complexidade do caso. Muitos tratamentos podem ser concluídos em uma única sessão, enquanto casos mais complexos podem requerer 2 ou 3 consultas.",
      },
      {
        question: "O dente fica fraco após o canal?",
        answer:
          "O dente tratado endodonticamente pode se tornar mais frágil, mas com uma restauração adequada (coroa ou bloco) e cuidados de higiene, ele pode durar a vida toda.",
      },
      {
        question: "Quando o tratamento de canal é necessário?",
        answer:
          "É indicado quando há inflamação ou infecção da polpa dentária, causada por cárie profunda, trauma, trinca no dente ou procedimentos dentários repetidos. Sinais incluem dor intensa, sensibilidade prolongada e inchaço.",
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
