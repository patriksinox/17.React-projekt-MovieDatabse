import React from "react";
import { useState } from "react";
import FetchDat from "./FetchDat";
import Footer from "./Footer";
import { Container, Row, Col, Input, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
const ziadnaFotka =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const APIkluc = process.env.REACT_APP_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${APIkluc}&s=`;

function Filmy() {
  const [hladanie, setHladanie] = useState("Game");
  const { data, nacitanie, error } = FetchDat(hladanie, url);

  return (
    <>
      <h1 className="text-center mt-5">OMDb API - React projekt</h1>
      <Container className="mb-5">
        <section>
          <h2 className="mt-5">Hľadaj film</h2>
          <Input
            placeholder={hladanie}
            className="mt-2"
            onChange={(e) => setHladanie(e.target.value)}
          />
          {error.stav && <div className="error-message">{error.msg}</div>}
        </section>
        {nacitanie && <Spinner></Spinner>}
        <Row md="4" sm="2" xs="1">
          {data.map((film) => {
            const { Title, Year, imdbID, Poster } = film;
            return (
              <Col key={imdbID} className="text-center mt-4 film">
                <Link to={`/film/${imdbID}`}>
                  <img
                    src={Poster === "N/A" ? ziadnaFotka : Poster}
                    alt={Title}
                  />
                </Link>
                <h5 className="mt-3">
                  {Title} ({Year})
                </h5>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Filmy;
