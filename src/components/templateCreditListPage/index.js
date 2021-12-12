import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";



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
  
}));

const Credits = ({ movies }) => {  // Don't miss this!
  const classes = useStyles();
 
  
  return (
    <>
      <li>
          <Paper component="ul" className={classes.root}>
              
          </Paper>
      </li>
    </>

    
  );
};
export default  Credits;