import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getNewTVShows } from "../api/tmdb-api";
import PageTemplate from "../components/templateTvListPage";

const TvNewShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getNewTVShows)

  console.log(data)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;
  console.log(shows)


  // Redundant, but necessary to avoid app crashing.
  const tvFavorites = shows.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(tvFavorites))

  return (
    <PageTemplate
      title="Popular TV Shows"
      shows={shows}
    />
  );
};

export default TvNewShowsPage;