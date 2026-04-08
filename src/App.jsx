
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Foooter'
import Faculty from './components/Faculty'
import Gallery from './components/Gallery'
import WhatsAppButton from './components/WhatsAppButton'

function App() {

  return (
    < div className="bg-black min-h-screen w-[100vw] overflow-x-hidden">
      <Header />
      <Hero />
      <Gallery />
      <Faculty />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
