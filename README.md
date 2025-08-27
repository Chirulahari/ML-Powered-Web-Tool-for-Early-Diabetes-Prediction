# 🩺 ML-Powered Web Tool for Early Diabetes Prediction  

![Made with Python](https://img.shields.io/badge/Made%20with-Python-blue?logo=python)  
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green?logo=fastapi)  
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)  

An end-to-end **Machine Learning + Web Application** that predicts the likelihood of diabetes using health parameters such as **Pregnancies, Glucose, Blood Pressure, Skin Thickness, Insulin, BMI, Diabetes Pedigree Function (DPF), and Age**.  

The system is powered by a **Random Forest Classifier**, served via a **FastAPI backend**, and an interactive **React frontend**.  

---

## 📌 Table of Contents
- [Overview](#overview)  
- [Motivation](#motivation)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)   



---

## 📖 Overview
This project provides a web-based tool for **early diabetes prediction**.  
The ML model was trained on the [kaggle_diabetics](https://www.kaggle.com/datasets/mathchi/diabetes-data-set), achieving reliable performance for classification tasks.  

Users can input health metrics, and the system instantly returns a **Diabetic / Non-Diabetic prediction** along with a visual result display.  

---

## 💡 Motivation
Diabetes is a global health concern, and early detection is critical.  
With the power of **Machine Learning**, we can assist in **early diagnosis** to prevent severe complications.  

This project was designed as a complete **end-to-end ML application**: from model training to deployment-ready web tool.  

---

## 📂 Project Structure
    diabetes-prediction/
     │
     ├── backend/ # FastAPI backend
     │ ├── main.py # API endpoints
     │ ├── model.pkl # Trained Random Forest model
     │ ├── requirements.txt # Backend dependencies
     │
     ├── frontend/ # React frontend
     │ ├── src/
     │ │ ├── App.js # Main app (form + results)
     │ │ ├── App.css # Styling and animations
     │ │ ├── index.js # Entry point
     │ │ ├── InputForm.js # Form component (modularized)
     │ │ ├── Result.js # Result display component
     │ └── public/
     │ ├── wall.jpg # Background
     │ ├── diabetes.webp # Diabetic result image
     │ ├── no-diabetes.webp # Non-Diabetic result image
     │
     ├── model/ # ML model code
     │ ├── train_model.py # Training + saving the model
     │ ├── kaggle_diabetes.csv # Dataset
     │
     └── README.md # Project documentation


---

## 🛠 Technologies Used

- **Python (scikit-learn, pandas, joblib, FastAPI)** → Model training + API backend  
- **React.js** → Frontend user interface  
- **Axios** → API requests  
- **Tailwind CSS / Custom CSS** → Styling  
- **Uvicorn** → FastAPI server  
- **Joblib** → Model serialization  

---
## ⚙️ Installation

    ### 🔹 Frontend
    ```bash
cd frontend
npm install
npm start
    ### 🔹 Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


---

## 🚀 Usage

Enter values for:  
- Pregnancies  
- Glucose  
- Blood Pressure  
- Skin Thickness  
- Insulin  
- BMI  
- Diabetes Pedigree Function (DPF)  
- Age  

Click **Predict**  

Get instant result:  
- ✅ *Non-Diabetic* → green message + healthy image  
- ❌ *Diabetic* → red message + diabetes alert image  
