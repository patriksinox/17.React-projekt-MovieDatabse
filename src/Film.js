import React from "react";
import { Link, useParams } from "react-router-dom";
import FetchDat from "./FetchDat";
import Footer from "./Footer";
import { Container, Row, Col, Spinner } from "reactstrap";

const APIkluc = process.env.REACT_APP_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${APIkluc}&i=`;

const Film = () => {
  const { imdbID } = useParams();
  const { film, nacitanie } = FetchDat(imdbID, url);
  const {
    Title,
    Released,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
    Poster,
    imdbRating,
  } = film;

  return (
    <>
      <Container>
        <Row md="2" sm="2" xs="1" className="sekcia-film">
          <Col className="text-center">
            <img src={Poster} alt={Title} />
          </Col>
          <Col className="text-left">
            <h1 className="mt-4 text-center">{Title}</h1>
            <div className="mt-3">
              <article>
                <div className="obal">Rok vydania:</div> {Released} 🎆
              </article>
              <article>
                <div className="obal">Režisér:</div> {Director} 👨‍💼
              </article>
              <article>
                <div className="obal">Žáner:</div> {Genre} 🛣️
              </article>
              <article>
                <div className="obal">Herci:</div> {Actors} 👱‍♀️👨
              </article>
              <article>
                <div className="obal">Ocenenia:</div> {Awards} 🏆
              </article>
              <article>
                <div className="obal">IMDB hodnotenie:</div> {imdbRating} 🏅
              </article>
            </div>
          </Col>
        </Row>
        <Col className="text-center mt-4">
          <h3>Príbeh</h3>
          <p className="film-pribeh">{Plot}</p>
        </Col>

        <div className="text-center mt-5 mb-5">
          <Link to="/" className="btn btn-primary">
            Naspäť na filmy
          </Link>
        </div>
        {nacitanie && <Spinner></Spinner>}
      </Container>

      <Footer />
    </>
  );
};

export default Film;
