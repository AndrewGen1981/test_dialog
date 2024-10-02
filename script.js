const dialog = document.querySelector("dialog")


document.querySelectorAll("button[data-action]")
.forEach(btn => btn.addEventListener("click", () => toggleDialog(btn)))


function toggleDialog(btn) {
    const { action } = btn?.dataset || {}

    if (!action || !dialog) return

    if (action === "open") dialog.showModal()
    if (action === "close") dialog.close()
}



document.addEventListener('DOMContentLoaded', function() {
    var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
  
    if(ios) {
        if (!safari) {
            // ios webview
            document.getElementById("header").style.display = "none";
            document.getElementById("nav-toggle").style.display = "none";
            document.getElementById("footer").style.display = "none";
        };
    };
}, false);