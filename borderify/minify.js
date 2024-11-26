// Inject Mini's image into the page
const img = document.createElement("img");
img.src = chrome.runtime.getURL("images/Mini.jpg"); // Adjust to match your actual file path
img.style.position = "fixed";
img.style.bottom = "10px";
img.style.left = "10px";
img.style.width = "150px";
img.style.height = "auto";
img.style.zIndex = "1000";
document.body.appendChild(img);
