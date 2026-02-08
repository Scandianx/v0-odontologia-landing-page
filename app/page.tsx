import { Header } from "@/components/header/header"
import { Hero } from "@/components/hero/hero"
import { Services } from "@/components/services/services"
import { Diferenciais } from "@/components/diferenciais/diferenciais"
import { Sobre } from "@/components/sobre/sobre"
import { FAQ } from "@/components/faq/faq"
import { CTAFinal } from "@/components/cta-final/cta-final"
import { Contato } from "@/components/contato/contato"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Diferenciais />
        <Sobre />
        <FAQ />
        <CTAFinal />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
