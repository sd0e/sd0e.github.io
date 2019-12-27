function liveUpdate() {
    nonLowercaseInput = document.getElementById("projectSearch").value;
    input = nonLowercaseInput.toLowerCase();

    var str = "make a micro sd card bootable again";
    if (str.includes(input)) {
        document.getElementById("article1").style.display="inline";
    } else {
        document.getElementById("article1").style.display="none";
    };

    var str = "ranking reddit apps for android";
    if (str.includes(input)) {
        document.getElementById("article2").style.display="inline";
    } else {
        document.getElementById("article2").style.display="none";
    };
};