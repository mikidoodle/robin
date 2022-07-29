import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Squash as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";
import Link from "next/link";
import { Download } from "akar-icons";
import clsx from "clsx";
import { useRouter } from "next/router";

type Props = {
  activePage:
    | "home"
    | "/docs"
    | "/download"
    | "/support";
};

export default function MobileMenu({ activePage }: Props) {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  const MotionDialogOverlay = motion(DialogOverlay);
  const MotionDialogContent = motion(DialogContent);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <div className={styles.mobileMenuButton}>
      <Hamburger toggled={isOpen} toggle={setOpen} label="mobile menu" />
      <AnimatePresence>
        {isOpen && (
          <MotionDialogOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDismiss={() => setOpen(false)}
            style={{ zIndex: 40 }}
          >
            <MotionDialogContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Mega menu"
              className={styles.megaMenu}
            >
              <div className={styles.closeButton}>
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  label="close mobile menu"
                />
              </div>

              <nav className={clsx(styles.mobileNav, "container")}>
                <Link href="/docs">
                  <a className={styles.navLink}>Docs</a>
                </Link>
                <Link href="/support">
                  <a className={styles.navLink}>Support</a>
                </Link>
                <Link href="/download">
                  <div
                  className={styles.navLink}
                    style={{backgroundColor: 'white', color: 'black'}}
                  >
                    <Download size={24}/>
                    <span>Download</span>
                  </div>
                </Link>
              </nav>
            </MotionDialogContent>
          </MotionDialogOverlay>
        )}
      </AnimatePresence>
    </div>
  );
}
