# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np

# Load model
model = joblib.load("C:/Users/kanag/OneDrive/Desktop/Updated/model/model.pkl")

# Input schema
class InputData(BaseModel):
    pregnancies: int
    glucose: float
    bloodpressure: float
    skinthickness: float
    insulin: float
    bmi: float
    dpf: float
    age: int

app = FastAPI()

# ✅ Add CORS middleware so frontend can connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Diabetes Prediction API is running!"}

@app.post("/predict")
def predict(data: InputData):
    features = np.array([[data.pregnancies, data.glucose, data.bloodpressure,
                          data.skinthickness, data.insulin, data.bmi, data.dpf, data.age]])
    prediction = model.predict(features)[0]
    return {"prediction": int(prediction)}
