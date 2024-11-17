// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendQuery") {
        fetchGeminiResponse(request.query).then(response => {
            sendResponse({ answer: response });
        });
        return true; //indicate asynchronous response
    }
});

//function to retrieve the API key securely from chrome.storage
function getApiKey(callback) {
    chrome.storage.local.get(['GEMINI_API_KEY'], (result) => {
        if (chrome.runtime.lastError) {
            console.error("Error retrieving API key:", chrome.runtime.lastError);
            callback(null); //handle missing key
        } else {
            callback(result.GEMINI_API_KEY);
        }
    });
}

//function to fetch response from the Gemini API
async function fetchGeminiResponse(query) {
    return new Promise((resolve) => {
        getApiKey(async (apiKey) => {
            if (!apiKey) {
                console.error("API key not found.");
                resolve("API key is missing. Please set the API key.");
                return;
            }

            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
            
            try {
                console.log("Sending request to Gemini API with query:", query); //debugging
                const response = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: query }] }]
                    })
                });

                console.log("Response status:", response.status); //debugging

                if (!response.ok) {
                    throw new Error(`API returned status ${response.status}`);
                }

                const data = await response.json();
                console.log("Received data:", data); //debugging
                resolve(data.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
            } catch (error) {
                console.error("Error fetching response:", error);
                resolve("Error communicating with Gemini API");
            }
        });
    });
}
