import { Header } from "@/components/header/header"
import { ServiceDetail } from "@/components/service-detail/service-detail"
import { Footer } from "@/components/footer/footer"
import { withBasePath } from "@/lib/paths"

export default function EsteticaPage() {
  const serviceData = {
    title: "Estética do Sorriso",
    subtitle: "Transforme seu sorriso com naturalidade e harmonia",
    heroImage: withBasePath("/images/beautiful-white-smile-teeth-whitening-before-and-a.png"),
    heroImageFit: "contain",
    description:
      "A estética do sorriso combina arte e ciência para criar sorrisos naturais e harmoniosos. Oferecemos clareamento dental supervisionado, que garante resultados seguros e duradouros, e lentes de contato dentais ultrafinas, que transformam o sorriso de forma minimamente invasiva. Cada tratamento é planejado digitalmente para garantir que o resultado final esteja em perfeita harmonia com o rosto, lábios e gengivas do paciente. Nosso objetivo é realçar a beleza natural de cada sorriso, respeitando a individualidade e expectativas de cada pessoa.",
    benefits: [
      "Clareamento dental supervisionado e seguro",
      "Lentes de contato dentais com resultado natural",
      "Planejamento digital do sorriso (DSD)",
      "Procedimentos minimamente invasivos",
      "Correção de imperfeições e manchas",
      "Aumento da autoestima e confiança",
    ],
    faqs: [
      {
        question: "Quanto tempo dura o clareamento dental?",
        answer:
          "Com os cuidados adequados, o clareamento pode durar de 1 a 3 anos. A longevidade depende de hábitos alimentares, higiene oral e controle de consumo de alimentos e bebidas pigmentadas.",
      },
      {
        question: "As lentes de contato danificam os dentes?",
        answer:
          "Não! As lentes modernas são ultrafinas e exigem desgaste mínimo ou nenhum desgaste do esmalte dental. O procedimento é reversível e preserva a estrutura natural dos dentes.",
      },
      {
        question: "Quanto tempo leva para colocar lentes de contato?",
        answer:
          "O processo completo geralmente leva de 2 a 3 consultas, incluindo planejamento digital, preparo dos dentes (se necessário), moldagem e cimentação das lentes definitivas.",
      },
      {
        question: "O clareamento sensibiliza os dentes?",
        answer:
          "Pode ocorrer sensibilidade temporária durante o tratamento, mas utilizamos produtos de alta qualidade e técnicas que minimizam esse desconforto. A sensibilidade desaparece após o término do tratamento.",
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
