import React from "react";
import { Link } from "react-router-dom";
import cat from "./fotky/cat.jpg";
const Error = () => {
  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">Error 404</h1>
        <h2>Táto stránka neexistuje!</h2>
        <div className="macka ">
          <img src={cat} alt="" className="mt-5 mb-5 img-fluid" />
        </div>
      </div>
      <div className="text-center mt-5 mb-5">
        <Link to="/" className="btn btn-primary">
          Uteč pred mačkou!
        </Link>
      </div>
    </>
  );
};

export default Error;
