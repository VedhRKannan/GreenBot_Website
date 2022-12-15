import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import classNames from "classnames";

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link className={styles.card} href="/" style={{ marginTop: "-2px" }}>
      Home
    </Link>
    <Link className={styles.card} href="/ML" style={{ marginTop: "-2px" }}>
      ML
    </Link>
    <Link
      className={styles.card}
      href="/hardware"
      style={{ marginTop: "-2px" }}
    >
      Hardware
    </Link>
    <Link className={styles.card} href="/login" style={{ marginTop: "-2px" }}>
      Login
    </Link>
  </nav>
);
export default Navbar;
