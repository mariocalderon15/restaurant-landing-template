import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LenguageContext";
import './components-css/NavBar.css';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 👇 detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Las Brasas</div>

      {/* BOTÓN HAMBURGUESA */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* LINKS */}
      <div
        ref={menuRef}
        className={`nav-links ${open ? "active" : ""}`}
      >
        <a href="#home" onClick={() => setOpen(false)}>{t.home}</a>
        <a href="#menu" onClick={() => setOpen(false)}>{t.menu}</a>
        <a href="#about" onClick={() => setOpen(false)}>{t.about}</a>
        <a href="#reviews" onClick={() => setOpen(false)}>{t.reviews}</a>
        <a href="#contact" onClick={() => setOpen(false)}>{t.contact}</a>

        {/* idioma en móvil */}
        <div className="lang-switch mobile">
          <button
            className={lang === "es" ? "active" : ""}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      {/* idioma en desktop */}
      <div className="lang-switch desktop">
        <button
          className={lang === "es" ? "active" : ""}
          onClick={() => setLang("es")}
        >
          ES
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>
    </nav>
  );
};