"use client";

import Image from "next/image";
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
          className="brand"
          href="#inicio"
          aria-label="GeoSpatial, volver al inicio"
          onClick={closeMenu}
        >
          <Image
            className="brand__logo"
            src="/images/geospatial-logo-light.png"
            alt=""
            width={595}
            height={180}
            sizes="(max-width: 680px) 148px, 178px"
            priority
          />
        </a>

        <button
          className="site-header__toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.7} />
          ) : (
            <Menu size={22} strokeWidth={1.7} />
          )}
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
