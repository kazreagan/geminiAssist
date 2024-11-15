// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendQuery") {
        fetchGeminiResponse(request.query).then(response => {
            sendResponse({ answer: response });
        });
        return true; // indicate asynchronous response
    }
});

// Function to retrieve the API key securely from chrome.storage
function getApiKey(callback) {
    chrome.storage.local.get(['GEMINI_API_KEY'], (result) => {
        callback(result.GEMINI_API_KEY);
    });
}

// Function to fetch response from the Gemini API
async function fetchGeminiResponse(query) {
    return new Promise((resolve) => {
        getApiKey(async (apiKey) => {
            if (!apiKey) {
                console.error("API key not found.");
                resolve("API key is missing. Please set the API key.");
                return;
            }
            try {
                console.log("Sending request to Gemini API with query:", query); // Debugging line
                const response = await fetch("https://api.gemini.com/ai/query", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({ input: query })
                });

                console.log("Response status:", response.status); // Debugging line

                if (!response.ok) {
                    throw new Error(`API returned status ${response.status}`);
                }

                const data = await response.json();
                console.log("Received data:", data); // Debugging line
                resolve(data.answer);
            } catch (error) {
                console.error("Error fetching response:", error);
                resolve("Error communicating with Gemini API");
            }
            
        });
    });
}
