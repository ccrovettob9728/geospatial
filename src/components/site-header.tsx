"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Por qué GeoSpatial" },
  { href: "#proceso", label: "Cómo trabajamos" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner page-width">
        <a
          className="brand brand--light"
          href="#inicio"
          aria-label="GeoSpatial, volver al inicio"
          onClick={closeMenu}
        >
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path
                d="M21 3.5 36 9v12.5c0 8.6-6.1 14.2-15 17-8.9-2.8-15-8.4-15-17V9l15-5.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m11.5 25 6-7 5 4 8-9M11.5 25l5 8M22.5 22l1 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="30.5" cy="13" r="2" fill="#9ad530" />
            </svg>
          </span>
          <span className="brand__name">
            GEO<span>SPATIAL</span>
            <small>TOPOGRAFÍA &amp; TERRITORIO</small>
          </span>
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>

        <nav
          className={`site-header__nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            className="site-header__cta"
            href="#cotizar"
            onClick={closeMenu}
          >
            Solicitar cotización <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
