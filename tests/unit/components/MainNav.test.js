import { render, screen } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Torres Careers");

    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);

    const navMenuItems = screen.getAllByRole("listitem");

    const itemsText = navMenuItems.map((item) => item.textContent);

    // Compare similarity not exact strict matching
    expect(itemsText).toEqual([
      "Teams",
      "Locations",
      "Life at Torres Co",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
