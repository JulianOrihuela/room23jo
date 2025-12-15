import { useEffect } from "react";

type UseInfiniteScrollProps = {
  callback: () => void;
  offset?: number; // cantidad de píxeles antes del final
};

export function useInfiniteScroll({
  callback,
  offset = 200,
}: UseInfiniteScrollProps) {
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - offset;

      if (nearBottom) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, offset]);
}
