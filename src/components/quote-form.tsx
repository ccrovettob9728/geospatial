"use client";

import { ArrowRight, Check, Paperclip } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const serviceOptions = [
  "Levantamiento topográfico",
  "Fotogrametría con drone",
  "Replanteo / control de obra",
  "Mensura o deslinde",
  "Volumetría",
  "SIG / MDT / cartografía",
  "Otro servicio",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "ready" | "error">("idle");
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!email && !phone) {
      setStatus("error");
      return;
    }

    const fields = [
      ["Servicio", data.get("service")],
      ["Nombre", data.get("name")],
      ["Empresa", data.get("company")],
      ["Correo", email],
      ["Teléfono", phone],
      ["Ubicación del proyecto", data.get("location")],
      ["Superficie aproximada", data.get("area")],
      ["Descripción", data.get("details")],
      ["Archivo seleccionado", fileName || "No"],
    ];
    const body = fields
      .filter(([, value]) => String(value ?? "").trim())
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n");
    const subject = `Solicitud de cotización - ${String(data.get("service"))}`;
    window.location.href = `mailto:contacto@geospatialpro.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ready");
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    setFileName(file?.name ?? "");
  }

  return (
    <form
      className="quote-form"
      data-scroll-reveal
      onSubmit={handleSubmit}
    >
      <div className="quote-form__heading">
        <span className="quote-form__icon">
          <Paperclip size={18} strokeWidth={1.7} />
        </span>
        <div>
          <h3>Cuéntanos sobre tu proyecto</h3>
          <p>Te responderemos con una propuesta a medida.</p>
        </div>
      </div>

      <label className="form-field form-field--full">
        <span>¿Qué servicio necesitas? <b>*</b></span>
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Selecciona un servicio
          </option>
          {serviceOptions.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <div className="form-grid">
        <label className="form-field">
          <span>Nombre <b>*</b></span>
          <input
            autoComplete="name"
            name="name"
            placeholder="Tu nombre"
            required
          />
        </label>
        <label className="form-field">
          <span>Empresa</span>
          <input
            autoComplete="organization"
            name="company"
            placeholder="Nombre de empresa"
          />
        </label>
        <label className="form-field">
          <span>Correo</span>
          <input
            autoComplete="email"
            name="email"
            placeholder="tu@empresa.cl"
            type="email"
          />
        </label>
        <label className="form-field">
          <span>Teléfono</span>
          <input
            autoComplete="tel"
            name="phone"
            placeholder="+56 9 1234 5678"
            type="tel"
          />
        </label>
        <label className="form-field">
          <span>Ubicación del proyecto <b>*</b></span>
          <input
            autoComplete="off"
            name="location"
            placeholder="Comuna o región"
            required
          />
        </label>
        <label className="form-field">
          <span>Superficie aproximada</span>
          <input name="area" placeholder="Ej. 2,5 hectáreas" />
        </label>
      </div>

      <label className="form-field form-field--full">
        <span>Describe tu proyecto</span>
        <textarea
          name="details"
          placeholder="Cuéntanos brevemente qué necesitas..."
          rows={3}
        />
      </label>

      <label className="file-field">
        <input
          accept=".pdf,.kmz,.kml,.jpg,.jpeg,.png,.dwg"
          name="attachment"
          onChange={handleFileChange}
          type="file"
        />
        <Paperclip size={15} />
        <span>
          {fileName || "Adjuntar plano, KMZ o fotos"}
          {!fileName && <small> (opcional)</small>}
        </span>
      </label>
      <p className="quote-form__note">
        Se abrirá tu correo con los datos listos. Para enviar archivos,
        adjúntalos desde tu correo.
      </p>

      <button className="button button--lime quote-form__submit" type="submit">
        Preparar solicitud <ArrowRight size={17} />
      </button>

      <p
        className={`quote-form__status${status === "error" ? " is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status === "ready" && (
          <>
            <Check size={15} /> Se abrió tu aplicación de correo. Revisa y envía
            el mensaje para completar la solicitud.
          </>
        )}
        {status === "error" &&
          "Ingresa un correo o teléfono para que podamos responderte."}
      </p>
    </form>
  );
}
