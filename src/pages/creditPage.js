import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getCredits } from "../api/tmdb-api";
import PageTemplate from "../components/templateCreditListPage";

const TvPage = () => {
  const {  data, error, isLoading, isError }  = useQuery('credits',getCredits )


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const credits = data.results;
  console.log(credits);



  return (
    <PageTemplate
      title="Credits Shows"
      credits={credits}
    />
  );
};

export default TvPage;