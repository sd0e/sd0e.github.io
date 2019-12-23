function liveUpdate() {
    nonLowercaseInput = document.getElementById("projectSearch").value;
    input = nonLowercaseInput.toLowerCase();

    // Website Favicons
    var str = "how to easily generate favicons for your website";
    if (str.includes(input)) {
        document.getElementById("article1").style.visibility="visible";
    } else {
        document.getElementById("article1").style.visibility="hidden";
    };

};