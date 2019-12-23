function liveUpdate() {
    nonLowercaseInput = document.getElementById("projectSearch").value;
    input = nonLowercaseInput.toLowerCase();

    // Featured Auto-Removal

    var str = "";
    if (str !== input) {
        document.getElementById("Featured").style.display="none";
        document.getElementById("GameProxyFeatured").style.display="none";
        document.getElementById("WaterdFeatured").style.display="none";
        document.getElementById("LargeTextDisplayerFeatured").style.display="none";
    } else {
        document.getElementById("Featured").style.display="block";
        document.getElementById("GameProxyFeatured").style.display="block";
        document.getElementById("WaterdFeatured").style.display="block";
        document.getElementById("LargeTextDisplayerFeatured").style.display="block";
    }

    // Auracoin
    var str = "auracoin";
    if (str.includes(input)) {
        document.getElementById("Auracoin").style.display="block";
    } else {
        document.getElementById("Auracoin").style.display="none";
    };

    // Aurora Webcount
    var str = "aurora webcount app";
    if (str.includes(input)) {
        document.getElementById("AuroraWebcount").style.display="block";
    } else {
        document.getElementById("AuroraWebcount").style.display="none";
    };

    // Cool Home Page
    var str = "cool home page";
    if (str.includes(input)) {
        document.getElementById("CoolHomePage").style.display="block";
    } else {
        document.getElementById("CoolHomePage").style.display="none";
    };

    // GameProxy
    var str = "gameproxy";
    if (str.includes(input)) {
        document.getElementById("GameProxy").style.display="block";
    } else {
        document.getElementById("GameProxy").style.display="none";
    };

    // GenerationCheck
    var str = "generationcheck";
    if (str.includes(input)) {
        document.getElementById("GenerationCheck").style.display="block";
    } else {
        document.getElementById("GenerationCheck").style.display="none";
    };


    // IP
    var str = "ip";
    if (str.includes(input)) {
        document.getElementById("IP").style.display="block";
    } else {
        document.getElementById("IP").style.display="none";
    };

    // Large Text Displayer
    var str = "large text displayer";
    if (str.includes(input)) {
        document.getElementById("LargeTextDisplayer").style.display="block";
    } else {
        document.getElementById("LargeTextDisplayer").style.display="none";
    };

    // MacroClip Search
    var str = "macroclip search";
    if (str.includes(input)) {
        document.getElementById("MacroClipSearch").style.display="block";
    } else {
        document.getElementById("MacroClipSearch").style.display="none";
    };

    // Mandarin Learning
    var str = "mandarin learning";
    if (str.includes(input)) {
        document.getElementById("MandarinLearning").style.display="block";
    } else {
        document.getElementById("MandarinLearning").style.display="none";
    };

    // Matera
    var str = "matera";
    if (str.includes(input)) {
        document.getElementById("Matera").style.display="block";
    } else {
        document.getElementById("Matera").style.display="none";
    };

    // Subnodal
    var str = "subnodal website";
    if (str.includes(input)) {
        document.getElementById("Subnodal").style.display="block";
    } else {
        document.getElementById("Subnodal").style.display="none";
    };

    // Terminal Bio Website
    var str = "terminal bio website";
    if (str.includes(input)) {
        document.getElementById("TerminalBio").style.display="block";
    } else {
        document.getElementById("TerminalBio").style.display="none";
    };

    // This Website
    var str = "this website";
    if (str.includes(input)) {
        document.getElementById("ThisWebsite").style.display="block";
    } else {
        document.getElementById("ThisWebsite").style.display="none";
    };

    // Thumbnail Downloader
    var str = "thumbnail downloader";
    if (str.includes(input)) {
        document.getElementById("ThumbnailDownloader").style.display="block";
    } else {
        document.getElementById("ThumbnailDownloader").style.display="none";
    };

    // Waterd
    var str = "waterd";
    if (str.includes(input)) {
        document.getElementById("Waterd").style.display="block";
    } else {
        document.getElementById("Waterd").style.display="none";
    };

    // Letter A
    if (document.getElementById("Auracoin").style.display == "none") {
        if (document.getElementById("AuroraWebcount").style.display == "none") {
            document.getElementById("A").style.display="none";
        };
    } if (document.getElementById("Auracoin").style.display == "block") {
        document.getElementById("A").style.display="block";
    } else if (document.getElementById("AuroraWebcount").style.display == "block") {
        document.getElementById("A").style.display="block";
    };

    // Letter C
    if (document.getElementById("CoolHomePage").style.display == "none") {
        document.getElementById("C").style.display="none";
    } if (document.getElementById("CoolHomePage").style.display == "block") {
        document.getElementById("C").style.display="block";
    };

    // Letter G
    if (document.getElementById("GameProxy").style.display == "none") {
        if (document.getElementById("GenerationCheck").style.display == "none") {
            document.getElementById("G").style.display="none";
        };
    } if (document.getElementById("GameProxy").style.display == "block") {
        document.getElementById("G").style.display="block";
    } else if (document.getElementById("GenerationCheck").style.display == "block") {
        document.getElementById("G").style.display="block";
    };
    
    // Letter I
    if (document.getElementById("IP").style.display == "none") {
        document.getElementById("I").style.display="none";
    } if (document.getElementById("IP").style.display == "block") {
        document.getElementById("I").style.display="block";
    };

    // Letter L
    if (document.getElementById("LargeTextDisplayer").style.display == "none") {
        document.getElementById("L").style.display="none";
    } if (document.getElementById("LargeTextDisplayer").style.display == "block") {
        document.getElementById("L").style.display="block";
    };

    // Letter M
    if (document.getElementById("MandarinLearning").style.display == "none") {
        if (document.getElementById("MacroClipSearch").style.display == "none") {
            if (document.getElementById("Matera").style.display == "none") {
                document.getElementById("M").style.display="none";
            };
        };
    } if (document.getElementById("MandarinLearning").style.display == "block") {
        document.getElementById("M").style.display="block";
    } else if (document.getElementById("MacroClipSearch").style.display == "block") {
        document.getElementById("M").style.display="block";
    } else if (document.getElementById("Matera").style.display == "block") {
        document.getElementById("M").style.display="block";
    };

    // Letter S
    if (document.getElementById("Subnodal").style.display == "none") {
        document.getElementById("S").style.display="none";
    } if (document.getElementById("Subnodal").style.display == "block") {
        document.getElementById("S").style.display="block";
    };

    // Letter T
    if (document.getElementById("TerminalBio").style.display == "none") {
        if (document.getElementById("ThisWebsite").style.display == "none") {
            if (document.getElementById("ThumbnailDownloader").style.display == "none") {
                document.getElementById("T").style.display="none";
            };
        };
    } if (document.getElementById("TerminalBio").style.display == "block") {
        document.getElementById("T").style.display="block";
    } else if (document.getElementById("ThisWebsite").style.display == "block") {
        document.getElementById("T").style.display="block";
    } else if (document.getElementById("ThumbnailDownloader").style.display == "block") {
        document.getElementById("T").style.display="block";
    };

    // Letter W
    if (document.getElementById("Waterd").style.display == "none") {
        document.getElementById("W").style.display="none";
    } if (document.getElementById("Waterd").style.display == "block") {
        document.getElementById("W").style.display="block";
    };
};