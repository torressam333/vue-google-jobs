import { render, screen } from "@testing-library/vue";
import ActionButton from "@testing-library/vue";

describe("ActionButton", () => {
  it("displays text passed in as a prop", () => {
    render(ActionButton);

    const buttonText = screen.getByText("Submit");

    expect(buttonText).toBe("Submit");
  });
});
