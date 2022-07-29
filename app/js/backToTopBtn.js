// back to top button
// define variables
var btt = document.getElementById("back-to-top"),
  body = document.body,
  docElem = document.documentElement,
  offset = 100,
  scrollPos,
  docHeight;
isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1; // checks the user agent and if the posittion of firefox is higher than -1 it equals to true

// calculates the document height
docHeight = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  docElem.clientHeight,
  docElem.scrollHeight,
  docElem.offsetHeight
);
// fallback offset if docheight is undefined
if (docHeight != "undefined") {
  offset = docHeight / 4;
}

// add event listneners for scroll
window.addEventListener("scroll", function (event) {
  scrollPos = body.scrollTop || docElem.scrollTop;

  btt.className = scrollPos > offset ? "visible" : ""; // checks if the scroll pos is higher than the offset while true we add the class of visible to the button otherwise we add nothing
});

// add click event
btt.addEventListener("click", function (event) {
  event.preventDefault();

  if (isFirefox) {
    docElem.scrollTop = 0;
  } else {
    body.scrollTop = 0;
  }
});
