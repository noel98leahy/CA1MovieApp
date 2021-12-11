import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";

import { getSeasons } from "../api/tmdb-api";


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "rgb(204, 204, 0)",
    },
    media: { height: 300 },
  
    formControl: {
      margin: theme.spacing(1),
      minWidth: 220,
      backgroundColor: "rgb(255, 255, 255)",
    },
  }));


  export default function SeasonsDetails({ show }) {
    const classes = useStyles();
    const [seasons, setSeasons]
  
    

  return (
<>
     <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Episodes" className={classes.chip} color="primary" />
        </li>
        {season.episodes.map((g) => (
          <li key={g.name}>
            <Chip label={g.episode_number} className={classes.chip} />
          </li>
          
        ))}
        </Paper>
    </>
  );
  }

