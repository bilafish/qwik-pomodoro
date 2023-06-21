import type { Signal } from "@builder.io/qwik";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./circular-progress.css?inline";

interface CircularProgressProps {
  isRunning: Signal<boolean>;
  dateTimeStarted: Signal<Date | null>;
  timeLeft: string;
  timeElapsed: Signal<number>;
}

export const CircularProgress = component$(
  ({ isRunning, dateTimeStarted, timeLeft, timeElapsed }: CircularProgressProps) => {
    useStyles$(styles);
    return (
      <div class="percent">
        <svg>
          <circle cx="150" cy="150" r="150"></circle>
          <circle cx="150" cy="150" r="150"></circle>
        </svg>
        <h1>{timeLeft}</h1>
        <button
          onClick$={() => {
            if (!isRunning.value) {
              dateTimeStarted.value = new Date();
            } else {
              const now = new Date();
              timeElapsed.value = now.getTime() - dateTimeStarted.value!.getTime();
              dateTimeStarted.value = null;
            }
            isRunning.value = !isRunning.value;
          }}
        >
          <h3>{isRunning.value ? "pause" : "start"}</h3>
        </button>
      </div>
    );
  }
);
