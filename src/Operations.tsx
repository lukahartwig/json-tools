import { For } from "solid-js";

import styles from "./Operations.module.css";

export interface Option<T> {
  name: string;
  value: T;
}

interface Props<T> {
  options: Option<T>[];
  onSelect: (operation: T) => void;
}

function Operations<T>(props: Props<T>) {
  const items = (
    <For each={props.options} fallback={<p>No operations...</p>}>
      {(op) => (
        <li>
          <label class={styles.label}>
            <input
              type="radio"
              name="operation"
              class={styles.radio}
              onChange={() => props.onSelect(op.value)}
            />
            {op.name}
          </label>
        </li>
      )}
    </For>
  );

  return (
    <div class={styles.container}>
      <ul class={styles.list}>{items}</ul>
    </div>
  );
}

export default Operations;
