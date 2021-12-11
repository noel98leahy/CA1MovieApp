import React from "react";
import TvCard from "../tvShowsCard";
import Grid from "@material-ui/core/Grid";

const ShowList = ( {shows, action }) => {
  let showCards = shows.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvCard key={s.id} show={s} action={action} />
    </Grid>
  ));
  return showCards;
};

export default ShowList;