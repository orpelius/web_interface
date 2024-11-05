// Get all text content from the page
let pageText = document.body.innerText;

// Send the text to the background script for analysis
chrome.runtime.sendMessage({ action: "analyzeText", text: pageText });

// let heading = document.title;