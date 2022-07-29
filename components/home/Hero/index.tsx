import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import code from "public/code.png";
import Link from "next/link";
const Hero: React.FC = () => {
  return (
    <section>
      <div
        className={clsx(
          styles.hero,
          "container",
          "max-width-wide",
          "section-padding"
        )}
      >
        <div className={styles.imageBlock}>
          <Image
            src={code}
            objectFit="contain"
            alt="robin Code"
          />
        </div>
        <div className={styles.textBlock}>
          <div style={{ width: "100%" }}>
            <h1 className={`${styles.heading} white`}>
              <br />
              robin
              {/* <mark className={styles.highlight}>absolutely&nbsp;free</mark> */}
            </h1>
            <p className={styles.body}>
              A wrapper that makes writing JavaScript easy!{" "}
            </p>
          </div>
          <div>
            <button><Link href="/download">Download</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
