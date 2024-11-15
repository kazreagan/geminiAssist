chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "modifyPage") {
        document.body.innerHTML += `<p>${request.content}</p>`;
        senderResponse({ status: "Sontent added to page"});
    }
});