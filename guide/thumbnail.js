let sixteenByNineChoice;
let fourByThreeChoice;
let aspectRatioChoice;
let videoSnapshotChoice;

function showQuestionContainer(id) {
    if (id == "choice") {
        $("#questionContainerChoice").attr("style", " ");
        $("#questionContainerChoice").fadeIn();
    } else if (id == "text") {
        $("#questionContainerText").attr("style", " ");
        $("#questionContainerText").fadeIn();
    } else if (id == "results") {
        $("#questionContainerResults").attr("style", " ");
        $("#questionContainerResults").fadeIn();
    }
}

function hideQuestionContainer(id) {
    if (id == "choice") {
        $("#questionContainerChoice").fadeOut();
    } else if (id == "text") {
        $("#questionContainerText").fadeOut();
    } else if (id == "results") {
        $("#questionContainerResults").fadeOut();
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

function intResults(title, description, one, two, three, four, five, six, buttonText) {
    $("#questionTitleResults").html(title);
    $("#questionDescriptionResults").html(description);
    if (one == "") {
        $("#questionResults1").hide();
    } else {
        $("#questionResults1").html(one);
    }
    if (two == "") {
        $("#questionResults2").hide();
    } else {
        $("#questionResults2").html(two);
    }
    if (three == "") {
        $("#questionResults3").hide();
    } else {
        $("#questionResults3").html(three);
    }
    if (four== "") {
        $("#questionResults4").hide();
    } else {
        $("#questionResults4").html(four);
    }
    if (five == "") {
        $("#questionResults5").hide();
    } else {
        $("#questionResults5").html(five);
    }
    if (six == "") {
        $("#questionResults6").hide();
    } else {
        $("#questionResults6").html(six);
    }
    $("#questionButtonResults").html(buttonText);
    showQuestionContainer("results");
    generateResults();
}

function guideStart() {
    $("#questionContainerChoice").hide();
    $("#questionContainerText").hide();
    $("#questionContainerResults").hide();
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
    if ($(".format").is(":visible")) {
        aspectRatioChoice = number;   
    } else if ($(".threea").is(":visible")) {
        sixteenByNineChoice = number;   
    } else if ($(".threeb").is(":visible")) {
        fourByThreeChoice = number;   
    } else if ($(".threec").is(":visible")) {
        videoSnapshotChoice = number;   
    }
    removeAllChoiceClasses();
    if (number == 'one') {
        $("#questionChoice1").addClass("clickedButton");
        if ($("#questionContainerResults").is(":visible")) {
             
        }
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
            if (aspectRatioChoice == 'one') {
                question3a();
            } else if (aspectRatioChoice == 'two') {
                question3b();
            } else if (aspectRatioChoice == 'three') {
                question3c();
            }
        }, 500);
    } else if ($(".threea").is(":visible")) {
        $(".threea").removeClass("threea");
        hideQuestionContainer("choice");
        setTimeout(function(){
            results();
        }, 500);
    } else if ($(".threeb").is(":visible")) {
        $(".threeb").removeClass("threeb");
        hideQuestionContainer("choice");
        setTimeout(function(){
            results();
        }, 500);
    } else if ($(".threec").is(":visible")) {
        $(".threec").removeClass("threec");
        hideQuestionContainer("choice");
        setTimeout(function(){
            results();
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
    threeaChosen = true;
}

function question3b() {
    intQuestionContainerChoice("Which 4:3 Resolution Do You Want?", "480p", "360p", "90p", "", "", "", "Next", "threeb");
    threebChosen = true;
}

function question3c() {
    intQuestionContainerChoice("Which video snapshot do you want?", "1", "2", "3", "", "", "", "Next", "threec");
    threecChosen = true;
}

function results() {
    generateResults();
    intResults("Your thumbnail is ready!", "Click one of the buttons below to download your thumbnail", "Download", "Open Image", "Copy Image URL", "", "", "", "Restart");
}

function getID(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function generateResults() {
    base1 = 'https://img.youtube.com/vi/';
    videoID = getID(videourl);
    base2 = base1 + videoID + '/';
    if (aspectRatioChoice == 'one') {
        if (sixteenByNineChoice == 'one') {
            base3 = base2 + 'maxresdefault';
        } else if (sixteenByNineChoice == 'two') {
            base3 = base2 + 'mqdefault';
        }
    } else if (aspectRatioChoice == 'two') {
        if (fourByThreeChoice == 'one') {
            base3 = base2 + 'sddefault';
        } else if (fourByThreeChoice == 'two') {
            base3 = base2 + 'hqdefault';
        } else if (fourByThreeChoice == 'three') {
            base3 = base2 + 'default';
        }
    } else if (aspectRatioChoice == 'three') {
        if (videoSnapshotChoice == 'one') {
            base3 = base2 + '1';
        } else if (videoSnapshotChoice == 'two') {
            base3 = base2 + '2';
        } else if (videoSnapshotChoice == 'three') {
            base3 = base2 + '3';
        }
    }
    fullThumbnailURL = base3 + '.jpg';
}