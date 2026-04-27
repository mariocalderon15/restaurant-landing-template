import { useEffect, useState } from "react";
import { useReveal } from "../hook/useReveal";
import { useLanguage } from "../context/LenguageContext";

const images = [
  "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
];

export default function CocinaSlider() {
    const [index, setIndex] = useState(0);
    const { ref, visible } = useReveal();
    const {t} = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            ref={ref}
            className={`section split reveal ${visible ? "active" : ""}`}
        >
            <div>
                <h1>{t.aboutKitchen}</h1>
                <h2>
                    {t.pkitchen}
                </h2>
            </div>
            <div className="img-box">
                <img
                    key={index}
                    src={images[index]}
                    className="fade-img"
                />
            </div>
        </section>
    );
}