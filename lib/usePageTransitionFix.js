import Router from "next/router";
import { useEffect } from "react";

export const OPACITY_EXIT_DURATION = 1;

const tempFix = () => {
  const elements = document.querySelectorAll('style[media="x"]');
  elements.forEach((elem) => elem.removeAttribute("media"));
  setTimeout(() => {
    elements.forEach((elem) => elem.remove());
  }, OPACITY_EXIT_DURATION * 1000);
};

const routeChange = () => {
  tempFix();
};

export const usePageTransitionFix = () => {
  useEffect(() => {
    Router.events.on("routeChangeComplete", routeChange);
    Router.events.on("routeChangeStart", routeChange);

    return () => {
      Router.events.off("routeChangeComplete", routeChange);
      Router.events.off("routeChangeStart", routeChange);
    };
  }, []);
};
