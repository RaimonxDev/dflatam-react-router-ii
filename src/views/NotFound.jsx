import React from 'react'
import { Link } from "react-router-dom";
import notfound from "../assets/psyduck.webp";
import { Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Image src={notfound} alt="notfound" fluid />
      <Link to="/" className="text-white">
        Home
      </Link>
    </>
  );
};

export default NotFound