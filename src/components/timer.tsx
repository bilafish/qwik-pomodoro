import {
  component$,
  useStyles$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./timer.css?inline";
import { CircularProgress } from "./circular-progress";

function msToMMSS(ms: number) {
  const min = Math.floor((ms / 1000 / 60) % 60);
  const sec = Math.floor((ms / 1000) % 60);
  const minString = min < 10 ? "0" + min : min;
  const secString = sec < 10 ? "0" + sec : sec;
  return minString + ":" + secString;
}

export const Timer = component$(() => {
  const timerDuration = 10000;
  const isRunning = useSignal(false);
  const dateTimeStarted = useSignal(null);
  const timeElapsed = useSignal(0);
  const timeLeft = useSignal(msToMMSS(timerDuration));
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
        timeLeft.value = remaining > 0 ? msToMMSS(remaining) : msToMMSS(0);
      }, 500);
    }
    cleanup(() => clearInterval(id));
  });
  return (
    <div class="container">
      <CircularProgress
        isRunning={isRunning}
        dateTimeStarted={dateTimeStarted}
        timeLeft={timeLeft.value}
        timeElapsed={timeElapsed}
      />
    </div>
  );
});
