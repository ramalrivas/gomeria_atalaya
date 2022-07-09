//Usuarios

const idUsser = [{ uss: 'admin', pass: 1234 }];
//Internos de Linea de Transporte
const idClient = [{ line: 624, unit: 1 }, { line: 624, unit: 2 }, { line: 624, unit: 3 }, { line: 624, unit: 4 }, { line: 624, unit: 5 }, { line: 624, unit: 7 }, { line: 624, unit: 8 }, { line: 624, unit: 9 }, { line: 624, unit: 10 }, { line: 624, unit: 11 }, { line: 624, unit: 12 }];
// Stock de Repuestos.
const pieceStock = [{
        id: 0,
        piece: "Solo Servcio, sin repuestos",
        price: 0,
        qty: 99999999
    },
    {
        id: 1,
        piece: "Alargue de Bronce",
        price: 400,
        qty: 10
    },
    {
        id: 2,
        piece: "Arandela",
        price: 25,
        qty: 10
    },
    {
        id: 3,
        piece: "Caño",
        price: 450,
        qty: 10
    },
    {
        id: 4,
        piece: "Conector Doble",
        price: 400,
        qty: 10
    },
    {
        id: 5,
        piece: "Cubre Rotor",
        price: 680,
        qty: 10
    },
    {
        id: 06,
        piece: "Curva Gris",
        price: 180,
        qty: 10
    },
    {
        id: 7,
        piece: "Durol 100",
        price: 80,
        qty: 10
    },
    {
        id: 8,
        piece: "Durol 110",
        price: 120,
        qty: 10
    },
    {
        id: 9,
        piece: "Durol 112",
        price: 155,
        qty: 10
    },
    {
        id: 10,
        piece: "Durol 114",
        price: 210,
        qty: 10
    },
    {
        id: 11,
        piece: "Durol 120",
        price: 240,
        qty: 10
    },
    {
        id: 12,
        piece: "Durol 140",
        price: 380,
        qty: 10
    },
    {
        id: 13,
        piece: "Durol 142",
        price: 390,
        qty: 10
    },
    {
        id: 14,
        piece: "Durol 144",
        price: 410,
        qty: 10
    },
    {
        id: 15,
        piece: "Esparrago",
        price: 620,
        qty: 10
    },
    {
        id: 16,
        piece: "Horring",
        price: 35,
        qty: 10
    },
    {
        id: 17,
        piece: "Manguera Corta",
        price: 210,
        qty: 10
    },
    {
        id: 18,
        piece: "Manguera Larga",
        price: 310,
        qty: 10
    },
    {
        id: 19,
        piece: "Ovulo",
        price: 35,
        qty: 10
    },
    {
        id: 20,
        piece: "Parche Camioneta",
        price: 600,
        qty: 10
    },
    {
        id: 21,
        piece: "Resorte",
        price: 220,
        qty: 10
    },
    {
        id: 22,
        piece: "Resorte Manguera (conector)",
        price: 740,
        qty: 10
    },
    {
        id: 23,
        piece: "Rotor",
        price: 2390,
        qty: 10
    },
    {
        id: 24,
        piece: "Tuerca Cromada",
        price: 50,
        qty: 10
    },
    {
        id: 25,
        piece: "Tuerca Plastica",
        price: 40,
        qty: 10
    },
    {
        id: 26,
        piece: "Valvula Corta",
        price: 1010,
        qty: 10
    },
    {
        id: 27,
        piece: "Valvula Curva",
        price: 1235,
        qty: 10
    },
    {
        id: 28,
        piece: "Valvula Larga",
        price: 1200,
        qty: 10
    },
    {
        id: 29,
        piece: "Virola Metal",
        price: 70,
        qty: 10
    },
    {
        id: 30,
        piece: "Virola Plastica",
        price: 60,
        qty: 10
    },
    {
        id: 31,
        piece: "Virola Plastica",
        price: 60,
        qty: 10
    }
];

// Servicios Ofrecidos.
const serviceType = [{
        id: 1,
        service: "Desarme y Arme",
        price: 850,

    },
    {
        id: 2,
        service: "Desarme (solo)",
        price: 425,
    },
    {
        id: 3,
        service: "Arme (solo)",
        price: 425,
    },
    {
        id: 4,
        service: "Auxilio para Internos",
        price: 1990,
    },
    {
        id: 5,
        service: "Parche con Durlol",
        price: 820,
    },
    {
        id: 6,
        service: "Colocación Bandalin (precio x rueda)",
        price: 250
    },
    {
        id: 7,
        service: "Servicio de Vigia (precio x rueda)",
        price: 260
    },
];