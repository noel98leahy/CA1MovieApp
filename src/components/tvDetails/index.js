import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ShowReviews from "../tvReviews"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ShowDetails = ({ show }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);


  const handleOverview = (overview) => {
    if(overview.trim() == ""){
      return "No Overview was given"
    }
    else{
      return overview
    }
  }
  
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {show.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${show.status}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average}`}
        />
        <Chip label={`Released: ${show.first_air_date}`} />
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Countries" className={classes.chip} color="primary" />
        </li>
        {show.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <ShowReviews show={show} />
      </Drawer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <Paper component="ul" className={classes.root}>
        {show.seasons.map((g) => (
        <><li key={g.name}>
            <Chip label={g.name} className={classes.chip} color="primary" />
            <Typography variant="h6" component="h3">
              Overview of Season
            </Typography>
          
              <Typography variant="subtitle2" component="p">
                <p><b>Episode Count: </b>{g.episode_count}
                <br></br><b>Air Date: </b></p>{g.air_date}
            
              </Typography>
           
            <Typography variant="subtitle2" component="p">
              <p>{handleOverview(g.overview)}</p>
            </Typography>
            </li>
            
              </>

          
        ))}
        

        
      </Paper>
    </>

    
  );
};
export default  ShowDetails;