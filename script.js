console.log("Welcome To Spotify");

//Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs =[
    {songName: "O Mere Dil Ke chain", filePath: "Songs/1.mp3", coverPath: "Covers/1.jpg"},
    {songName: "Lag Ja Gale", filePath: "Songs/2.mp3", coverPath: "Covers/2.jpg"},
    {songName: "Phela Nasha", filePath: "Songs/3.mp3", coverPath: "Covers/3.jpg"},
    {songName: "Mere Sapnon Ki Rani", filePath: "Songs/4.mp3", coverPath: "Covers/4.jpg"},
    {songName: "Kuch Na Kaho", filePath: "Songs/5.mp3", coverPath: "Covers/5.jpg"},
    {songName: "Yeh Raat Bheegi Bheegi", filePath: "Songs/6.mp3", coverPath: "Covers/6.jpg"},
    {songName: "Tujhse Naraz Nahi Zindagi", filePath: "Songs/7.mp3", coverPath: "Covers/7.jpg"},
    {songName: "Mere Mehboob Kayamat Hogi", filePath: "Songs/8.mp3", coverPath: "Covers/8.jpg"},
    {songName: "Gulabi Aankhein", filePath: "Songs/9.mp3", coverPath: "Covers/9.jpg"},
    {songName: "Ek Pyaar Ka Nagma Hai", filePath: "Songs/10.mp3", coverPath: "Covers/10.jpg"},
]

// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;
    }
})

// Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log((progress));
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause')
       element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex +1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
