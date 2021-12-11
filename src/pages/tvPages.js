import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVShows } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
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
  const playlists = shows.filter(m => m.playlists)
  localStorage.setItem('playlists', JSON.stringify(playlists))
  const addToPlaylist = (playlists) => true 

  return (
    <PageTemplate
      title="Tv Shows"
      shows={shows}
      action={(show) => {
        return <AddToPlaylistIcon show={show} />
      }}
    />
  );
};

export default TvPage;