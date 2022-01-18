import { mergeProps, type Component } from "solid-js";

import styles from "./Editor.module.css";

interface Props {
  content?: string;
  label: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (content: string) => void;
}

const Editor: Component<Props> = (_props) => {
  const props = mergeProps({ placeholder: "", readOnly: false }, _props);

  return (
    <div class={styles.container}>
      <label class={styles.label}>{props.label}</label>
      <textarea
        class={styles.textarea}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        value={props.content}
        onInput={(e) => props.onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

export default Editor;
