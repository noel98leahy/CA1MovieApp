import React from "react";
import Show from "../tvCard/";
import Grid from "@material-ui/core/Grid";

const NewTvShowList = ( {shows }) => {
    let showCards = shows.map((s) => (
      <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Show key={s.id} show={s} />
      </Grid>
    ));
    return showCards;
};

export default NewTvShowList;