// Fixes HTML/CSS Checker links
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    document.getElementById("html-validate").href = "https://validator.w3.org/nu/?doc=" + encodeURIComponent(currentUrl);
    document.getElementById("css-validate").href = "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(currentUrl);
});
