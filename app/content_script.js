chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.action == "getDOM") {
        var html = document.all[0];
        sendResponse({ dom: html.innerHTML });
    }
    else
        sendResponse({}); // Send nothing..
});

