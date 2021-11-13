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
            // Aca toggleo las clases hidden, para que se deje de ver el textArea y se vea el span de la nota
            spanMain[i].classList.toggle('hidden');
            textArea[i].classList.toggle('hidden');
            // Aca guardo el valor del textArea en el span de la nota
            spanMain[i].innerText = textArea[i].value;
        });
    });
    
    
    deleteBtn.forEach((btn, i) => {
        // Limpio el texto de ambos
        // btn.addEventListener('click', () => {
        //     spanMain[i].innerText = '';
        //     textArea[i].value = '';
        //     console.log('entro delete');
        // });
        btn.addEventListener('click', () => {
            if (spanMain[i].innerText.length === 0) {
                console.log('entro el primer if');
            } 
            if (spanMain[i].innerText.length >= 1) {
                spanMain[i].innerText = '';
                textArea[i].value = '';
                console.log('entro el 2do if');
            }
        })
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