function showQuestionContainer(id) {
    if (id == "choice") {
        $("#questionContainerChoice").attr("style", " ");
        $("#questionContainerChoice").fadeIn();
    } else if (id == "text") {
        $("#questionContainerText").attr("style", " ");
        $("#questionContainerText").fadeIn();
    }
}

function hideQuestionContainer(id) {
    if (id == "choice") {
        $("#questionContainerChoice").fadeOut();
    } else if (id == "text") {
        $("#questionContainerText").fadeOut();
    }
}

function intQuestionContainerText(title, inputPlaceholder, buttonText, str) {
    $("#questionTitleText").html(title);
    $("#questionInput").attr("placeholder", inputPlaceholder);
    $("#questionButtonText").html(buttonText);
    $("#questionContainerText").addClass(str);
    showQuestionContainer("text");
}

function intQuestionContainerChoice(title, one, two, three, four, five, six, buttonText, str) {
    $("#questionTitleChoice").html(title);
    if (one == "") {
        $("#questionChoice1").hide();
    } else {
        $("#questionChoice1").html(one);
    }
    if (two == "") {
        $("#questionChoice2").hide();
    } else {
        $("#questionChoice2").html(two);
    }
    if (three == "") {
        $("#questionChoice3").hide();
    } else {
        $("#questionChoice3").html(three);
    }
    if (four== "") {
        $("#questionChoice4").hide();
    } else {
        $("#questionChoice4").html(four);
    }
    if (five == "") {
        $("#questionChoice5").hide();
    } else {
        $("#questionChoice5").html(five);
    }
    if (six == "") {
        $("#questionChoice6").hide();
    } else {
        $("#questionChoice6").html(six);
    }
    $("#questionButtonChoice").html(buttonText);
    $("#questionContainerChoice").addClass(str);
    showQuestionContainer("choice");
}

function guideStart() {
    $("#questionContainerChoice").hide();
    $("#questionContainerText").hide();
    question1();
}

function removeAllChoiceClasses() {
    $("#questionChoice1").removeClass("clickedButton");
    $("#questionChoice2").removeClass("clickedButton");
    $("#questionChoice3").removeClass("clickedButton");
    $("#questionChoice4").removeClass("clickedButton");
    $("#questionChoice5").removeClass("clickedButton");
    $("#questionChoice6").removeClass("clickedButton");
}

function buttonChoice(number) {
    numberChoice = number;
    removeAllChoiceClasses();
    if (number == 'one') {
        $("#questionChoice1").addClass("clickedButton");
    } else if (number == 'two') {
        $("#questionChoice2").addClass("clickedButton");
    } else if (number == 'three') {
        $("#questionChoice3").addClass("clickedButton");
    } else if (number == 'four') {
        $("#questionChoice4").addClass("clickedButton");
    } else if (number == 'five') {
        $("#questionChoice5").addClass("clickedButton");
    } else if (number == 'six') {
        $("#questionChoice6").addClass("clickedButton");
    }
}

function nextQuestion() {
    if ($(".youtubeurl").is(":visible")) {
        videourl = $("#questionInput").val();
        $(".youtubeurl").removeClass("youtubeurl");
        hideQuestionContainer("text");
        setTimeout(function(){
            question2();
        }, 500);
    } else if ($(".format").is(":visible")) {
        $(".format").removeClass("format");
        hideQuestionContainer("choice");
        setTimeout(function(){
            if (numberChoice = 'one') {
                question3a();
            } else if (numberChoice = 'two') {
                question3b();
            } else if (numberChoice = 'three') {
                question3c();
            }
        }, 500);
    }
}

function question1() {
    intQuestionContainerText("What's the URL of the YouTube video?", "youtube video url", "Next", "youtubeurl");
}

function question2() {
    intQuestionContainerChoice("Which Format Do You Want?", "16:9", "4:3", "Video Snapshot", "", "", "", "Next", "format");
}

function question3a() {
    intQuestionContainerChoice("Which 16:9 Resolution Do You Want?", "720p", "180p", "", "", "", "", "Next", "threea");
}

function question3b() {
    intQuestionContainerChoice("Which 4:3 Resolution Do You Want?", "480p", "360p", "90p", "", "", "", "Next", "threeb");
}