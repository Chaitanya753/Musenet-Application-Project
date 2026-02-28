const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const albumCover = document.getElementById("album-cover");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const songItems = document.querySelectorAll(".spotify-playlists .list .item");

/* SONG LIST */
const songs = [
    { 
        title: "Ved Tuza", 
        artist: "Ajay-Atul", 
        src: "./music/Ved Tuza.mp3", 
        cover: "./images/Ved Tuza.jpg" 
    },

    { 
        title: "Saaj Hyo Tuza", 
        artist: "OnkarSwaroop", 
        src: "./music/Saaj Hyo Tuza.mp3", 
        cover: "./images/Saaj Hyo Tuza.jpg" 
    },
    {
        title: "Radha Hi Bawari", 
        artist: "Swapnil Bandodkar", 
        src: "./music/Radha Hi Bawari.mp3", 
        cover: "./images/Radha Hi Bawari.jpg" 
    },

    { 
        title: "Patil Aala", 
        artist: "Vaishali Samant", 
        src: "./music/Patil Aala.mp3", 
        cover: "./images/Patil Aala.jpg" 
    },

    { 
        title: "Govyachya Kinaryavr", 
        artist: "Shubhangi Kedar", 
        src: "./music/Govyachya Kinaryavar.mp3", 
        cover: "./images/Govyachya Kinaryavr.jpg" 
    },

    { 
        title: "Dhaga Dhaga", 
        artist: "Harshavardhan Wavare", 
        src: "./music/Dhaga Dhaga.mp3", 
        cover: "./images/Dhaga Dhaga.jpg" 
    },
    
    { 
        title: "Saiyaara", 
        artist: "Faheem Abdullah", 
        src: "./music/Saiyaara.mp3", 
        cover: "./images/Saiyaara.jpg" 
    },

    { 
        title: "Ishq Hai", 
        artist: "Anurag Saikia", 
        src: "./music/Ishq Hai.mp3", 
        cover: "./images/Ishq Hai.jpg" 
    },

    { 
        title: "Tuze Kitna Chahne Lage Hum", 
        artist: "Arijit Singh", 
        src: "./music/Tujhe Kitna Chahne Lage.mp3", 
        cover: "./images/Tuze Kitna Chahne Lage Hum.jpg" 
    },

    { 
        title: "Agar Tum Mil Jao", 
        artist: "Udit Narayan", 
        src: "./music/Agar Tum Mil Jao.mp3", 
        cover: "./images/Agar Tum Mil Jao.jpg" 
    },

    { 
        title: "Sanam Teri Kasam", 
        artist: "Palak Muchhal", 
        src: "./music/Sanam Teri Kasam.mp3", 
        cover: "./images/Sanam Teri Kasam.jpg" 
    },

    { 
        title: "Ye Tune Kya Kiya", 
        artist: "Rajat Aroraa", 
        src: "./music/Ye Tune Kya Kiya.mp3", 
        cover: "./images/Ye Tune Kya Kiya.jpg" 
    }
];

let index = 0;

/* LOAD SONG */
function loadSong(i) {
    const song = songs[i];
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    albumCover.src = song.cover;

    // Highlight active song
    songItems.forEach(item => item.classList.remove("active"));
    if (songItems[i]) songItems[i].classList.add("active");
}
loadSong(index);

/* PLAY / PAUSE */
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}
playBtn.addEventListener("click", togglePlay);

/* NEXT / PREV */
function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸";
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
    playBtn.textContent = "⏸";
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

/* UPDATE PROGRESS */
audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    current.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
};

/* SEEK */
progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

/* VOLUME */
volume.oninput = () => {
    audio.volume = volume.value;
};

/* FORMAT TIME */
function formatTime(time) {
    if (!time) return "00:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

/* PLAY SONG ON CLICKING CARD */
songItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        index = i;
        loadSong(index);
        audio.play();
        playBtn.textContent = "⏸";
    });
});
