import { type Component } from "solid-js";

import styles from "./EqualSign.module.css";

const EqualSign: Component = () => {
  return (
    <div class={styles.container}>
      <span class={styles.text}>=</span>
    </div>
  );
};

export default EqualSign;
