import { useEffect, useRef, useState } from "react";
import { InView } from "../Types/types";
import { useDispatch } from "react-redux";
import { uiAction } from "@/redux/features/ui/uiSlice";

const useScrollMotion = (section: InView, isActive: Boolean = false) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatchInView = useDispatch();

  const [inView, setInView] = useState<boolean>(false);

  const onScroll: EventListener = () => {
    let screenHeight = window.innerHeight;
    const topPos = ref.current?.getBoundingClientRect().top;
    if (topPos && topPos < screenHeight / 1.2) {
      setInView(true);
      dispatchInView(uiAction.set_inView(section));
      window.removeEventListener("scroll", onScroll);
    }
  };

  useEffect(() => {
    if (isActive) {
      const win: Window = window;
      win.addEventListener("scroll", onScroll);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [isActive]);
  return { ref, inView };
};

export default useScrollMotion;
