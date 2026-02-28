const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("search-results");

/* SAME SONG LIST */
const songs = [
    {
        title: "Zingaat",
        artist: "Ajay-Atul",
        src: "./music/zingaat.mp3",
        cover: "./images/Ajay-Atul.jpg"
    },
    {
        title: "Yad Lagla",
        artist: "Ajay-Atul",
        src: "./music/yad-lagla.mp3",
        cover: "./images/Ajay-Atul.jpg"
    },
    {
        title: "Man Udhan Varyache",
        artist: "Shankar Mahadevan",
        src: "./music/man-udhan.mp3",
        cover: "./images/Shankar  Mahadevan.jpg"
    },
    {
        title: "Tum Hi Ho",
        artist: "Arijit Singh",
        src: "./music/tum-hi-ho.mp3",
        cover: "./images/Arijit Singh.jpg"
    }
];

/* SEARCH */
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    if (!query) return;

    const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query)
    );

    filtered.forEach((song, index) => {
        const div = document.createElement("div");
        div.className = "search-item";
        div.innerHTML = `
            <img src="${song.cover}">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;

        div.addEventListener("click", () => {
            localStorage.setItem("selectedSong", JSON.stringify(song));
            window.location.href = "index.html";
        });

        resultsContainer.appendChild(div);
    });
});
