// Obtengo los elementos del html a traves del DOM
const contenedor = document.querySelector('.contenedor')
const notesEl = document.querySelectorAll('.notes');

// Creo la funcion donde capturo todos los elementos de cada post-it
// y creo el for each de cada array de elementos que capture, para
// agregarle funcionalidad a los botones
function capturarEventos() {
    const editBtn = document.querySelectorAll('.edit');
    const deleteBtn = document.querySelectorAll('.delete');
    const textArea = document.querySelectorAll('textarea');
    const spanMain = document.querySelectorAll('.spanMain');

    editBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            spanMain[i].classList.toggle('hidden');
            textArea[i].classList.toggle('hidden');
            console.log('entro edit');
        });
    });
    
    editBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
        spanMain[i].innerText = textArea[i].value;
        console.log('entro text');
        });
    });
    
    deleteBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            spanMain[i].innerText = '';
            textArea[i].value = '';
            console.log('entro delete');
        });
    });
}
// Ejecuto la funcion una vez para que cargue los botones por primera vez
capturarEventos();


// Obtengo el boton de agregar nota, y le agrego funcionalidad, ademas corro los eventos de nuevo
const addNoteBtn = document.querySelector('.addNoteBtn')
addNoteBtn.addEventListener('click', () => {
    contenedor.innerHTML += `
                <div class='notes'>
                    <div class="tools">
                        <button class="edit"><i class="fas fa-edit"></i></button>
                        <button class="delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <span class="spanMain hidden"></span>
                    <textarea></textarea>
                </div>
    `
    capturarEventos();
});