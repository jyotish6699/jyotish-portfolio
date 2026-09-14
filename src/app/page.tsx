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
      // The portfolio is intentionally self-contained: its interaction layer,
      // styles, and markup live in the static portfolio document.
      doc.documentElement.style.height = "100%";
      doc.body.style.minHeight = "100%";
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
