import './App.css'
import { Navbar } from './components/navBar.tsx';
import { Location } from './components/Location.tsx';
import CocinaSlider from './components/CocinaSlider.tsx';
import { Hero } from './components/Hero.tsx';
import WhatsAppButton from './fab-button/WhatsAppButton.tsx';
import { useLanguage } from "./context/LenguageContext.tsx";
import { ReservaBtn } from './fab-button/reservaBtn.tsx';
import { RenderModal } from './render-modal/RenderModal.tsx'; 
import { useState } from 'react';




function App() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

   const handleSave = async (user: any) => {
    console.log(user);
    // aquí llamas a tu API
  };

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
       <ReservaBtn onOpen={() => setIsModalOpen(true)} />
        <RenderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
      </section>
    </div>
  )
}
export default App
