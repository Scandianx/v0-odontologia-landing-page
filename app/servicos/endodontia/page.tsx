import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function EndodontiaPage() {
  const serviceData = {
    title: "Especialidades Integradas | Endodontia",
    subtitle: "Endodontia avançada com atendimento acolhedor e tecnologia moderna",
    heroImage: withBasePath("/dental-root-canal-treatment-modern-equipment-profe.png"),
    description:
      '"Nossos tratamentos de Implantes e Endodontia Avançada são realizados por especialistas parceiros que seguem nosso rigoroso padrão de qualidade e atendimento humanizado." Sabemos que o medo e a ansiedade são comuns quando se fala em tratamento de canal. Por isso, unimos uma abordagem acolhedora a tecnologias modernas para oferecer um procedimento ágil e preciso. Nosso foco é remover a infecção e preparar o caminho para que seu corpo se recupere naturalmente, preservando seu dente original e devolvendo o conforto ao mastigar e a alegria de sorrir.',
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
        question: "O tratamento de canal é doloroso?",
        answer:
          "Não. Graças ao avanço das técnicas anestésicas e ao uso de tecnologias como os instrumentos mecanizados, o procedimento é hoje muito confortável. O medo está mais associado a experiências passadas ou falta de informação do que ao tratamento em si.",
      },
      {
        question: "Quantas sessões são necessárias para concluir o tratamento?",
        answer:
          "Depende da complexidade do caso, mas em muitos casos conseguimos limpar e selar o canal em poucas visitas. Casos com infecções mais persistentes podem exigir mais sessões para garantir a desinfecção completa.",
      },
      {
        question: "O dente fica fraco ou “morto” após o tratamento de canal?",
        answer:
          "O dente perde a sensibilidade interna, mas continua nutrido pelos tecidos ao seu redor. Ele não fica fraco pelo canal em si, mas pela perda de estrutura causada por cárie ou fratura. Após o tratamento, a restauração adequada devolve resistência e força.",
      },
      {
        question: "Quando o tratamento de canal é realmente necessário?",
        answer:
          "É indicado quando a polpa do dente sofre inflamação irreversível ou infecção (necrose), geralmente por cáries profundas, traumas ou fraturas. O objetivo é eliminar a dor e os microrganismos, evitando a extração.",
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
