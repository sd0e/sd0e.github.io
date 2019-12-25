function showNavigation() {
  document.getElementById("navigationOverlay").style.display="block";
}

function hideNavigation() {
  $("#navigationOverlay").fadeOut();
}

function showDonate() {
  document.getElementById("donateOverlay").style.display="block";
}

function hideDonate() {
  $("#donateOverlay").fadeOut();
}

function showAlert() {
  document.getElementById("infoBox").style.display="block";
  setTimeout(
    function() 
    {
      $("#infoBox").fadeOut();
    }, 1000);
}

function hideAlert() {
  document.getElementById("infoBox").style.display="none";
}

function showPayPal() {
  document.getElementById("donationName").innerHTML="PayPal";
  document.getElementById("donationTips").innerHTML="To donate via PayPal, click the button below";
  document.getElementById("donationExtra").setAttribute("display", "none");
  document.getElementById("donationExtra").innerHTML="";
  document.getElementById("donationTipButton").innerHTML="Donate to my PayPal";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: PayPalDonate();");
  showDonate();
}

function PayPalDonate() {
  window.open('https://www.paypal.com/paypalme/my/profile');
  hideDonate();
}

function copy(str) {
  var dummy = document.createElement("input");
  var text = str;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  createAlert("Copied to Clipboard!");
}

function showAuracoin() {
  document.getElementById("donationName").innerHTML="Auracoin";
  document.getElementById("donationTips").innerHTML="My Auracoin address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="J60J05HJ3E";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: AuracoinDonate();");
  showDonate();
}

function AuracoinDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}

function showBitcoin() {
  document.getElementById("donationName").innerHTML="Bitcoin";
  document.getElementById("donationTips").innerHTML="My Bitcoin address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="1AtXvhq5sRCSR42ngKEvF2PrxAu3eVZnYn";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: BitcoinDonate();");
  showDonate();
}

function BitcoinDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}

function showBitcoinCash() {
  document.getElementById("donationName").innerHTML="Bitcoin Cash";
  document.getElementById("donationTips").innerHTML="My Bitcoin Cash address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="qpexqc9a3rdre9sjagcfj8wcwa242rd8ny73h4uv3d";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: BitcoinCashDonate();");
  showDonate();
}

function BitcoinCashDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}

function showDogecoin() {
  document.getElementById("donationName").innerHTML="Dogecoin";
  document.getElementById("donationTips").innerHTML="My Dogecoin address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="DAj6E26h2WULMQTdA1wxtR79eJsreh69Va";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: DogecoinDonate();");
  showDonate();
}

function DogecoinDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}

function showEthereum() {
  document.getElementById("donationName").innerHTML="Ethereum";
  document.getElementById("donationTips").innerHTML="My Ethereum address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="0x2327ad433c08820d02b2a380c8dd56cce3ddf7ca";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: EthereumDonate();");
  showDonate();
}

function EthereumDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}

function showLitecoin() {
  document.getElementById("donationName").innerHTML="Litecoin";
  document.getElementById("donationTips").innerHTML="My Litecoin address is";
  document.getElementById("donationExtra").setAttribute("display", "block");
  document.getElementById("donationExtra").innerHTML="LgTqjPJMn2FvTq9S8HwuqLCpF8c4HNhnU8";
  document.getElementById("donationTipButton").innerHTML="Copy address to clipboard";
  document.getElementById("donationTipButton").setAttribute("onClick", "javascript: LitecoinDonate();");
  showDonate();
}

function LitecoinDonate() {
  var donationExtraText = document.getElementById("donationExtra").innerHTML;
  copy(donationExtraText);
  hideDonate();
}


function createAlert(text) {
  document.getElementById("infoText").innerHTML = text;
  showAlert();
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
}

function checkFocus() {
  if ($(document.activeElement).attr("type") == "text" || $(document.activeElement).attr("type") == "textarea") {
    var inFocus = true;
  }
}

document.addEventListener('keydown', function(e) {
  var navigationOverlayDisplay = document.getElementById("navigationOverlay").style.display;
  if ($(document.activeElement).attr("type") == "text" || $(document.activeElement).attr("type") == "textarea") {
    var inFocus = true;
  }
  if (inFocus != true) {
    if (e.which == 68) {
      window.location.href = "/donate";  
    } else if (e.which == 65) {
      window.location.href = "/about";
    } else if (e.which == 80) {
      window.location.href = "/projects/";
    } else if (e.which == 72) {
      window.location.href = "/";
    } else if (e.which == 67) {
      window.location.href = "/contact";
    } else if (e.which == 83) {
      window.location.href = "/social";
    } else if (e.which == 66) {
      window.location.href = "/blog";
    } else if (e.which == 32) {
      if (navigationOverlayDisplay == "block") {
        hideNavigation();
      } else {
        showNavigation();
      }
    }
  }
});

function homeLoad() {
  var date = new Date().getDate();
  var oldMonth = new Date().getMonth();
  var month = oldMonth + 1;

  // Christmas (December 25)
  if (date == 25 && month == 12) {
    document.getElementById("homeTitle").innerHTML = "Happy Christmas!";
    document.getElementById("homeSubtitle").innerHTML = "Have a great day, site user!";
    document.getElementById("homeImage").src = "src/transparent.png";
    document.getElementById("home").style.backgroundImage = "url('src/snow.jpg')";
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
} 