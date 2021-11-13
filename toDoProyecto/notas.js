// Capturo el div contenedor y traigo las notas del localStorage
const contenedor = document.querySelector('.contenedor');
const notes = JSON.parse(localStorage.getItem('notes'))
// Si existen las notas, creo el html para agregarlas con el formato correspondiente
if (notes) {
    for (let i = 0; i < notes.length; i++) {
        const element = notes[i];
        if (element.length >= 1) {
        contenedor.innerHTML += `
                <div class='notes'>
                    <div class="tools">
                        <button class="edit"><i class="fas fa-edit"></i></button>
                        <button class="delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <span class="spanMain">${element}</span>
                    <textarea class='hidden'>${element}</textarea>
                </div>
    `
    }}
    // Ejecuto la funcion una vez para que cargue los botones de las notas nuevas
    // Puedo ejecutar la funcion antes de declararla gracias al hoisting de js
    capturarEventos();
}

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
            updateLs()
        });
    });
    
    
    deleteBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if (spanMain[i].innerText.length === 0 && textArea[i].value.length === 0) {
                const notes = document.querySelectorAll('.notes');
                contenedor.removeChild(notes[i]);
            } 
            if (spanMain[i].innerText.length >= 1 || textArea[i].value.length >= 1) {
                spanMain[i].innerText = '';
                textArea[i].value = '';
            }
            updateLs()
        })
    });
}


// Obtengo el boton de agregar nota y contenedor para los div de las notas,
// agrego el div html de las notas, ademas ejecuto la funcion capturarEventos() de nuevo
// para poder asignarle a los botones del nuevo div funcionalidad tmb
const addNoteBtn = document.querySelector('.addNoteBtn');
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

function updateLs() {
    const spanMain = document.querySelectorAll('.spanMain');
    const notesArray = [];

    spanMain.forEach(note => {
        notesArray.push(note.innerText)
    })

    localStorage.setItem('notes', JSON.stringify(notesArray));
} 