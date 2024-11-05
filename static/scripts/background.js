chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "analyzeText") {
        // Send a request to the Flask API to analyze text
        fetch('http://127.0.0.1:5000/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                heading: request.heading,
                content: request.content
            })
        })
        .then(response => response.json())
        .then(result => {
            sendResponse({ prediction: result.prediction });
        })
        .catch(error => console.error('Error:', error));
        return true;  // Required for asynchronous sendResponse
    }
});
