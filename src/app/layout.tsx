import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://geospatialpro.cl"),
  title: {
    default: "GeoSpatial | Topografía y soluciones geoespaciales en La Serena",
    template: "%s | GeoSpatial",
  },
  description:
    "Levantamientos topográficos, fotogrametría con drone, mensuras y control de obras en La Serena y el norte de Chile. Solicita tu cotización sin costo.",
  applicationName: "GeoSpatial",
  keywords: [
    "topografía La Serena",
    "levantamientos topográficos",
    "fotogrametría con drone",
    "mensuras",
    "GNSS RTK",
    "geoespacial",
    "Región de Coquimbo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://geospatialpro.cl",
    siteName: "GeoSpatial",
    title: "GeoSpatial | Topografía y soluciones geoespaciales",
    description:
      "Precisión que transforma información territorial en decisiones confiables. Cobertura en La Serena y el norte de Chile.",
    images: [
      {
        url: "/images/andes.jpg",
        width: 1200,
        height: 800,
        alt: "Cordillera de los Andes en el norte de Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoSpatial | Topografía y soluciones geoespaciales",
    description:
      "Levantamientos topográficos y soluciones geoespaciales en La Serena y el norte de Chile.",
    images: ["/images/andes.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GeoSpatial",
    url: "https://geospatialpro.cl",
    email: "contacto@geospatialpro.cl",
    description:
      "Servicios topográficos y geoespaciales en La Serena y el norte de Chile.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Serena",
      addressRegion: "Coquimbo",
      addressCountry: "CL",
    },
    areaServed: "Norte de Chile",
    knowsAbout: [
      "Levantamientos topográficos",
      "Fotogrametría con drone",
      "Mensuras",
      "Sistemas de información geográfica",
    ],
  };

  return (
    <html lang="es-CL">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
