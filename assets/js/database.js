const baseDeDatos = [
    {
        id: 1,
        nombre: 'Biquini pa de motlle',
        precio: 1.18,
        imagen: 'sandwich.png',
        categoria: 'biquini'
    },
    {
        id: 2,
        nombre: 'Biquini barreta pavo planxa',
        precio: 2.75,
        imagen: 'sandwich.png',
        categoria: 'biquini'
    },
    {
        id: 3,
        nombre: 'Biquini barreta pernil salat planxat',
        precio: 2.85,
        imagen: 'sandwich.png',
        categoria: 'biquini'
    },
    {
        id: 4,
        nombre: 'Llom amb formatge',
        precio: 2.90,
        imagen: 'sandwich.png',
        categoria: 'llom'
    },
    {
        id: 5,
        nombre: 'Llom amb bacon',
        precio: 3.50,
        imagen: 'sandwich.png',
        categoria: 'llom'
    },
    {
        id: 6,
        nombre: 'Llom bacon formatge',
        precio: 4.00,
        imagen: 'sandwich.png',
        categoria: 'llom'
    },
    {
        id: 7,
        nombre: 'Truita',
        precio: 2.35,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 8,
        nombre: 'Truita formatge',
        precio: 2.90,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 9,
        nombre: 'Truita bacon',
        precio: 3.00,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 10,
        nombre: 'Truita formatge tonyina',
        precio: 4.00,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 11,
        nombre: 'Truita pavo',
        precio: 2.90,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 12,
        nombre: 'Truita pernil salat',
        precio: 2.90,
        imagen: 'sandwich.png',
        categoria: 'truita'
    },
    {
        id: 13,
        nombre: 'Cafè',
        precio: 0.95,
        imagen: 'sandwich.png',
        categoria: 'cafe'
    },
    {
        id: 14,
        nombre: 'Cafè amb llet',
        precio: 1.15,
        imagen: 'sandwich.png',
        categoria: 'cafe'
    },
    {
        id: 15,
        nombre: 'Cafè amb gel',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'cafe'
    },
    {
        id: 16,
        nombre: 'Cafè tallat',
        precio: 1.05,
        imagen: 'sandwich.png',
        categoria: 'cafe'
    },
    {
        id: 17,
        nombre: 'Te especial',
        precio: 0.95,
        imagen: 'sandwich.png',
        categoria: 'beguda'
    },
    {
        id: 18,
        nombre: 'Got de llet',
        precio: 0.40,
        imagen: 'sandwich.png',
        categoria: 'beguda'
    },
    {
        id: 19,
        nombre: 'Cocaolat',
        precio: 1.20,
        imagen: 'sandwich.png',
        categoria: 'beguda'
    },
    {
        id: 20,
        nombre: 'Coca Cola',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'beguda'
    },
    {
        id: 20,
        nombre: 'Fanta',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'beguda'
    },
    {
        id: 21,
        nombre: 'Aigua 50cl',
        precio: 0.75,
        imagen: 'sandwich.png',
        categoria: 'aigua'
    },
    {
        id: 22,
        nombre: 'Aigua 1.5l',
        precio: 0.90,
        imagen: 'sandwich.png',
        categoria: 'aigua'
    },
    {
        id: 23,
        nombre: 'Aigua amb gas 33cl',
        precio: 0.90,
        imagen: 'sandwich.png',
        categoria: 'aigua'
    },
    {
        id: 24,
        nombre: 'Cervesa mitjana',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'cervesa'
    },
    {
        id: 25,
        nombre: 'Cervesa doble malta 1/3',
        precio: 1.40,
        imagen: 'sandwich.png',
        categoria: 'cervesa'
    },
    {
        id: 26,
        nombre: 'Suc de fruites 20cl',
        precio: 0.90,
        imagen: 'sandwich.png',
        categoria: 'suc'
    },
    {
        id: 27,
        nombre: 'Suc de fruites 250cl',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'suc'
    },
    {
        id: 28,
        nombre: 'Suc de tronja natural 20cl',
        precio: 1.40,
        imagen: 'sandwich.png',
        categoria: 'suc'
    },
    {
        id: 29,
        nombre: 'Cervesa sense alcohol 1/3',
        precio: 0.85,
        imagen: 'sandwich.png',
        categoria: 'cervesa'
    },
    {
        id: 30,
        nombre: 'Cervesa sense alcohol 1/5',
        precio: 0.60,
        imagen: 'sandwich.png',
        categoria: 'cervesa'
    },
    {
        id: 31,
        nombre: 'Donut',
        precio: 0.75,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 32,
        nombre: 'Donut de xocolata',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 33,
        nombre: 'Triangle',
        precio: 1.00,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 34,
        nombre: 'Ensaïmada',
        precio: 0.65,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 35,
        nombre: 'Croissant xocolata',
        precio: 0.90,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 36,
        nombre: 'Pasta de full',
        precio: 0.85,
        imagen: 'sandwich.png',
        categoria: 'altres'
    },
    {
        id: 37,
        nombre: 'Palmera',
        precio: 0.85,
        imagen: 'sandwich.png',
        categoria: 'altres'
    }
];



