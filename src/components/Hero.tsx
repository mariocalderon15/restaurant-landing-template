import { useEffect, useRef, useState } from "react";
import './modules-css/Hero.css';
import lasbrasas from '../imagenes/lasbrasas.png'
import imagen from '../imagenes/imagen.png';

const images = [
  lasbrasas,
  "https://images.unsplash.com/photo-1558030006-450675393462",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  imagen,
];

export const Hero = () => {


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
      <div className="image-container">
        <img
          className={`hero-img ${fade ? "fade-in" : "fade-out"}`}
          src={images[index]}
          alt="Restaurante"
        />
      </div>
    </section>
  );
};