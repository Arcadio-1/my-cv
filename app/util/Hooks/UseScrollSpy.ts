import { useDispatch } from "react-redux";
import { InView } from "../Types/types";
import { useInView } from "react-intersection-observer";
import { uiAction } from "@/redux/features/ui/uiSlice";
import { useEffect } from "react";

const useScrollSpy = (section: InView) => {
  const dispatchInView = useDispatch();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    // console.log(inView);
    if (inView) {
      dispatchInView(uiAction.set_inView(section));
    }
    if (!inView) {
      dispatchInView(uiAction.set_inView(InView.null));
    }
  }, [inView, dispatchInView, section]);

  return { ref };
};

export default useScrollSpy;
