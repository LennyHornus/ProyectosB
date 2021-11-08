function toggleTemas() {
    // Traigo con el DOM todos los elementos y los guardo en una variable
    const body = document.querySelector("body");
    const buttons = document.querySelectorAll(".boton");
    const output = document.querySelector(".output");
    const numeroPrevio = document.querySelector(".numeroPrevio");
    const numeroActual = document.querySelector(".numeroActual");
    const botonTema = document.querySelector(".botonTema");

    // Modifico las variables
    body.classList.toggle("bodyDark");
    output.classList.toggle("outputDark");
    botonTema.classList.toggle("botonTemaDark");
    numeroPrevio.classList.toggle("numeroPrevioDark");
    numeroActual.classList.toggle("numeroActualDark");
    buttons.forEach(item => {
        item.classList.toggle("buttonDark");
    });
};
