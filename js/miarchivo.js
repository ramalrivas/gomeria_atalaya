// ------------------ BOTON SALIR (HOME) -------------------- //

const exitRestrigedArea = document.querySelector('#exitRestrigedArea');

exitToHome = () => {
    window.location = "../index.html";
};

exitRestrigedArea.addEventListener("click", () => {
    exitToHome();
});

// ------------------- USUARIO LOGUEADO --------------------- //

const welcomeUsser = () => {

    let usser = JSON.parse(localStorage.getItem('Usuario'));
    const usserId = document.querySelector('#usserId');

    usserId.innerHTML += `<label for="usserIdInput">Usuario Logueado</label>
<input type="text" id="usserIdInput" value= "${usser}" disabled>`

};
welcomeUsser();


// ---------------------- CARGA DE DATOS ------------------- //

//Fecha de Facturación.

document.getElementById('dateInvoice').addEventListener('change', selectedDate);

function selectedDate() {
    event.preventDefault();
    let date = document.getElementById('dateInvoice').value;
    document.getElementById('previewDate').textContent = date;
    localStorage.setItem('Fecha', JSON.stringify(date));
}

// Clientes. Linea de Transporte 
let selectLine = document.getElementById('idLine');

let optionLine = document.createElement('option');
optionLine.text = 'Linea...';
optionLine.value = '0';
selectLine.appendChild(optionLine);

idClient.forEach(item => {
    optionLine = document.createElement('option');
    optionLine.text = item.line;
    optionLine.value = '' + item.line;
    selectLine.appendChild(optionLine);
});
document.getElementById('idLine').addEventListener('change', selectedLine);

function selectedLine() {
    let clientLine = document.getElementById('idLine').value;
    document.getElementById('previewLine').textContent = 'Linea: ' + clientLine;
    localStorage.setItem('Linea', JSON.stringify(clientLine));
}

//Clientes. Interno de Linea

let selectUnit = document.getElementById('idUnit');

let optionUnit = document.createElement('option');
optionUnit.text = 'Interno...';
optionUnit.value = '0';
selectUnit.appendChild(optionUnit);

idClient.forEach(item => {
    optionUnit = document.createElement('option');
    optionUnit.text = item.unit;
    optionUnit.value = '' + item.unit;
    selectUnit.appendChild(optionUnit);
});
document.getElementById('idUnit').addEventListener('change', selectedUnit);

function selectedUnit() {
    let clientUnit = document.getElementById('idUnit').value;
    document.getElementById('previewUnit').textContent = 'Intero: ' + clientUnit;
    localStorage.setItem('Interno', JSON.stringify(clientUnit));
}

//------------------------ SERVICIO OFRECIDO -----------------------//

let totalServiceOffer = 0;

const subTotalService = [];
const selectedService = [];
const previewService = document.getElementById('previewService');
const addServiceBtn = document.getElementById('addServicebtn');
const removeServiceBtn = document.getElementById('removeServiceBtn');


const serviceSelectBuild = () => {

    service.innerHTML = `<option value="0">Seleccionar Servicio</option>`;
    serviceType.forEach(item =>
        service.innerHTML += `<option value="${item.price}">${item.service}</option>`
    )
};
serviceSelectBuild();


// Seleccionar Servicio.

const SelectedService = () => {
    const service = document.getElementById('service');
    let servicePrice = document.getElementById('service').value;
    let serviceName = service.options[service.selectedIndex].text;

    selectedService.push(serviceName);
    subTotalService.push(parseInt(servicePrice));
    localStorage.setItem('Servicio', JSON.stringify(selectedService));
};
//Agregar Servicio.
const addService = () => {
    previewService.innerHTML = '<h4>Servicios:</h4><ul id="serviceList"></ul>';
    selectedService.forEach(item => {
        previewService.innerHTML += `<li>${item} <a onclick="removeService(this);">&times;</a></li>`
    })

};


//Quitar Servicio
const removeService = (content) => {
    content.parentNode.parentNode.removeChild(content.parentNode);
    //subTotalService.length = subTotalService.length - 1;

    /*
    let serviceLi = previewService.children.length;
    serviceLi = serviceLi - 1;
    let serviceLastLi = document.querySelectorAll('li')[serviceLi];
    previewService.removeChild(serviceLastLi);
*/
};

//Eventos
addServiceBtn.addEventListener("click", () => {
    event.preventDefault();
    SelectedService();
    addService();

    console.log(selectedService);
    console.log(subTotalService);

});

removeServiceBtn.addEventListener("click", () => {
    event.preventDefault();
    removeService();

    console.log(subTotalService);

    /* selectedService.length = selectedService.length - 1;
    console.log(selectedService);*/
});





// -------------------- REPUESTOS UTILIZADOS -------------------- // 

const subTotalPiece = [];

let selectPiece = document.getElementById('piece');

let option = document.createElement('option');
option.text = 'Seleccionar Repuesto...';
option.value = '0';
selectPiece.appendChild(option);

pieceStock.forEach(item => {
    option = document.createElement('option');
    option.text = item.piece;
    option.value = '' + item.price;
    selectPiece.appendChild(option);
});

document.getElementById('piece').addEventListener('change', selectedPiece);

function selectedPiece() {
    let piece = document.getElementById('piece').value;
    document.getElementById('previewPiece').textContent = piece;
};




//-------------------------- RESULTADO FINAL --------------------------//

let totalCalc = 0;
const finalPriceBtn = document.getElementById('finalPriceBtn');

finalPriceBtn.addEventListener("click", () => {
    event.preventDefault();

    totalServiceOffer = subTotalService.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
    console.log(totalServiceOffer);
})




function totalCalculator(totalService, subTotalPiece) {

    totalCalc = totalServiceOffer + totalPieceOffer;
    console.log(totalServiceOffer);
};







//------------------------ RESULTADO FINAL ------------------------//