import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LenguageContext";
import './components-css/Hero.css';

const base = import.meta.env.BASE_URL;

const images = [
  `${base}lasbrasas.png`,
  "https://images.unsplash.com/photo-1558030006-450675393462",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  `${base}imagen.png`,
];

export const Hero = () => {
  const { t } = useLanguage();

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const startLoop = () => {
      setFade(false);

      timeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);

        timeoutRef.current = setTimeout(startLoop, 7000);
      }, 800);
    };

    timeoutRef.current = setTimeout(startLoop, 7000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="hero">
      <img
        className={`hero-img ${fade ? "fade-in" : "fade-out"}`}
        src={images[index]}
        alt="Restaurante"
      />

      <div className="hero-content">
        <button className="reserve-btn">{t.reserve}</button>
      </div>
    </section>
  );
};