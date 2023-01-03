import React from "react";
import { useState, useEffect } from "react";

const FetchDat = (hladanie, url) => {
  const [data, setData] = useState([]);
  const [film, setFilm] = useState({});
  const [nacitanie, setNacitanie] = useState(false);
  const [error, setError] = useState({ stav: false, msg: "Error správa" });

  const fetchDat = async () => {
    setError({ stav: false, msg: "" });
    setNacitanie(true);
    let link = `${url}${hladanie}`;
    const resp = await fetch(link);
    const odpoved = await resp.json();
    if (odpoved.Response === "False") {
      console.log("Niečo je zle");
      setError({ stav: true, msg: odpoved.Error });
      return;
    }
    if (odpoved.Response === "True") {
      setNacitanie(false);
      setError({ stav: false });
      const { Search: filmy } = odpoved;
      setData(filmy);
      setFilm(odpoved);
    }
  };

  useEffect(() => {
    fetchDat();
  }, [hladanie]);

  return { data, nacitanie, error, film };
};

export default FetchDat;
