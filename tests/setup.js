// Configuration to run before every test
import { cleanup } from "@testing-library/vue";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

expect.extend(matchers);

// Ensure each test is cleaned up/prevent pollution
afterEach(() => {
  // Tear down v-dom + components
  cleanup();
});
