import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"

export default function OrtodontiaPage() {
  const serviceData = {
    title: "Ortodontia",
    subtitle: "Transforme seu sorriso com aparelhos autoligados de última geração",
    heroImage: "/images/modern-dental-braces-orthodontic-treatment-close-u.png",
    description:
      "A ortodontia é a especialidade que corrige a posição dos dentes e dos ossos maxilares. Utilizamos aparelhos autoligados de última geração que proporcionam mais conforto, menos visitas ao consultório e resultados mais rápidos. Nosso tratamento é personalizado para cada paciente, garantindo não apenas um sorriso bonito, mas também saúde bucal e funcionalidade mastigatória adequada.",
    benefits: [
      "Correção do alinhamento dentário e da mordida",
      "Aparelhos autoligados que reduzem o tempo de tratamento",
      "Menos desconforto e visitas ao consultório",
      "Melhora da estética do sorriso",
      "Prevenção de problemas futuros como desgaste dentário e dores na ATM",
      "Facilita a higienização e previne cáries",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o tratamento ortodôntico?",
        answer:
          "O tempo varia de acordo com a complexidade de cada caso, mas geralmente o tratamento dura entre 18 e 36 meses. Com aparelhos autoligados, muitas vezes conseguimos reduzir esse tempo.",
      },
      {
        question: "O aparelho dói?",
        answer:
          "É normal sentir uma leve pressão e desconforto nos primeiros dias após a colocação e ajustes. No entanto, os aparelhos autoligados que utilizamos causam menos desconforto que os tradicionais.",
      },
      {
        question: "Qual a idade ideal para iniciar o tratamento?",
        answer:
          "Não há idade limite para ortodontia! Embora muitos tratamentos comecem na adolescência, adultos de qualquer idade podem se beneficiar. O ideal é fazer uma avaliação para determinar o melhor momento.",
      },
      {
        question: "Como é a manutenção do aparelho?",
        answer:
          "As consultas de manutenção geralmente ocorrem a cada 4-8 semanas. Durante essas visitas, ajustamos o aparelho e monitoramos o progresso do tratamento.",
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
