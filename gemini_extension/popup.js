document.getElementById("sendBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value; 

    // Send message to background.js
    chrome.runtime.sendMessage({ action: "sendQuery", query: inputText }, (response) => {
        document.getElementById("responseText").innerText = response.answer || "No response";
    });
});

fetch('http://localhost:3000/endpoint')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));