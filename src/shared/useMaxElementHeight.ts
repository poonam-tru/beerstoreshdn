"use client";
import { useState, useLayoutEffect } from "react";

function useMaxElementHeight(elementSelector: string) {
  const [maxElementHeight, setMaxElementHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const elements = document.querySelectorAll(elementSelector);
    const updateMaxElementHeight = () => {
      let maxHeight = 0;

      elements.forEach((element) => {
        const elementHeight = element.clientHeight;
        if (elementHeight > maxHeight) {
          maxHeight = elementHeight;
        }
      });

      setMaxElementHeight(maxHeight);
    };

    updateMaxElementHeight();

    window.addEventListener("resize", updateMaxElementHeight);

    return () => {
      window.removeEventListener("resize", updateMaxElementHeight);
    };
  }, [elementSelector]);

  return { maxElementHeight };
}

export default useMaxElementHeight;
