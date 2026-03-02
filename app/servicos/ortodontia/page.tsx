import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function OrtodontiaPage() {
  const serviceData = {
    title: "Ortodontia",
    subtitle: "Ortodontia moderna: bráquetes autoligáveis que priorizam conforto e higiene",
    heroImage: withBasePath("/modern-dental-braces-orthodontic-treatment-close-u.png"),
    description:
      "A ortodontia é a especialidade dedicada a corrigir a posição dos dentes e ossos maxilares. Utilizamos a tecnologia de bráquetes autoligáveis para oferecer um tratamento superior. Diferente do sistema convencional, este aparelho dispensa o uso de ligaduras elásticas (borrachinhas), trazendo benefícios diretos para a saúde e o conforto.",
    benefits: [
      "Higiene facilitada: sem borrachinhas, há redução no acúmulo de placa bacteriana",
      "Tratamento mais biológico e confortável, com forças mais leves",
      "Resultados mais eficientes nas fases iniciais do alinhamento",
      "Menos visitas ao consultório, com fios ativos por mais tempo",
      "Permite expansão do arco, podendo evitar extrações dentárias",
      "Aparelho mais discreto e confortável, com bráquetes reduzidos",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o tratamento ortodôntico?",
        answer:
          "O tempo varia conforme a complexidade de cada caso. Em média, dura entre 18 e 36 meses.",
      },
      {
        question: "O aparelho autoligável dói?",
        answer:
          "Ele costuma ser mais confortável por utilizar forças mais leves. É normal uma pressão inicial nos primeiros dias.",
      },
      {
        question: "Há menos consultas com esse sistema?",
        answer:
          "Geralmente sim. Como os fios mantêm sua ativação por mais tempo, as manutenções podem ser mais espaçadas.",
      },
      {
        question: "Sempre é necessário extrair dentes?",
        answer:
          "Não. Em muitos casos, a mecânica autoligável permite melhor aproveitamento do arco e pode evitar extrações.",
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
