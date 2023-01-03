import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Film from "./Film";
import Filmy from "./Filmy";
import Error from "./Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Filmy />} />
          <Route path={`/film/:imdbID`} element={<Film />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
