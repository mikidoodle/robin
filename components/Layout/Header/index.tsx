import { Download } from "akar-icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import MobileMenu from "./MobileMenu";

type Props = {
  activePage: "home" | "/docs" | "/download" | "/support";
};

const Header: React.FC<Props> = (props) => {
  const { activePage } = props;

  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    const threshold = 10;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    const handleScroll = () => {
      onScroll();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx(styles.headerWrapper, styles.headerTranslucent)} style={{backgroundColor: 'black'}}>
      <div className={clsx("container max-width-wide", styles.header)}>
        <Link href="/">
          <a aria-label="home" className={styles.logo}>
            <img src="robin.png" height="30%" width="30%" alt="robin Logo"></img> <h1 className="white">robin </h1>
          </a>
        </Link>
        <nav className={styles.navDesktop}>
          <Link href="/docs">
            <a
              className={clsx(
                activePage === "/docs" ? styles.navLinkActive : styles.navLink
              )}
            >
              Docs
            </a>
          </Link>
          <Link href="/support">
            <a
              className={clsx(
                activePage === "/support" ? styles.navLinkActive : styles.navLink
              )}
            >
              Support
            </a>
          </Link>
          <Link href="/download">
            <a
              className={styles.navLink}
              href="/download"
            >
              <Download size={24} />
              Download
            </a>
          </Link>
        </nav>
        <div className={styles.navMobile}>
        </div>
      </div>
    </header>
  );
};

export default Header;
