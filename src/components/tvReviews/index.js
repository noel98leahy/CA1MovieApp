import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getTVReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function ShowReviews({ show }) {
  const classes = useStyles();
  const [tvReviews, setReviews] = useState([]);

  useEffect(() => {
    getTVReviews(show.id).then((tvReviews) => {
      setReviews(tvReviews);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tvReviews.map((s) => (
            <TableRow key={s.id}>
              <TableCell component="th" scope="row">
                {s.author}
              </TableCell>
              <TableCell >{excerpt(s.content)}</TableCell>
              <TableCell >
                <Link
                  to={{
                    pathname: `/tvReviews/${s.id}`,
                    state: {
                      review: s,
                      show: show,
                    },
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
