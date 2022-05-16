import { jest } from "@jest/globals";
import { act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Repro } from "./Repro";

test("hangs when simulated timers are turned on", async () => {
  // Comment out the timer to see the test run
  jest.useFakeTimers().setSystemTime(new Date(2022, 4, 16));
  const screen = render(<Repro />);

  await act(async () => {
    await userEvent.click(screen.getByText("Hello, world!"));
  });
});
