import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./timer.css?inline";
import { CircularProgress } from "./circular-progress";

export const Timer = component$(() => {
  useStyles$(styles);
  return <div class="container">
    <CircularProgress/>
  </div>;
});
