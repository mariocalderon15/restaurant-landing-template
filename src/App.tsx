import './App.css'
import { Navbar } from './components/navBar.tsx';
import { Location } from './components/Location.tsx';
import CocinaSlider from './components/CocinaSlider.tsx';
import { Hero } from './components/Hero.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import { useLanguage } from "./context/LenguageContext.tsx";

function App() {
  const { t } = useLanguage();

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
     <Hero/>

      {/* EXPERIENCE */}
     <CocinaSlider/>

      {/* DISHES */}
      <section className="section">
        <h2>{t.dishes}</h2>
        <div className="grid">
          <div className="card">🍝 Pasta artesanal</div>
          <div className="card">🥩 Carnes a la brasas</div>
          <div className="card">🍰 Postres gourmet</div>
        </div>
      </section>

      {/* Location */}
     <Location/>

      {/* REVIEWS */}
      <section className="section dark">
        <h2>{t.reviews}</h2>
        <p>⭐⭐⭐⭐ “Increíble experiencia”</p>
        <p>⭐⭐⭐⭐ “El mejor restaurante de la zona”</p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Reserva tu mesa</h2>
        <WhatsAppButton/>
      </section>
    </div>
  )
}
export default App
