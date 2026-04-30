import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LenguageContext";
import './modules-css/NavBar.css';

export const Navbar = () => {
  //PROPS
  const { lang, setLang, t } = useLanguage();

  //HOOKS
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null); // Agregamos una referencia para el botón de la hamburguesa

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificamos si el clic ocurrió fuera del menú y el botón hamburguesa
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="logo-main">Las Brasas</span>
        <span className="logo-sub">Restaurant</span>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        ref={hamburgerRef} // Referencia al botón
        className={`hamburger ${open ? "open" : ""}`}
        onClick={toggleMenu} // Llamamos a toggleMenu aquí
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
        Menu
      </button>

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