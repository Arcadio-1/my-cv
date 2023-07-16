import { useEffect, useRef, useState } from "react";

const useScrollMotion = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState<boolean>(false);

  const onScroll: EventListener = () => {
    let height = window.innerHeight;
    const topPos = ref.current?.getBoundingClientRect().top;
    if (topPos && topPos < height / 1.2) {
      setInView(true);
      window.removeEventListener("scroll", onScroll);
    }
  };

  useEffect(() => {
    const win: Window = window;
    win.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { ref, inView };
};

export default useScrollMotion;
