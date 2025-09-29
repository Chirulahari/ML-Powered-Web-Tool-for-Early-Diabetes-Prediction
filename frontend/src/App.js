import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodpressure: "",
    skinthickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: ""
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(""); // <— NEW: holds validation message

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the value is negative, set an error and keep the state
    if (value !== "" && Number(value) < 0) {
      setError("Undefined value");
    } else {
      setError("");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before sending to backend
    const hasNegative = Object.values(formData).some(
      (v) => v === "" || Number(v) < 0
    );
    if (hasNegative) {
      setError("Undefined value");
      setResult(null);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setResult(res.data.prediction);
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">DIABETES PREDICTOR</h1>

      <form onSubmit={handleSubmit} className="form">
        <input type="number" name="pregnancies" placeholder="Number of Pregnancies eg. 0"
          value={formData.pregnancies} onChange={handleChange} />

        <input type="number" name="glucose" placeholder="Glucose (mg/dL) eg. 80"
          value={formData.glucose} onChange={handleChange} />

        <input type="number" name="bloodpressure" placeholder="Blood Pressure (mmHg) eg. 80"
          value={formData.bloodpressure} onChange={handleChange} />

        <input type="number" name="skinthickness" placeholder="Skin Thickness (mm) eg. 20"
          value={formData.skinthickness} onChange={handleChange} />

        <input type="number" name="insulin" placeholder="Insulin Level (IU/mL) eg. 80"
          value={formData.insulin} onChange={handleChange} />

        <input type="number" step="0.1" name="bmi" placeholder="Body Mass Index (kg/m²) eg. 23.1"
          value={formData.bmi} onChange={handleChange} />

        <input type="number" step="0.01" name="dpf" placeholder="Diabetes Pedigree Function eg. 0.52"
          value={formData.dpf} onChange={handleChange} />

        <input type="number" name="age" placeholder="Age (years) eg. 34"
          value={formData.age} onChange={handleChange} />

        <button type="submit" className="predict-btn">Predict</button>
      </form>

      {/* Show error if any */}
      {error && <p className="error" style={{ color: "red" }}>{error}</p>}

      {/* Show result only when no error */}
      {result !== null && !error && (
        <div className="result">
          {result === 1 ? (
            <>
              <h2 className="bad">Oops! You have Diabetes.</h2>
              <img src="/diabetes.webp" alt="Diabetes" className="result-img" />
            </>
          ) : (
            <>
              <h2 className="good">Hurrah! You DON’T have Diabetes.</h2>
              <img src="/no-diabetes.webp" alt="No Diabetes" className="result-img" />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
