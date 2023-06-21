import type { Signal } from "@builder.io/qwik";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./circular-progress.css?inline";
import { Circle, dynamicDashOffset } from "./circle.css";
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface CircularProgressProps {
  isRunning: Signal<boolean>;
  dateTimeStarted: Signal<Date | null>;
  timeLeft: string;
  timeElapsed: Signal<number>;
  percentageLeft: number;
}

export const CircularProgress = component$(
  ({ isRunning, dateTimeStarted, timeLeft, timeElapsed, percentageLeft }: CircularProgressProps) => {
    const percentageElapsed = 1 - percentageLeft;
    const computed = Math.min(percentageElapsed, 1);
    useStyles$(styles);
    return (
      <div class="percent">
        <svg>
          <circle cx="150" cy="150" r="150" class={Circle} style={assignInlineVars({ [dynamicDashOffset]: `calc(943 * ${computed})` })}></circle>
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
