import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    getAllMovies();
  }, []);

  /*Getting All  Movies */
  const getAllMovies = async () => {
    const results = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a6f70b95a1d92c7d61b06cacd8730091&language=ar"
    );

    setMovies(results.data.results);
    setPageCount(results.data.total_pages);
  };

  /* Search in API */

  const moviesSearch = async (searchWord) => {
    if (searchWord === "") {
      getAllMovies();
    } else {
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=a6f70b95a1d92c7d61b06cacd8730091&query=${searchWord}&language=ar&page=1&include_adult=false`
      );
      setMovies(result.data.results);
      setPageCount(result.data.total_pages);
    }
  };

  /*Getting Pages  */
  const getPage = async (pageId) => {
    const results = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a6f70b95a1d92c7d61b06cacd8730091&language=ar&page=${pageId}`
    );

    setMovies(results.data.results);
    setPageCount(results.data.total_pages);
  };
  return (
    <div className="font color-body ">
      <NavBar moviesSearch={moviesSearch} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
