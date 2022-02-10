console.log("Background script loaded.");

function redirectYT(requestDetails) {
    console.log("Canceling: " + requestDetails.url);
    return {cancel: true};
}

function printCalls(requestDetails) {
    console.log("Call: " + requestDetails.url);
    return {cancel: false};
}

browser.webRequest.onBeforeRequest.addListener(
    redirectYT,
    {urls: ["*://*.youtube.com/youtubei/*", "*://*.youtube.com/ptracking?*", "*://*.youtube.com/api/*"]},

    ["blocking"]
);
browser.webRequest.onBeforeRequest.addListener(
    printCalls,
    {urls: ["*://*.youtube.com/*"]},
);
