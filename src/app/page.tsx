"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;

    const enhance = () => {
      const doc = iframe.contentDocument;
      if (!doc) return;
      doc.documentElement.style.height = "100%";
      doc.body.style.minHeight = "100%";

      doc.querySelectorAll<HTMLImageElement>(".portrait img").forEach((img) => {
        img.src = "/profile.png?v=3";
        img.removeAttribute("srcset");
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.objectPosition = "center 20%";
        img.style.display = "block";
        img.style.transform = "none";
        img.style.filter = "none";
      });

      const oldStyle = doc.getElementById("jk-portrait-override");
      if (oldStyle) oldStyle.remove();
      const style = doc.createElement("style");
      style.id = "jk-portrait-override";
      style.textContent = `
        .portrait-wrap { justify-content: flex-end !important; }
        .portrait { width:min(100%,520px)!important; aspect-ratio:4/5!important; height:auto!important; border-radius:0!important; overflow:hidden!important; position:relative!important; border:1px solid var(--line)!important; background:var(--ink2)!important; }
        .portrait:after { border-radius:0!important; pointer-events:none!important; }
        .portrait img { width:100%!important; height:100%!important; object-fit:cover!important; object-position:center 20%!important; transform:none!important; filter:none!important; display:block!important; }
        @media(max-width:900px){.portrait-wrap{justify-content:center!important}.portrait{width:min(100%,500px)!important}}
        @media(max-width:620px){.portrait{width:100%!important;aspect-ratio:4/5!important}}
      `;
      doc.head.appendChild(style);

      // The static document is the visual shell; this is the interaction layer
      // that powers smooth scrolling, ScrollTrigger reveals, cursor physics,
      // sticky project transitions, navigation state and other portfolio UX.
      if (!doc.querySelector('script[data-jyotish-enhance="true"]')) {
        const script = doc.createElement("script");
        script.src = "/portfolio-enhance.js?v=4";
        script.async = false;
        script.dataset.jyotishEnhance = "true";
        doc.body.appendChild(script);
      }
    };

    iframe.addEventListener("load", enhance);
    return () => iframe.removeEventListener("load", enhance);
  }, []);

  return (
    <iframe
      ref={frame}
      src="/portfolio.html"
      title="Jyotish Kumar Portfolio"
      style={{ width: "100%", height: "100vh", border: 0, display: "block" }}
    />
  );
}
