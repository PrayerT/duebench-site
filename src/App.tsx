import { I18nProvider } from './i18n'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Method from './sections/Method'
import Sample from './sections/Sample'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

export default function App() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <Sample />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}
