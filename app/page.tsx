import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Carousel from "./components/Carousel"
import Newsletter from "./components/Newsletter"
import FAQ from "./components/FAQ"
import Blog from "./components/Blog"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Carousel />
      <Newsletter />
      <FAQ />
      <Blog />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  )
}

