import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
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
    it("displays user profile image", async () => {
      render(MainNav);

      // Search for image by alt text regex
      let profileImage = screen.queryByRole("img", {
        name: /profile image/i,
      });

      let loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      // Login text exists initially
      expect(loginButton).toBeInTheDocument();
      expect(profileImage).not.toBeInTheDocument();

      // Simulate click to log user in
      await userEvent.click(loginButton);

      // Have to re query the document
      profileImage = screen.queryByRole("img", {
        name: /profile image/i,
      });

      expect(profileImage).toBeInTheDocument();
      expect(loginButton).not.toBeInTheDocument();

      // Simulate logout
      await userEvent.click(profileImage);

      loginButton = screen.getByRole("button", {
        name: /sign in/i,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
