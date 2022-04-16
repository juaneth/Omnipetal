window.addEventListener("load", function load() {
    const loader = document.getElementById("loader");
    setTimeout(function() {
        loader.classList.add("fadeOut");
    }, 750);
});

if (os.platform() == "darwin") {
    try {
        document.getElementsByTagName("head")[0].insertAdjacentHTML(
            "beforeend",
            "<link rel=\"stylesheet\" href=\"page-loader macOS.css\" />");
    } catch {

    }
}