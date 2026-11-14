"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return;
    }

    const elements = document.querySelectorAll("[data-scroll-reveal]");

    if (elements.length === 0) {
      return;
    }

    let observer: IntersectionObserver | undefined;

    function startRevealing() {
      if (window.scrollY <= 24) {
        return;
      }

      document.documentElement.classList.add("has-scroll-motion");
      observer = new IntersectionObserver(
        (entries, currentObserver) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
      );

      elements.forEach((element) => observer?.observe(element));
      window.removeEventListener("scroll", startRevealing);
    }

    if (window.scrollY > 24) {
      startRevealing();
    } else {
      window.addEventListener("scroll", startRevealing, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", startRevealing);
      observer?.disconnect();
      document.documentElement.classList.remove("has-scroll-motion");
    };
  }, []);

  return null;
}
