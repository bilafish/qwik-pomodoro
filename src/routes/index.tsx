import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Page, Title } from './styles.css'
import { Timer } from "~/components/timer";

export default component$(() => {
  return (
    <Page>
      <Title>pomodoro</Title>
      <Timer/>
    </Page>
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
