import pandas as pd
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Load dataset
data = pd.read_csv("C:/Users/kanag/Downloads/kaggle_diabetes_updated.csv")

# Fill missing values
data = data.fillna(data.median())

# Split features and label
X = data.drop("Outcome", axis=1)
y = data["Outcome"]

# Scale features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# Tuned Random Forest
rf_model = RandomForestClassifier(
    n_estimators=300,
    max_depth=10,
    min_samples_split=5,
    min_samples_leaf=2,
    max_features='sqrt',
    class_weight='balanced',
    random_state=42,
    n_jobs=-1
)

# Cross-validation
cv_scores = cross_val_score(rf_model, X_train, y_train, cv=5, scoring='accuracy')
print(f"📊 Cross-Validation Accuracy: {cv_scores.mean() * 100:.2f}%")

# Train model
rf_model.fit(X_train, y_train)

# Evaluate on test data
y_pred = rf_model.predict(X_test)
test_accuracy = accuracy_score(y_test, y_pred)
print(f"✅ Test Accuracy: {test_accuracy * 100:.2f}%")
print("\n📝 Classification Report:\n", classification_report(y_test, y_pred))

# Save model and scaler
joblib.dump(rf_model, "balanced_rf_model.pkl")
joblib.dump(scaler, "scaler.pkl")
print("💾 Model and scaler saved successfully!")  
