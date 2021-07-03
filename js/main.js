let video = document.querySelector('.video');
let juice = document.querySelector('.orange-juice');

let btnPlayPause = document.getElementById('play-pause');
let btnMuted = document.getElementById('muted');

function togglePlayPause() {
    if(video.paused) {
        btnPlayPause.className = 'pause';
        video.play();
    } else {
        btnPlayPause.className = 'play';
        video.pause();
    }
}

function toggleMuted() {
    if(video.muted) {
        btnMuted.className = 'unmuted';
        video.muted = '';
    } else {
        video.muted = '1';
        btnMuted.className = 'muted';
    }
}

btnPlayPause.addEventListener('click',() => togglePlayPause());

video.addEventListener('timeupdate',() => {
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + '%';
});

btnMuted.addEventListener('click',() => toggleMuted());

