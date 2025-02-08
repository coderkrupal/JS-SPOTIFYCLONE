let audioElement = new Audio("./spotify/songs/4.mp3")
const masterplay  = document.querySelector("#masterPlay");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const progressbar = document.querySelector("#myProgressBar");

let songs = [
     {songName:"salam-e-ishq",path:"./spotify/songs/1.mp3",coderpath:"./spotify/covers/1.jpg"},
     {songName:"salam-e-ishq",path:"./spotify/songs/2.mp3",coderpath:"./spotify/covers/2.jpg"},
     {songName:"salam-e-ishq",path:"./spotify/songs/3.mp3",coderpath:"./spotify/covers/3.jpg"},
     {songName:"salam-e-ishq",path:"./spotify/songs/4.mp3",coderpath:"./spotify/covers/4.jpg"},
]


let index = 0;

 masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime < 0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
    }
 })


audioElement.addEventListener("timeupdate",()=>{
    //update progress bar

    let progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    progressbar.value = progress;
})
 
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = audioElement.currentTime * audioElement.duration /100;
})