import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const { current } = elementRef;

    if (!current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback(entry.target);
      }
    }, options);

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [callback, options]);

  return elementRef;
};

export default useIntersectionObserver;
