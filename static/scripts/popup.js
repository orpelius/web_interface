
// document.getElementById('analyse-btn').addEventListener("click", (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

    // Trim the inputs to ensure no whitespace-only values are considered valid
    // const news_heading = document.getElementById('news_heading').value.trim();
    // const news_content = document.getElementById('news_content').value.trim();

    // Check if both fields are filled out
    // if (news_heading && news_content) {
    //     var formData = new FormData();
    //     formData.append('news_heading', news_heading);
    //     formData.append('news_content', news_content);

    //     fetch('http://127.0.0.1:5000/analyse', {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(response => response.json()) 
    //     .then(result => {
    //         // parse the returned html and update the dom
    //         const parser = new DOMParser();
    //         const doc = parser.parseFromString(html, 'text/html')
    //         const result_text = doc.getElementById('results-text').textContent;

    //         // Update the results-text with the prediction
    //         document.getElementById('results-text').textContent = result.prediction;

    //         // showing the news article still
    //         news_heading.textContent = news_heading;
    //         news_content.textContent = news_content

    //         // Show the result and feedback sections
    //         document.getElementById('result-section').classList.remove('hidden');
    //         document.getElementById('feedback-section').classList.remove('hidden');
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // } else {
    //     alert("Please enter both news heading and the content to be analysed.");
    // }
// });

// Handling the clear button
document.getElementById('clear-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form behavior

    document.getElementById('news_heading').value = '';
    document.getElementById('news_content').value = '';
    document.getElementById('source').value = '';
    document.getElementById('author').value = '';

});

// Handling feedback submission
document.getElementById('feedback-btn').addEventListener('click', () => {
    const feedback = document.getElementById('feedback').value.trim();
    if (feedback) {
        // Handle feedback submission (e.g., send it to a server or database)
        alert('Thank you for your feedback!');

        // Clear the feedback input
        document.getElementById('feedback').value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
});
