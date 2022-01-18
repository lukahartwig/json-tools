import { type Component } from "solid-js";

import Editor from "./Editor";

interface Props {
  content: string;
  label: string;
}

const Result: Component<Props> = (props) => {
  return <Editor label={props.label} content={props.content} readOnly />;
};

export default Result;
