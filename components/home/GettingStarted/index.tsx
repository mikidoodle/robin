import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./GettingStarted.module.scss";
import Image from "next/image";
import code from "public/code.png";
import Link from "next/link";
const GettingStarted: React.FC = () => {
  return (
    <section style={{ backgroundColor: "beige" }}>
      <div
        className={clsx(
          styles.hero,
          "container",
          "max-width-wide",
          "section-padding",
          styles.black
        )}
        style={{ backgroundColor: "beige", margin: '0px 20%' }}
      >
        <h1 className={`${styles.heading} ${styles.black}`}>Getting Started</h1>
        <h1
          className={`${styles.heading} ${styles.black}`}
          style={{ color: "beige" }}
        >
          Getting Started
        </h1>
        <div className="stackedit__html">
          <h1 id="getting-started" hidden>
            # Getting Started
          </h1>
          <p>Welcome to the robin documentation!</p>
          <p>
            This course will guide you through everything you need to know on
            robin!
          </p>
          <p>
            If you have any questions about robin, feel free to contact support
            or <a className="link" href="mailto:mihi@pidgon.me" className="link">email me</a>!
          </p>
          <h2 id="requirements">Requirements</h2>
          <ul>
            <li>
              macOS 10.14 or later, Windows 10 or later, all Linux versions.
            </li>
          </ul>
          <h2 id="setup">Setup</h2>
          <ul>
            <li>
              First, <a className="link" href="/robin.zip">download</a> robin. Once it's done, you
              can unzip it and store it on your Desktop.
            </li>
            <li>
              If you haven’t already, download and set up{" "}
              <a className="link" href="https://nodejs.org/en/download/">Node.js</a>, as this is
              what your robin code will be running on.
            </li>
            <li>
              You can also optionally download{" "}
              <a className="link" href="https://code.visualstudio.com/download">VSCode</a>, as
              robin will install extensions on your VSCode that makes writing in
              robin easier.
            </li>
            <li>
              Once you’re done with downloading everything, open up your{" "}
              <code>robin</code> folder, and follow these steps:
              <ol>
                <li>
                  Open your Command Line or Terminal, and copy and paste
                  <br />
                  <code>cd Desktop/robin &amp;&amp; sh start.sh</code> (assuming
                  you've stored the file on your Desktop), and click enter. It
                  will take a few seconds, and after you get a message that says
                  ‘robin is installed’, you can close your Terminal/Command line
                  and delete the robin folder on your Desktop.
                </li>
              </ol>
            </li>
          </ul>
          <h2 id="running-and-creating-a-file">Running and creating a file</h2>
          <p>
            To create a file, you can type in{" "}
            <code>robin create Desktop/index.robin</code>. This will create a
            file called <code>index.robin</code> on your desktop. Now, you can
            right click the file and open it using your text editor, and type in
            code. Once you’re done, save the file and go back to your Command
            line.
          </p>
          <p>
            Now, type in <code>robin run Desktop/index.robin</code>. This will
            run your file and give you an output.
          </p>
          <h1 id="syntax">Syntax</h1>
          <div 
            style={{
              color: "transparent",
              textShadow: "0 0 5px rgba(0,0,0,0.5)",
            }}>
          <p >
            Here is the syntax, functions and methods currently supported by
            robin.
          </p>
          </div>
          <div className={styles.strike}>
   <span><Link href="/docs"><button>Read the Docs!</button></Link></span>
</div>
<br /><br />
          </div>
        </div>
    </section>
  );
};

export default GettingStarted;
