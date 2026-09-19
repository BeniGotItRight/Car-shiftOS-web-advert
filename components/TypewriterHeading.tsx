"use client";

import { useEffect, useRef, useState } from "react";

type Segment = { text: string; accent?: boolean } | { break: true };

interface TypewriterHeadingProps {
  segments: Segment[];
  accentClassName?: string;
  duration?: number;
}

/**
 * Types out a multi-segment heading once when it scrolls into view — text
 * doesn't loop or retype, but the cursor keeps blinking at the end. Segments
 * let a heading keep its accent-colored span(s) and line breaks while still
 * revealing character by character.
 */
export function TypewriterHeading({
  segments,
  accentClassName = "text-blue-500",
  duration = 6000,
}: TypewriterHeadingProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  const totalChars = segments.reduce(
    (sum, s) => sum + ("text" in s ? s.text.length : 0),
    0
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || count >= totalChars) return;
    const interval = duration / Math.max(totalChars, 1);
    const t = setTimeout(() => setCount((c) => c + 1), interval);
    return () => clearTimeout(t);
  }, [started, count, totalChars, duration]);

  let consumed = 0;

  // Full text is always in the DOM for crawlers and screen readers; the typed
  // animation is a visual-only layer on top.
  const fullText = segments
    .map((s) => ("text" in s ? s.text : " "))
    .join("")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <span ref={ref}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {segments.map((seg, i) => {
          if ("break" in seg) return <br key={i} />;
          const start = consumed;
          consumed += seg.text.length;
          const visible = Math.max(0, Math.min(seg.text.length, count - start));
          return (
            <span key={i} className={seg.accent ? accentClassName : undefined}>
              {seg.text.slice(0, visible)}
            </span>
          );
        })}
        {started && (
          <span className="inline-block w-[2px] h-[0.85em] bg-current ml-1 align-middle animate-blink-caret" />
        )}
      </span>
    </span>
  );
}
