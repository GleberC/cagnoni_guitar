let cont = 1;
let dots = document.querySelectorAll('.manual-btn'); // Primeiro definimos 'dots'

// Ativa o primeiro dot e o slide
document.getElementById('radio1').checked = true;
updateDots(cont); // Agora sim, dots existe!

let intervalo = setInterval(proximaImg, 5000);

dots.forEach((dot, indice) => {
    dot.addEventListener("click", () => {
        cont = indice + 1;
        document.getElementById('radio' + cont).checked = true;

        updateDots(cont); // Atualiza o dot ativo
        clearInterval(intervalo);
        intervalo = setInterval(proximaImg, 5000);
    });
});

function proximaImg() {
    cont++;
    if (cont > 3) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
    updateDots(cont);
}

function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.remove('actived');
    });
    dots[index - 1].classList.add('actived');
}
