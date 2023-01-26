import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  console.log(param.id);

  useEffect(() => {
    getMovieDetails();
  });
  /*Getting Pages  */
  const getMovieDetails = async () => {
    const results = await axios.get(
      ` https://api.themoviedb.org/3/movie/${param.id}?api_key=a6f70b95a1d92c7d61b06cacd8730091&language=ar`
    );

    setMovie(results.data);
    console.log(results);
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie w-25"
              src={`https://image.tmdb.org/t/p/w500/` + movie.backdrop_path}
              alt="hu"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم : {movie.original_title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-2">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة : {} </p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story ">قصة الفيلم : {movie.overview} </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              العودة للصفحة الرئيسية
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              {" "}
              مشاهدة الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default MovieDetails;
