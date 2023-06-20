import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./circular-progress.css?inline";

export const CircularProgress = component$(() => {
  useStyles$(styles);
  return (
    <div class="percent">
      <svg>
        <circle cx="150" cy="150" r="150"></circle>
        <circle cx="150" cy="150" r="150"></circle>
      </svg>
      <h1>17:59</h1>
      <h3>pause</h3>
    </div>
  );
});
