import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pomodoro App",
  meta: [
    {
      name: "description",
      content:
        "Pomdoro is a simple and effective app that helps you boost your productivity and focus. Pomdoro uses the Pomodoro Technique, a time management method that breaks down your work into 25-minute intervals of focused work followed by 5-minute breaks. You can customize your work and break durations, track your progress, and get notified when it’s time to switch modes. Pomdoro is the perfect app for anyone who wants to get more done in less time and enjoy a balanced work-life rhythm.",
    },
  ],
};
