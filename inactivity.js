//share/jupyterhub/static/js/inactivity.js
(function() {
    let inactivityTime = 15 * 60 * 1000; // 15 minutes in milliseconds
    let timeout;
    console.log("\n inactivity timer added");
    function resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(logoutUser, inactivityTime);
    }

    function logoutUser() {
        window.location.href = "/logout";
    }

    // Reset timer on user activity
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onscroll = resetTimer;
    document.onclick = resetTimer;
})();
