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

  describe("when the user logs in", () => {
    it("displays user profile image", () => {
      render(MainNav);

      // Search for image by alt text regex
      const profileImage = screen.queryByRole("img", {
        name: /profile image/i,
      });

      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      //
      expect(loginButton).toBeInTheDocument();
    });
  });
});
