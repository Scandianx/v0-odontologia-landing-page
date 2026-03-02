import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function EsteticaPage() {
  const serviceData = {
    title: "Estética do Sorriso",
    subtitle: "O resgate da sua autoestima através do sorriso",
    heroImage: withBasePath("/beautiful-white-smile-teeth-whitening-before-and-a.png"),
    heroImageFit: "contain",
    description:
      "Um sorriso confiante transforma a sua forma de interagir com o mundo. Em nosso consultório, unimos sensibilidade artística ao respeito rigoroso pela biologia para devolver a alegria de se olhar ao espelho com segurança e naturalidade. Para harmonizar o seu sorriso com saúde e longevidade, utilizamos Clareamento Dental, Lentes de Contato e Facetas, Plástica Gengival e Substituição de Restaurações. Aqui, o seu novo sorriso é planejado para ser tão único quanto você.",
    benefits: [
      "Resultados naturais, para que a estética nunca pareça artificial",
      "Segurança em sorrir em reuniões, fotos e momentos sociais",
      "Saúde em primeiro lugar, com foco em biologia e longevidade",
      "Mínimo desgaste da estrutura dentária original",
      "Acabamento natural com materiais que mimetizam textura e luz",
      "Atendimento humanizado, focado em expectativas e conforto",
    ],
    faqs: [
      {
        question: "Quanto tempo duram as lentes de contato ou facetas?",
        answer:
          "Os materiais modernos são resistentes e estáveis. Com bons cuidados de higiene e visitas regulares ao dentista, podem durar muitos anos. A longevidade depende da saúde gengival e da ausência de apertamento sem proteção.",
      },
      {
        question: "Precisa desgastar muito o dente natural?",
        answer:
          "Não. Seguimos a filosofia da Odontologia Minimamente Invasiva. Em muitos casos, o desgaste é quase imperceptível ou inexistente.",
      },
      {
        question: "O resultado pode ficar com aspecto artificial?",
        answer:
          "Nosso objetivo é a naturalidade absoluta. Estudamos as proporções do rosto e utilizamos materiais que imitam a passagem da luz e a textura de um dente real.",
      },
      {
        question: "O clareamento estraga ou enfraquece o esmalte?",
        answer:
          "Mito. Quando realizado com supervisão profissional, o clareamento é seguro. Ele não remove o esmalte, apenas retira os pigmentos que escurecem o dente ao longo dos anos.",
      },
      {
        question: "Quem tem bruxismo ou aperta os dentes pode fazer?",
        answer:
          "Sim, mas com planejamento. Após a finalização do sorriso, confeccionamos um dispositivo de proteção (placa) para garantir que o investimento não seja danificado pelo apertamento noturno.",
      },
      {
        question: "Cada sorriso exige um planejamento único.",
        answer:
          "Descubra quais destes tratamentos são os ideais para resgatar a sua autoestima.",
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
