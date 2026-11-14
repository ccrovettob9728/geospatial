import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  Crosshair,
  Drone,
  HardHat,
  LandPlot,
  Layers3,
  MapPinned,
  Mountain,
  Move3D,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
} from "lucide-react";
import QuoteForm from "@/components/quote-form";
import ScrollEffects from "@/components/scroll-effects";
import SiteHeader from "@/components/site-header";

const services = [
  {
    icon: LandPlot,
    number: "01",
    title: "Levantamientos topográficos",
    description:
      "Planimetría y altimetría con estación total y GNSS RTK. Curvas de nivel y planos listos para tu proyecto.",
    tag: "Estación total · GNSS RTK",
  },
  {
    icon: Drone,
    number: "02",
    title: "Fotogrametría con drone",
    description:
      "Ortomosaicos, nubes de puntos y modelos 3D de grandes superficies en menos tiempo de terreno.",
    tag: "Ortomosaicos · Modelos 3D",
  },
  {
    icon: HardHat,
    number: "03",
    title: "Replanteo y control de obras",
    description:
      "Trazado de ejes, niveles y control geométrico durante la construcción para evitar desvíos y sobrecostos.",
    tag: "Ejes · Niveles · Control",
  },
  {
    icon: MapPinned,
    number: "04",
    title: "Mensuras y delimitaciones",
    description:
      "Deslindes, subdivisiones, servidumbres y mensuras mineras con documentación técnica para tus trámites.",
    tag: "Deslindes · Mensuras",
  },
  {
    icon: Mountain,
    number: "05",
    title: "Volumetrías y cubicaciones",
    description:
      "Cálculo de acopios, cortes y rellenos para el control de producción y pago de movimiento de tierra.",
    tag: "Acopios · Cortes · Rellenos",
  },
  {
    icon: Layers3,
    number: "06",
    title: "SIG, MDT y cartografía",
    description:
      "Modelos digitales de terreno, catastros y cartografía temática para estudios y toma de decisiones.",
    tag: "SIG · MDT · Cartografía",
  },
];

const sectors = [
  "Minería",
  "Construcción",
  "Energía y líneas eléctricas",
  "Inmobiliarias",
  "Instituciones públicas",
  "Consultoras e ingenierías",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Precisión técnica",
    description: "Equipos calibrados y control de calidad en cada entrega.",
  },
  {
    icon: Compass,
    title: "Conocimiento local",
    description: "Base en La Serena y experiencia en costa, valle y cordillera.",
  },
  {
    icon: ScanLine,
    title: "Tecnología de terreno",
    description: "Drone, GNSS RTK y procesamiento en Civil 3D y SIG.",
  },
  {
    icon: Timer,
    title: "Compromiso con plazos",
    description: "Un solo interlocutor técnico, de la cotización a la entrega.",
  },
];

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu proyecto",
    description: "Completa el formulario con ubicación, superficie y tipo de servicio.",
  },
  {
    number: "02",
    title: "Recibe tu cotización",
    description: "Te enviamos una propuesta con alcance, plazos y entregables.",
  },
  {
    number: "03",
    title: "Trabajo en terreno",
    description: "Levantamos con el equipo adecuado y procesamos tus datos.",
  },
  {
    number: "04",
    title: "Recibe tus resultados",
    description: "Planos DWG, KMZ, modelos de terreno e informe técnico.",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="GeoSpatial, volver al inicio"
    >
      <Image
        className="brand__logo"
        src={
          light
            ? "/images/geospatial-logo-light.png"
            : "/images/geospatial-logo.png"
        }
        alt=""
        width={595}
        height={180}
        sizes="(max-width: 680px) 148px, 178px"
      />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <div className="hero__inner page-width">
            <div className="hero__copy">
              <p className="eyebrow eyebrow--lime">
                <span className="eyebrow__dot" />
                TOPOGRAFÍA Y SOLUCIONES GEOESPACIALES · LA SERENA
              </p>
              <h1>
                Precisión que transforma información territorial en{" "}
                <span>decisiones confiables.</span>
              </h1>
              <p className="hero__description">
                Levantamientos, fotogrametría con drone, mensuras y control de
                obras para minería, construcción, energía e instituciones
                públicas en el norte de Chile.
              </p>
              <div className="hero__actions">
                <a className="button button--lime" href="#cotizar">
                  Cotizar mi proyecto <ArrowRight size={17} />
                </a>
                <a className="button button--outline" href="#servicios">
                  Ver servicios <ArrowDownRight size={16} />
                </a>
              </div>
              <div className="hero__proof">
                <span>
                  <Check size={14} /> Drone · GNSS RTK · Estación total
                </span>
                <span>
                  <Check size={14} /> Entregables DWG, KMZ, MDT e informe
                </span>
                <span>
                  <Check size={14} /> Cobertura en el norte de Chile
                </span>
              </div>
            </div>
            <div className="hero__visual">
              <svg
                className="hero__clip-defs"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <clipPath
                    id="hero-image-clip"
                    clipPathUnits="objectBoundingBox"
                  >
                    <path d="M .38 0 H 1 V 1 C .75 .92 .51 .85 .32 .81 C .15 .78 .06 .75 .025 .70 C 0 .65 .02 .58 .06 .51 C .13 .38 .2 .21 .27 .10 C .31 .04 .35 .01 .38 0 Z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="hero__image">
                <Image
                  src="/images/andes.jpg"
                  alt="Cordillera de los Andes en el norte de Chile"
                  fill
                  preload
                  sizes="(max-width: 680px) 90vw, (max-width: 900px) 43vw, 48vw"
                />
              </div>
              <div className="hero__precision">
                <span className="precision__icon">
                  <Crosshair size={17} />
                </span>
                <span>
                  <strong>Precisión centimétrica</strong>
                  <small>GNSS RTK · Control en terreno</small>
                </span>
              </div>
            </div>
          </div>
          <div className="hero__bottom-line" aria-hidden="true" />
        </section>

        <section className="sectors page-width" aria-label="Sectores atendidos">
          <p>APOYAMOS PROYECTOS DE</p>
          <div className="sectors__list" data-scroll-reveal>
            {sectors.map((sector) => (
              <span className="sector-chip" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </section>

        <section className="services section-pad" id="servicios">
          <div className="page-width">
            <div className="section-heading" data-scroll-reveal>
              <div>
                <p className="eyebrow eyebrow--blue">QUÉ HACEMOS</p>
                <h2>
                  Servicios topográficos
                  <br className="desktop-break" /> y geoespaciales
                </h2>
              </div>
              <p className="section-heading__intro">
                Información precisa del terreno para planificar, ejecutar y
                controlar tu proyecto, a cualquier escala.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, description, tag }) => (
                <article
                  className="service-card"
                  data-scroll-reveal
                  key={number}
                >
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <span className="service-card__number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="service-card__bottom">
                    <span>{tag}</span>
                    <a href="#cotizar" aria-label={`Cotizar ${title}`}>
                      <ChevronRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="services__note">
              <Sparkles size={16} />
              <span>
                ¿No encuentras lo que necesitas? Cuéntanos tu desafío y vemos
                cómo resolverlo.
              </span>
              <a href="#cotizar">
                Hablemos <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="why section-pad" id="nosotros">
          <div className="why__inner page-width">
            <div className="why__content" data-scroll-reveal>
              <p className="eyebrow eyebrow--blue">POR QUÉ GEOSPATIAL</p>
              <h2>
                Territorio conocido.
                <br />
                Datos que dan <span>certeza.</span>
              </h2>
              <p className="why__intro">
                Experiencia en terreno, tecnología y conocimiento del territorio
                regional en un solo equipo.
              </p>
              <div className="benefit-grid">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <article className="benefit" key={title}>
                    <span className="benefit__icon">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="why__visual" data-scroll-reveal>
              <div className="why__photo">
                <Image
                  src="/images/terrain.jpg"
                  alt="Terreno montañoso con camino, en un paisaje árido"
                  fill
                  sizes="(max-width: 760px) 90vw, 40vw"
                />
                <div className="why__photo-label">
                  <Waves size={16} />
                  <span>Costa · Valle · Cordillera</span>
                </div>
              </div>
              <div className="map-stamp" aria-hidden="true">
                <Move3D size={24} strokeWidth={1.4} />
                <span>DATOS DEL TERRENO</span>
                <strong>Con contexto local.</strong>
              </div>
            </div>
          </div>
          <div
            className="stats page-width"
            aria-label="Estadísticas"
            data-scroll-reveal
          >
            <div className="stat">
              <span className="stat__value">01</span>
              <span className="stat__label">equipo técnico dedicado</span>
            </div>
            <div className="stat">
              <span className="stat__value">Norte</span>
              <span className="stat__label">cobertura desde La Serena</span>
            </div>
            <div className="stat">
              <span className="stat__value">DWG · KMZ · MDT</span>
              <span className="stat__label">entregables listos para usar</span>
            </div>
            <div className="stat stat--message">
              <span>Tu terreno merece datos confiables.</span>
              <a href="#cotizar">
                Cuéntanos tu proyecto <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="process section-pad" id="proceso">
          <div className="page-width">
            <div
              className="section-heading section-heading--center"
              data-scroll-reveal
            >
              <div>
                <p className="eyebrow eyebrow--blue">SIMPLE Y TRANSPARENTE</p>
                <h2>De tu solicitud a la entrega, en 4 pasos</h2>
              </div>
              <p className="section-heading__intro">
                Acompañamiento técnico en cada etapa, sin sorpresas.
              </p>
            </div>
            <div className="process-grid">
              {steps.map((step, index) => (
                <article
                  className="process-step"
                  data-scroll-reveal
                  key={step.number}
                >
                  <div className="process-step__track">
                    <span>{step.number}</span>
                    {index < steps.length - 1 && <i aria-hidden="true" />}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote section-pad" id="cotizar">
          <div className="quote__inner page-width">
            <div className="quote__copy" data-scroll-reveal>
              <p className="eyebrow eyebrow--lime">
                <span className="eyebrow__dot" />
                COTIZACIÓN SIN COSTO
              </p>
              <h2>
                Planifica con
                <br /> datos <span>confiables.</span>
              </h2>
              <p className="quote__intro">
                Cuéntanos qué necesitas y prepararemos una propuesta con
                alcance, plazos y entregables claros.
              </p>
              <div className="quote__contact">
                <a href="mailto:contacto@geospatialpro.cl">
                  <span>
                    <Send size={17} />
                  </span>
                  <span>
                    <small>ESCRÍBENOS</small>
                    <strong>contacto@geospatialpro.cl</strong>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
                <div>
                  <span>
                    <MapPinned size={17} />
                  </span>
                  <span>
                    <small>BASE DE OPERACIONES</small>
                    <strong>La Serena, Región de Coquimbo</strong>
                  </span>
                </div>
              </div>
              <p className="quote__privacy">
                <ShieldCheck size={15} />
                Tus datos se usan solo para responder tu solicitud.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__main page-width">
          <div className="footer__brand">
            <Logo light />
            <p>
              Soluciones topográficas y geoespaciales desde La Serena, con
              cobertura en el norte de Chile.
            </p>
          </div>
          <div className="footer__links">
            <div>
              <h2>Explora</h2>
              <a href="#servicios">Servicios</a>
              <a href="#nosotros">Por qué GeoSpatial</a>
              <a href="#proceso">Cómo trabajamos</a>
            </div>
            <div>
              <h2>Contacto</h2>
              <a href="mailto:contacto@geospatialpro.cl">
                contacto@geospatialpro.cl
              </a>
              <a href="#cotizar">Solicitar cotización</a>
              <span>La Serena, Chile</span>
            </div>
          </div>
          <a className="footer__top" href="#inicio" aria-label="Volver arriba">
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer__bottom page-width">
          <span>© 2026 GeoSpatial · Topografía y soluciones geoespaciales</span>
          <span>Precisión para avanzar.</span>
        </div>
      </footer>
    </>
  );
}
