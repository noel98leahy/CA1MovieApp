let tvId = 88329; // Hawkeye Tv Show
let show;
let reviews;

describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((tvDetails) => {
        show = tvDetails;
        return tvDetails.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/shows/${show.id}`);
  });
  describe("Base tests", () => {
    it("should display show title in the page header", () => {
      cy.get("h3").contains(show.name);
    });
    it("should display the show's details", () => {
        cy.get("h3").contains("Overview");
        cy.get("h3").next().contains(show.overview);
        cy.get("ul")
          .eq(1)
          .within(() => {
            const genreChips = show.genres.map((g) => g.name);
            genreChips.unshift("Genres");
            cy.get("span").each(($card, index) => {
              cy.wrap($card).contains(genreChips[index]);
            });
          });
      });
    it("should display the posters on the left", () => {
      cy.get("img").should('be.visible').should("have.css", "left")
    });
  });
});