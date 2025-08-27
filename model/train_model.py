import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
data = pd.read_csv("C:/Users/kanag/OneDrive/Desktop/Updated/model/kaggle_diabetes.csv")

X = data.drop("Outcome", axis=1)
y = data["Outcome"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train RandomForest
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save trained model
joblib.dump(model, "model.pkl")
print("✅ Model saved as model.pkl")
