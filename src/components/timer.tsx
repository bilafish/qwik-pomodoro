import {
  component$,
  useStyles$,
  useSignal,
  useVisibleTask$,
  useComputed$,
} from "@builder.io/qwik";
import styles from "./timer.css?inline";
import { CircularProgress } from "./circular-progress";
import type { Signal } from "@builder.io/qwik";

function msToMMSS(ms: number) {
  const min = Math.floor((ms / 1000 / 60) % 60);
  const sec = Math.floor((ms / 1000) % 60);
  const minString = min < 10 ? "0" + min : min;
  const secString = sec < 10 ? "0" + sec : sec;
  return minString + ":" + secString;
}

export const Timer = component$(() => {
  const timerDuration = 1500000;
  const isRunning = useSignal(false);
  const dateTimeStarted: Signal<Date | null> = useSignal(null);
  const timeElapsed = useSignal(0);
  const timeLeft = useSignal(timerDuration);
  const timeLeftString = useComputed$(() => msToMMSS(timeLeft.value));
  const percentageLeft = useComputed$(() => Math.floor(timeLeft.value / 1000) / Math.floor(timerDuration / 1000));
  useStyles$(styles);
  useVisibleTask$(({ track, cleanup }) => {
    track(() => isRunning.value);
    let id: NodeJS.Timer | undefined;
    if (dateTimeStarted.value === null) return;
    if (isRunning.value) {
      id = setInterval(() => {
        const now = new Date();
        const duration = now.getTime() - dateTimeStarted.value!.getTime();
        const remaining = timerDuration - duration - timeElapsed.value;
        if (remaining <= 0) {
          timeLeft.value = 0;
          isRunning.value = false;
        } else {
          timeLeft.value = remaining;
        }
      }, 500);
    }
    cleanup(() => clearInterval(id));
  });
  return (
    <div class="container">
      <CircularProgress
        isRunning={isRunning}
        dateTimeStarted={dateTimeStarted}
        timeLeft={timeLeftString.value}
        timeElapsed={timeElapsed}
        percentageLeft={percentageLeft.value}
      />
    </div>
  );
});
