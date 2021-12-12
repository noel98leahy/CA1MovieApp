let shows;

const filterByTitle = (tvList, string) =>
tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
tvList.filter((m) => m.genre_ids.includes(genreId));

const filterByGenreAndTitle = (tvList, genreId, string) =>
tvList.filter((m) => m.genre_ids.includes(genreId) && m.name.toLowerCase().search(string) !== -1);

describe("Home Page ", () => {
    before(() => {
      // Get tv shows from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
          "TMDB_KEY"
        )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          shows = response.results
        })
    })
    beforeEach(() => {
      cy.visit("/shows")
    });
  
    
      describe("Base test", () => {
        it("displays page header", () => {
          cy.get("h3").contains("Tv Shows");
          cy.get("h1").contains("Filter the tv shows");
        });
      });
    })
  
    describe("Filtering", () => {
      describe("By tv shows name", () => {
          it("should only display shows with h in the title", () => {
            let searchString = "h";
            let matchingShows = filterByTitle(shows, searchString);
            cy.get("#filled-search").clear().type(searchString); // Enter h in text box
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingShows.length
            );
            
          })
          it("should only display tv shows with o in the title", () => {
            let searchString = "o";
            let matchingShows = filterByTitle(shows, searchString);
            cy.get("#filled-search").clear().type(searchString); // Enter m in text box
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingShows.length
            );
            
          });
          it("should only display movies with xyz in the tile", () => {
              let searchString = 'xyz';
              let matchingShows = filterByTitle(shows, searchString);
              cy.get('#filled-search').clear().type(searchString); // Enter m in tehxt box
              cy.get(".MuiCardHeader-content").should(
                  "have.length",
                  matchingShows.length
                );
          });
        });
        describe("By tv shows genre", () => {
          it("should display shows with the specified genre only", () => {
             const selectedGenreId = 35;
             const selectedGenreText = "Comedy";
             const matchingShows = filterByGenre(shows, selectedGenreId);
             cy.get('#filled-search').clear()
             cy.get("#genre-select").click();
             cy.get("li").contains(selectedGenreText).click();
             cy.get(".MuiCardHeader-content").should(
               "have.length",
               matchingShows.length
             );
             
           });
         });
         describe("By tv shows genre and title", () => {
          it("should display shows with the specified genre only and tilte containing m", () => {
             let searchString = "m";
             const selectedGenreId = 35;
             const selectedGenreText = "Comedy";
             const matchingShows = filterByGenreAndTitle(shows, selectedGenreId,searchString );
             cy.get('#filled-search').clear()
             cy.get("#genre-select").click();
             cy.get("li").contains(selectedGenreText).click();
             cy.get('#filled-search').clear().type(searchString); // Enter m in tehxt box
             cy.get(".MuiCardHeader-content").should(
               "have.length",
               matchingShows.length
             );
            
           });
         });
    });