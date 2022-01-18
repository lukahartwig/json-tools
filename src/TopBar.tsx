import { Component } from "solid-js";

import styles from "./TopBar.module.css";

const TopBar: Component = () => {
  return (
    <header class={styles.topbar}>
      <h1 class={styles.title}>JSON Set</h1>
    </header>
  );
};

export default TopBar;
