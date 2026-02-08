import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ScrollReveal } from "@/components/scroll-reveal"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Consultório Odontológico Dra. Jalimar Martins | Odontologia Humanizada em São Fidélis",
  description:
    "Consultório odontológico com atendimento humanizado em São Fidélis/RJ. Especialidades: Ortodontia com aparelho autoligado, DTM/ATM, Endodontia, Estética do Sorriso, Bruxismo e Reabilitação Oral.",
  keywords:
    "dentista são fidélis, ortodontia, aparelho autoligado, dtm, atm, endodontia, clareamento dental, lentes de contato dental, bruxismo, prótese dentária",
  authors: [{ name: "Dra. Jalimar Martins" }],
  openGraph: {
    title: "Consultório Odontológico Dra. Jalimar Martins",
    description: "Odontologia humanizada com foco em conforto e estética natural. Agende sua consulta!",
    type: "website",
    locale: "pt_BR",
  },

}

export const viewport: Viewport = {
  themeColor: "#ac8699",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <ScrollReveal />
        <noscript>
          <style>{`
            .zoom-in, .drop-in, .slide-left, .fade-in, .blur-in, .light-in, .skew-in, .elastic-in {
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              transition: none !important;
            }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
