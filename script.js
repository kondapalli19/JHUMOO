const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const clos = document.getElementById('close');
var openLogin = document.getElementById("openLogin");
var openAbout = document.getElementById("openAbout");
var openArtist = document.getElementById("openArtist");
const playButton = document.getElementById("playButton");
const playButton1 = document.getElementById("playButton1");
const playIcon = document.querySelector('#playButton i');
const playIcon1 = document.querySelector('#playButton1 i');
let isPlaying = false;
let audio=[
    'Songs/DanceMonkey.mp3',
    'Songs/PulsarBike.mp3'
];

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(clos){
    clos.addEventListener('click', () => {
        nav.classList.remove('active');
    }
    )
}
openLogin.addEventListener("click", function() {
    // Navigate to the desired HTML page
    window.location.href = "login.html";
});
openAbout.addEventListener("click", function() {
    // Navigate to the desired HTML page
    window.location.href = "about.html";
});
openArtist.addEventListener("click", function() {
    // Navigate to the desired HTML page
    window.location.href = "artist.html";
});

        playButton.addEventListener('click', function(event) {
            
            event.preventDefault();
            if (!isPlaying) {
                // Create an audio element dynamically
                audio = new Audio(audio[0]);

                // Play the audio
                audio.play();

                // Change the icon class
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');

                // Update the playing status
                isPlaying = true;

                // Add an event listener to pause the audio and change the icon when it ends
                audio.addEventListener('ended', function() {
                    playIcon.classList.remove('fa-pause');
                    playIcon.classList.add('fa-play');
                    isPlaying = false;
                });
            } else {
                // Pause the audio
                audio.pause();

                // Change the icon class
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');

                // Update the playing status
                isPlaying = false;
            }
        });

        playButton1.addEventListener('click', function(event) {
            event.preventDefault();
            if (!isPlaying) {
                // Create an audio element dynamically
                audio = new Audio(audio[1]);

                // Play the audio
                audio.play();

                // Change the icon class
                playIcon1.classList.remove('fa-play');
                playIcon1.classList.add('fa-pause');

                // Update the playing status
                isPlaying = true;

                // Add an event listener to pause the audio and change the icon when it ends
                audio.addEventListener('ended', function() {
                    playIcon1.classList.remove('fa-pause');
                    playIcon1.classList.add('fa-play');
                    isPlaying = false;
                });
            } else {
                // Pause the audio
                audio.pause();

                // Change the icon class
                playIcon1.classList.remove('fa-pause');
                playIcon1.classList.add('fa-play');

                // Update the playing status
                isPlaying = false;
            }
        });
