import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
import pickle

#loading the dataset
dataset = pd.read_csv('mtd_2.csv', encoding='ISO-8859-1')

# Check if there are any NaN values 
print(dataset[['Title', 'Content', 'Author', 'Corporate Author']].isnull().sum())

# Fill NaN values with an empty string 
dataset.fillna('', inplace=True)

# Combine the four columns into one
dataset['combined_text'] = (
    dataset['Title'] + ' ' +
    dataset['Content'] + ' ' +
    dataset['Author'] + ' ' +
    dataset['Corporate Author']
)

# Define X and y
X = dataset['combined_text']  # Feature: combined text
y = dataset['Class']  

# Vectorization
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)  # Transform the input text into a TF-IDF representation

# Save the vectorizer
with open('vectorizer_2.pkl', 'wb') as vectorizer_file:
    pickle.dump(vectorizer, vectorizer_file)

# Initialize and fit your model
# model = KNeighborsClassifier() 
model = SVC() 
model.fit(X_vectorized, y)

# Save your fitted model
with open('model_2.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

print("Model fitting complete and saved.")