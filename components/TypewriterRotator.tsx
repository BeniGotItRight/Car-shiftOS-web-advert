"use client";

import { useEffect, useState } from "react";

interface TypewriterRotatorProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdMs?: number;
}

export function TypewriterRotator({
  words,
  className = "",
  typeSpeed = 40,
  deleteSpeed = 30,
  holdMs = 2200,
}: TypewriterRotatorProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length + 1)),
          typeSpeed
        );
      } else {
        timeout = setTimeout(() => setDeleting(true), holdMs);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentWord.slice(0, text.length - 1)),
          deleteSpeed
        );
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className="inline-block w-[2px] h-[0.85em] bg-current ml-1 align-middle animate-blink-caret"
      />
    </span>
  );
}
