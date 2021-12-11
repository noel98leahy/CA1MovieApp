import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from "../components/templateTvListPage";

const TvPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('shows', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;
  console.log(shows);

  // Redundant, but necessary to avoid app crashing.
  const tvFavorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(tvFavorites))

  return (
    <PageTemplate
      title="Tv Shows"
      shows={shows}
    />
  );
};

export default TvPage;