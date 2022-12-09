import { AnimatePresence, motion as m } from "framer-motion";
import { usePageTransitionFix } from "../../lib/helpers/usePageTransitionFix";
import Breadcrumb from "../UI/Breadcrumb/Breadcrumb";

export default function SideLayout({ pathname, asPath, children }) {
  usePageTransitionFix();

  return (
    <>
      <Breadcrumb asPath={asPath} />
      <AnimatePresence mode="wait">
        <m.main
          key={pathname}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="app">
          {children}
        </m.main>
      </AnimatePresence>
    </>
  );
}
