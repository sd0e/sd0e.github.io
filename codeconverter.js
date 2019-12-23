function convert() {
    var input = document.getElementById("textArea").innerHTML;
    var output = input.replace(/blue/gi, "red");
    document.getElementById("textArea").innerHTML = output;
}