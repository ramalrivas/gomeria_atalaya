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

//Fecha de Facturación - Invoice Date

document.getElementById('dateInvoice').addEventListener('change', selectedDate);

function selectedDate() {
    event.preventDefault();
    let date = document.getElementById('dateInvoice').value;
    document.getElementById('previewDate').textContent = date;
    localStorage.setItem('Fecha', JSON.stringify(date));
}

// Clientes. Linea de Transporte - Client Transport Line
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

//Clientes. Interno de Linea - Client Unit Transport Line

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
//Variables - Variables
let totalServiceOffer = 0;

const subTotalService = [];
const selectedService = [];
const previewService = document.getElementById('previewService');
const addServiceBtn = document.getElementById('addServicebtn');


//Traigo los datos de service_type.json y lo imprimo en un select>option - JSON Connection and print in a Selext>Option Tag.
const getServiceType = async(serviceType) => {
    try {
        const response = await fetch(`../json_files/service_type.json`);
        serviceType = await response.json();
        service.innerHTML = `<option value="0">Seleccionar Servicio</option>`;
        serviceType.forEach(item =>
            service.innerHTML += `<option value="${item.price}">${item.id} => ${item.service}</option>`
        )
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error!!");
        }
        if (error instanceof SyntaxError) {
            console.log("Syntax Error!!");
        }
        if (error instanceof ReferenceError) {
            console.log("Reference Error!!");
        }
    }
};

getServiceType();

// Seleccionar Servicio - Selected Service

const SelectedService = () => {
    const service = document.getElementById('service');
    let servicePrice = document.getElementById('service').value;
    let serviceName = service.options[service.selectedIndex].text;

    selectedService.push(serviceName);
    subTotalService.push(parseInt(servicePrice));
    localStorage.setItem('Servicio', JSON.stringify(selectedService));
};
//Agregar Servicio - Add Service
const addService = () => {
    previewService.innerHTML = '<h4>Servicios:</h4><ul id="serviceList"></ul>';
    selectedService.forEach(item => {
        previewService.innerHTML += `<li>${item} <a onclick="removeService(this);">&times;</a></li>`
    })

};

//Quitar Servicio - Remove Service
const removeService = (content) => {
    content.parentNode.parentNode.removeChild(content.parentNode);
    subTotalService.length = subTotalService.length - 1;
    selectedService.length = selectedService.length - 1;

};

//Eventos - Events
addServiceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    SelectedService();
    addService();

    console.log(selectedService);
    console.log(subTotalService);

});

// -------------------- REPUESTOS UTILIZADOS -------------------- // 
//Variables - Variables
let totalPieceUsed = 0;
const subTotalPiece = [];
const selectedPiece = [];
const previewPiece = document.getElementById('previewPiece');
const addPieceBtn = document.getElementById('addPieceBtn');


//Traigo los datos de piece_stock.json y lo imprimo en un select>option - JSON Connection and print in a Selext>Option Tag.
const getPieceStock = async(pieceStock) => {
    try {
        const response = await fetch(`../json_files/piece_stock.json`);
        pieceStock = await response.json();
        piece.innerHTML = `<option value="0">Seleccionar Repuesto</option>`;
        pieceStock.forEach(item =>
            piece.innerHTML += `<option value="${item.price}">${item.id} => ${item.piece}</option>`
        )
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error!!");
        }
        if (error instanceof SyntaxError) {
            console.log("Syntax Error!!");
        }
        if (error instanceof ReferenceError) {
            console.log("Reference Error!!");
        }
    }
};
getPieceStock();

// Seleccionar  Repuesto - Selected Piece

const opSelectedPiece = () => {
    const piece = document.getElementById('piece');
    let piecePrice = document.getElementById('piece').value;
    let pieceName = piece.options[piece.selectedIndex].text;

    selectedPiece.push(pieceName);
    subTotalPiece.push(parseInt(piecePrice));
    localStorage.setItem('Repuesto', JSON.stringify(selectedPiece));
};
//Agregar Repuesto - Add Piece

const addPiece = () => {
    previewPiece.innerHTML = '<h4>Repuestos:</h4><ul id="pieceList"></ul>';
    selectedPiece.forEach(item => {
        previewPiece.innerHTML += `<li>${item} <a onclick="removePiece(this);">&times;</a></li>`
    })

};

//Quitar Repuesto - Remove Piece
const removePiece = (content) => {
    content.parentNode.parentNode.removeChild(content.parentNode);
    subTotalPiece.length = subTotalPiece.length - 1;
    selectedPiece.length = selectedPiece.length - 1;

};

//Eventos - Events

addPieceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    opSelectedPiece();
    addPiece();

    console.log(selectedPiece);
    console.log(subTotalPiece);

});


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