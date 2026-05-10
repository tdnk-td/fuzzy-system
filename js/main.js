const music = document.getElementById("bgMusic");

let totalFiles = 0;
let targetProgress = 0;
let smoothProgress = 0;

const progressFill =
    document.getElementById("progressFill");

// Smooth animation loop
setInterval(() => {

    smoothProgress +=
        (targetProgress - smoothProgress) * 0.08;

    progressFill.style.width =
        smoothProgress + "%";

}, 16);

// Rotating tips
const tips = [
    "Enjoy your time on the server",
    "Join our Discord community",
    "Read the server rules",
    "Invite friends to the server"
];

let tipIndex = 0;

setInterval(() => {

    document.getElementById("tip").innerText =
        tips[tipIndex];

    tipIndex =
        (tipIndex + 1) % tips.length;

}, 5000);

window.GameDetails = function(
    serverName,
    serverURL,
    mapName,
    maxPlayers,
    steamID,
    gamemode,
    volume,
    language
) {

    document.getElementById("servername").innerText =
        serverName;

    document.getElementById("mapname").innerText =
        mapName;

    document.getElementById("gamemode").innerText =
        gamemode;

    // Respect player's game volume
    music.volume = volume;

    music.play().catch(() => {});
};

// Status callback
window.SetStatusChanged = function(status) {

    document.getElementById("status").innerText =
        status;
};

// Total files callback
window.SetFilesTotal = function(total) {

    totalFiles = total;

    document.getElementById("totalFiles").innerText =
        total;
};

// Remaining files callback
window.SetFilesNeeded = function(needed) {

    const downloaded =
        totalFiles - needed;

    document.getElementById("downloadedFiles").innerText =
        downloaded;

    if (totalFiles > 0) {

        targetProgress =
            (downloaded / totalFiles) * 100;
    }
};

// Current file callback
window.DownloadingFile = function(fileName) {

    const cleanName =
        fileName.split("/").pop();

    document.getElementById("currentFile").innerText =
        cleanName;
};