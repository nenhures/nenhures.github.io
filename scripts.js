function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
    }

function openMobileMenu() {
    var x = document.getElementById("mobileNav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    }

    function displaySubscribe() {
        var x = document.getElementById("subscribeBox");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }