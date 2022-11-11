import { AnimatePresence, motion as m } from "framer-motion";
import { useRouter } from "next/router";
import Breadcrumb from "../UI/Breadcrumb/Breadcrumb";

export default function Main({ children }) {
  const { pathname } = useRouter();

  return pathname !== "/" ? (
    <>
    {pathname !== "/404" && <Breadcrumb />}
      <AnimatePresence mode="wait">
        <m.main key={pathname} initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }} transition={{ duration: .75 }} className="app">
          {children}
        </m.main>
      </AnimatePresence>
    </>
  ) : (
    <main className="app">
      {children}
    </main>
  )
}
