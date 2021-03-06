import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import TVReviewPage from "./pages/showReviewPage";
import SiteHeader from './components/siteHeader';
import UpComingMoviePage from "./pages/upComingMoviesPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvPage from './pages/tvPages';
import TvDetailsPage from './pages/tvDetailsPage';
import TvNewShowsPage from './pages/newTvShowsPage';
import CreditPage from './pages/creditPage';





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
            {" "}
      <Switch>
      <Route exact path="/reviews/form" component={AddMovieReviewPage} />
      <Route exact path="/movies/upcoming" component={UpComingMoviePage} />
      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
      <Route path="/reviews/:id" component={MovieReviewPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies/:id" component={MoviePage} />
      <Route exact path="/movies/:id/credits" component={CreditPage} />
      
      
      <Route exact path="/shows" component={TvPage}/>
      <Route path="/shows/popular" component={TvNewShowsPage}/>


      <Route exact path="/shows/:id" component={TvDetailsPage} />
      <Route path="/tvReviews/:id" component={TVReviewPage} />
      
      <Redirect from="*" to="/" />
      </Switch>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
