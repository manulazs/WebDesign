function alterarImagem() {
    const img = document.getElementById("imagem");
    img.src = img.src.includes("image.png") ? "image2.png" : "image.png";
}

function alterarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = titulo.textContent === 'Meu Título' ? 'Meu não-título' : 'Meu Título';
}

function alterarParagrafo() {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.style.color = paragrafo.style.color === "red" ? "black" : "red";
}

function tocarAudio() {
    const audio = document.getElementById("audio");
    audio.play();
}

function toggleClasses() {
    const buttons = document.querySelectorAll(".btn-toggle");
    buttons.forEach(button => {
        button.classList.toggle("vermelho");
    });
}
