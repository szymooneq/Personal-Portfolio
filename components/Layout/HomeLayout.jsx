import { useRouter } from "next/router";
import SideLayout from "./SideLayout";

export default function HomeLayout({ children }) {
  const { pathname, asPath } = useRouter();

  return pathname === "/" ? (
    <main className="app">{children}</main>
  ) : (
    <SideLayout pathname={pathname} asPath={asPath}>
      {children}
    </SideLayout>
  );
}
