//reproduz o audio após clicar na tela
function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

document.addEventListener("click", playAudio);

