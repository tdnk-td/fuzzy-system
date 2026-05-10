const music = document.getElementById("bgMusic");

window.addEventListener("load", () => {
    music.volume = 0.25;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay prevented.");
        });
    }
});

const tips = [
    "Join our Discord community",
    "Read the server rules",
    "Press F4 for more information",
    "Invite your friends to the server",
    "Support the server by being active"
];

let tipIndex = 0;

setInterval(() => {
    document.getElementById("tip").innerText = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}, 5000);

// Cleaner loading callbacks
window.SetStatusChanged = function(status) {
    document.getElementById("status").innerText = status;
};

window.SetFilesNeeded = function(needed) {
    document.getElementById("files").innerText =
        `${needed} files remaining`;

    // Smooth fake progress estimate
    let progress = 100 - (needed / 4);

    progress = Math.max(10, Math.min(progress, 95));

    document.getElementById("progressFill").style.width =
        `${progress}%`;
};
