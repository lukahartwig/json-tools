import { Component } from "solid-js";
import GitHubIcon from "./GitHubIcon";

import styles from "./TopBar.module.css";

const TopBar: Component = () => {
  return (
    <header class={styles.topbar}>
      <h1 class={styles.title}>JSON Tools</h1>
      <a
        class={styles.link}
        href="https://github.com/lukahartwig/json-tools"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    </header>
  );
};

export default TopBar;
