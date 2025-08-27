// src/pages/Result.js
import React from "react";

function Result({ result }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Prediction Result:</h2>
      {result.prediction === 1 ? (
        <>
          <h3 style={{ color: "red" }}>Oops! You have DIABETES.</h3>
          <img src="/diabetes.webp" alt="Diabetes" width="300" />
        </>
      ) : (
        <>
          <h3 style={{ color: "green" }}>Hurrah! You DON'T have diabetes.</h3>
          <img src="/no-diabetes.webp" alt="No Diabetes" width="300" />
        </>
      )}
    </div>
  );
}

export default Result;
