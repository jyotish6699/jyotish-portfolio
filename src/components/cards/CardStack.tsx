"use client";

import {
  Children,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type CardStackProps = {
  children: ReactNode;
};

export function CardStack({ children }: CardStackProps) {
  const items = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          threshold: 0.55,
          rootMargin: "-10% 0px -10% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [items.length]);

  return (
    <div className="relative">
      {items.map((child, index) => {
        const distance = index - activeIndex;

        let state = "card-background";

        if (distance === 0) {
          state = "card-focused";
        } else if (distance === -1) {
          state = "card-secondary";
        }

        return (
          <div
            key={index}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="card-stack-item"
          >
            <div
              className={`card-stack-content ${state}`}
              data-card-index={index}
              data-card-state={state}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}
