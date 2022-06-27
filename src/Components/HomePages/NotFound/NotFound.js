import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <Link href="/">
        <button style={styles.back}>Go Back</button>
      </Link>
    </>
  );
};

const styles = {
  back: {
    border: "1px solid ",
    borderRadius: "5px",
    color: "black",
    fontSize: "22px",
  },
};
export default NotFound;
