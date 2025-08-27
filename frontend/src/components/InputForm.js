<form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
  <h1 style={{ color: "white", textShadow: "2px 2px 4px black" }}>
    Diabetes Predictor
  </h1>
  {Object.keys(form).map((key) => (
    <div key={key} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        name={key}
        placeholder={key}
        value={form[key]}
        onChange={handleChange}
        required
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid green",
          width: "300px",
        }}
      />
    </div>
  ))}
  <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
    Predict
  </button>
</form>
