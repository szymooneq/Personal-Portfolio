import { useRouter } from "next/router"
import { usePageTransitionFix } from "../../lib/usePageTransitionFix"
import SideLayout from "./SideLayout"

export default function Main({ children }) {
  usePageTransitionFix()
  const { pathname, asPath } = useRouter()

  return pathname === "/" ? (
    <main className="app">
      {children}
    </main>
  ) : (
    <SideLayout pathname={pathname} asPath={asPath}>
      {children}
    </SideLayout>
  )
}
