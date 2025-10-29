import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Integration from "@/components/integration"
import Privacy from "@/components/privacy"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
// import AudioUploader from "@/components/audioUploader"
      //  <section className="py-16 flex justify-center">
      //   <AudioUploader />
      // </section>

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integration />
      <Privacy />
      <CTA />
      <Footer />
    </main>
  )
}
