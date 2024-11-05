from flask import Flask, render_template, request
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import pickle
import numpy as np
import os


model = pickle.load(open('model_2.pkl', 'rb'))
vectorizer = pickle.load(open('vectorizer_2.pkl', 'rb'))

app = Flask(__name__)



@app.route('/')
def man():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def home():
    heading = request.form.get('news_heading', '')
    author = request.form.get('author', '')
    source = request.form.get('news_source', '')
    content = request.form.get('news_content', '')

    #  # Replace missing values with empty strings
    # heading = heading if heading else ''
    # author = author if author else ''
    # source = source if source else ''
    # content = content if content else ''

    # combined text
    combined_text = f"{heading} {author} {source} {content}"

    # transform the input using the vectorizer
    transformed_input = vectorizer.transform([combined_text])

    # Predict
    pred = model.predict(transformed_input)

    # arr = np.array([[heading, author, source, content]])
    # pred = model.predict(arr)
    return render_template('index.html', data=pred)


if __name__ == "__main__":
    port = int(os.environ.get('PORT", 5000))
    app.run(host="0.0.0.0", port=port)
    app.run(debug=True)
