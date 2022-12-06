import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { throttle } from "../../../lib/helpers/throttle";
import Logo from "../../UI/Logo/Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { pathname } = useRouter();
  const [navbarOnTop, setNavbarOnTop] = useState(true);
  const [expandNavbar, setExpandNavbar] = useState(false);
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "/projects" },
    { title: "Get in touch", path: "/contact" }
  ];

  const handleToggle = () => {
    setExpandNavbar((prev) => !prev);
  };

  const handleResize = throttle(() => {
    if (window.innerWidth > 768) setExpandNavbar(false);
  }, 300);

  const handleScroll = throttle(() => {
    const starfieldHeight = document.querySelector("#starfield").clientHeight;

    if (window.scrollY < starfieldHeight + 30) {
      setNavbarOnTop(false);
    } else {
      setNavbarOnTop(true);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize, { passive: true });
    };
  }, [handleResize]);

  useEffect(() => {
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);

      const starfieldHeight = document.querySelector("#starfield").clientHeight;
      if (window.scrollY < starfieldHeight) setNavbarOnTop(false);
    } else {
      setNavbarOnTop(true);
    }

    return () => {
      if (pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname, handleScroll]);

  return (
    <nav
      className={`${styles.nav} ${
        navbarOnTop ? styles.fixed : styles.absolute
      }`}>
      <Link href="/">
        <Logo />
      </Link>

      <div
        className={`${styles.blackBackground} ${expandNavbar && styles.active}`}
        onClick={handleToggle}></div>
      <div className={`${styles.menu} ${expandNavbar && styles.active}`}>
        <Logo />
        <ul className={styles.menuItems}>
          {menuItems.map(({ title, path }) => (
            <li key={title} className={styles.menuItemsLink}>
              <Link href={path} onClick={() => setExpandNavbar(false)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`${styles.burger} ${expandNavbar && styles.active}`}
        onClick={handleToggle}>
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
