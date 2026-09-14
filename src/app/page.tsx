"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = frame.current;
    if (!iframe) return;
    const enhance = () => {
      const doc = iframe.contentDocument;
      if (!doc || doc.getElementById("portfolio-enhancer")) return;
      const script = doc.createElement("script");
      script.id = "portfolio-enhancer";
      script.src = "/portfolio-enhance.js";
      script.defer = true;
      doc.body.appendChild(script);
    };
    iframe.addEventListener("load", enhance);
    return () => iframe.removeEventListener("load", enhance);
  }, []);

  return (
    <iframe
      ref={frame}
      src="/arsalan-portfolio.html"
      title="Jyotish Kumar Portfolio"
      style={{ width: "100%", height: "100vh", border: 0, display: "block" }}
    />
  );
}
