console.log("Hack the planet!");

//let pattern = "https://www.youtube.com/watch?v=*";
//
//function cancel(requestDetails) {
//  console.log("Canceling: " + requestDetails.url);
//  return {cancel: true};
//}
//
//// add the listener,
//// passing the filter argument and "blocking"
//browser.webRequest.onBeforeRequest.addListener(
//  cancel,
//    {urls: ["<all_urls>"]},
//  ["blocking"]
//);

function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);

