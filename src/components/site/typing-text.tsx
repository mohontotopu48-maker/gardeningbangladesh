"use client";

import { useState, useEffect } from "react";

type TypingTextProps = {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
};

export function TypingText({
  texts,
  className = "",
  speed = 80,
  deleteSpeed = 40,
  delay = 2000,
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            // Full text typed, wait then start deleting
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentText.slice(0, displayText.length - 1));
          } else {
            // Fully deleted, move to next text
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-[1em] ml-1 bg-brand-green-bright animate-pulse align-middle" />
    </span>
  );
}
