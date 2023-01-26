import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComp from "./PaginationComp";

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="text-center m-5 p-5"> لا يوجد أفلام ...!</h2>
      )}
      {movies.length >= 1 ? (
        <PaginationComp getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default MoviesList;
