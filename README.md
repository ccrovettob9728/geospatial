# GeoSpatial

Landing page mobile-first para servicios topográficos y geoespaciales en La Serena y el norte de Chile.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para validar el proyecto:

```bash
npm run lint
npm run build
```

## Estructura

- `src/app/page.tsx`: contenido y secciones de la landing.
- `src/app/layout.tsx`: metadatos SEO y datos estructurados del servicio.
- `src/app/globals.css`: estilos responsive y mobile-first.
- `src/components/site-header.tsx`: navegación adaptable.
- `src/components/quote-form.tsx`: formulario de cotización.
- `public/images/`: fotografía local optimizada por Next.js.

El formulario abre el cliente de correo con una solicitud prellenada a `contacto@geospatialpro.cl`; el visitante debe revisar y enviar el correo. Los archivos seleccionados deben adjuntarse manualmente en ese correo. Para envío automático, conecta el formulario a un servicio backend antes de publicar.

El dominio, correo y descripción del servicio se configuran en `src/app/layout.tsx`. Las fotografías de `public/images/` provienen de Unsplash.
