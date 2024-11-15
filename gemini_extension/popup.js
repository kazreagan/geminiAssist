document.getElementById("sendBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value; 

    // Send message to background.js
    chrome.runtime.sendMessage({ action: "sendQuery", query: inputText }, (response) => {
        document.getElementById("responseText").innerText = response.answer || "No response";
    });
});
