import { createMemo, createSignal, type Component } from "solid-js";

import { calculateJSONSet, Operation } from "./operations";
import Editor from "./Editor";
import EqualSign from "./EqualSign";
import Operations, { type Option } from "./Operations";
import Result from "./Result";
import TopBar from "./TopBar";

import styles from "./App.module.css";

const operations: Option<Operation>[] = [
  {
    name: "Complement",
    value: Operation.Complement,
  },
  {
    name: "Difference",
    value: Operation.Difference,
  },
  {
    name: "Intersection",
    value: Operation.Intersection,
  },
  {
    name: "Union",
    value: Operation.Union,
  },
];

const App: Component = () => {
  const [contentA, setContentA] = createSignal("");
  const [contentB, setContentB] = createSignal("");
  const [operation, setOperation] = createSignal<Operation | null>(null);

  const result = createMemo<string>((prev) => {
    try {
      const op = operation();

      if (op === null) {
        return prev;
      }

      const a = JSON.parse(contentA());
      const b = JSON.parse(contentB());
      const c = calculateJSONSet(a, b, op);

      return JSON.stringify(c, null, 2);
    } catch (e) {
      return prev;
    }
  }, "");

  return (
    <div class={styles.container}>
      <TopBar />
      <Editor
        label="A"
        placeholder="Paste JSON..."
        content={contentA()}
        onChange={setContentA}
      />
      <Operations options={operations} onSelect={setOperation} />
      <Editor
        label="B"
        placeholder="Paste JSON..."
        content={contentB()}
        onChange={setContentB}
      />
      <EqualSign />
      <Result label="C" content={result()} />
    </div>
  );
};

export default App;
