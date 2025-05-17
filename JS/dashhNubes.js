function crearNube() {
    const nube = document.createElement('div');
    nube.classList.add('nube');

    const topRandom = Math.floor(Math.random() * 60) + 5; // entre 5% y 65%
    nube.style.top = `${topRandom}vh`;

    document.getElementById('nube-container').appendChild(nube);

    // Elimina la nube después de que cruza la pantalla
    setTimeout(() => {
        nube.remove();
    }, 25000); // igual a duración de animación (25s)
}

// Generar una nueva nube cada 6 segundos
setInterval(crearNube, 6000);

// Crear al menos una al principio
crearNube();
