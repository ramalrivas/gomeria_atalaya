// ------------------------ IMPORTS -------------------------- //


// --------------- MODAL (POPUP) PARA LOGIN ----------------- //

// Formulario de Login
const loginModal = document.querySelector('#loginModal');

//Boton de redirección submit.
const loginButton = document.querySelector('#loginButton');
const usserInput = document.querySelector('#usserInput');
const passInput = document.querySelector('#passInput');


function submitLogin() {
    usserInput.value === 'Roberto' && passInput.value === '1234' ? window.location.href = './pages/restringed_area.html' : Swal.fire({
        title: 'Acceso Denegado',
        text: 'Usuario y/o Constraseña Incorrecta',

    })
};

/*
function submitLogin() {
    if (usserInput.value === 'Roberto' && passInput.value === '1234') {

        window.location.href = './pages/restringed_area.html';
    } else {
        // alert('Usuario y/o Contraseña Incorrectos');

        Swal.fire({

            title: 'Acceso Denegado',
            text: 'Usuario y/o Constraseña Incorrecta',

        })
    };
};
*/

loginButton.addEventListener("click", () => {
    submitLogin();
    localStorage.setItem('Usuario', JSON.stringify(usserInput.value));
});


//Boton de acceso   
const modalOpenBtn = document.querySelector('#modalOpenBtn');

modalOpenBtn.addEventListener("click", () => {
    loginModal.showModal();
});

//Boton Cierre

const buttomCloseForm = document.querySelector('#buttomCloseForm');

buttomCloseForm.addEventListener("click", () => {
    loginModal.close();
});