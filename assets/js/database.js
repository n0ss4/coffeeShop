const baseDeDatos = [
    {
        id: 1,
        nombre: 'Biquini pa de motlle',
        precio: 1.18,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'formatge/pernil'
    },
    {
        id: 2,
        nombre: 'Biquini barreta pavo planxa',
        precio: 2.75,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pavo'
    },
    {
        id: 3,
        nombre: 'Biquini barreta pernil salat planxat',
        precio: 2.85,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pernil/salat'
    },
    {
        id: 4,
        nombre: 'Llom amb formatge',
        precio: 2.90,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'llom/formatge'
    },
    {
        id: 5,
        nombre: 'Llom amb bacon',
        precio: 3.50,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'llom/bacon'
    },
    {
        id: 6,
        nombre: 'Llom bacon formatge',
        precio: 4.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'llom/formatge'
    },
    {
        id: 7,
        nombre: 'Truita',
        precio: 2.35,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'ou'
    },
    {
        id: 8,
        nombre: 'Truita formatge',
        precio: 2.90,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'ou/formatge'
    },
    {
        id: 9,
        nombre: 'Truita bacon',
        precio: 3.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'ou/bacon'
    },
    {
        id: 10,
        nombre: 'Truita formatge tonyina',
        precio: 4.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'ou'
    },
    {
        id: 11,
        nombre: 'Truita pavo',
        precio: 2.90,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'ou/pavo'
    },
    {
        id: 12,
        nombre: 'Truita pernil salat',
        precio: 2.90,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'truita',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'ou / pernil salat'
    },
    {
        id: 13,
        nombre: 'Cafè',
        precio: 0.95,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients: null
    },
    {
        id: 14,
        nombre: 'Cafè amb llet',
        precio: 1.15,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 15,
        nombre: 'Cafè amb gel',
        precio: 1.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 16,
        nombre: 'Cafè tallat',
        precio: 1.05,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 17,
        nombre: 'Te especial',
        precio: 0.95,
        imagen: '/assets/img/drinks/te.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 18,
        nombre: 'Got de llet',
        precio: 0.40,
        imagen: '/assets/img/drinks/gotdellet.png/',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 19,
        nombre: 'Cocaolat',
        precio: 1.20,
        imagen: '/assets/img/drinks/cocaolat.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 20,
        nombre: 'Coca Cola',
        precio: 1.00,
        imagen: '/assets/img/drinks/cocacola.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 20,
        nombre: 'Fanta',
        precio: 1.00,
        imagen: '/assets/img/drinks/fanta.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 21,
        nombre: 'Aigua 50cl',
        precio: 0.75,
        imagen: '/assets/img/drinks/agua50cl.png',
        categoria: 'aigua',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 22,
        nombre: 'Aigua 1.5l',
        precio: 0.90,
        imagen: '/assets/img/drinks/agua1.5.png',
        categoria: 'aigua',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 24,
        nombre: 'Cervesa mitjana',
        precio: 1.00,
        imagen: '/assets/img/drinks/cervesa.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 25,
        nombre: 'Cervesa doble malta 1/3',
        precio: 1.40,
        imagen: '/assets/img/drinks/cervesadoblemalta.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 26,
        nombre: 'Cervesa sense alcohol 1/3',
        precio: 0.85,
        imagen: '/assets/img/drinks/cervesasinalcohol.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 27,
        nombre: 'Suc de fruites 20cl',
        precio: 0.90,
        imagen: '/assets/img/drinks/zumodefrutas.png',
        categoria: 'suc',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 31,
        nombre: 'Donut',
        precio: 0.75,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 32,
        nombre: 'Donut de xocolata',
        precio: 1.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 33,
        nombre: 'Triangle',
        precio: 1.00,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 34,
        nombre: 'Ensaïmada',
        precio: 0.65,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 35,
        nombre: 'Croissant xocolata',
        precio: 0.90,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 36,
        nombre: 'Pasta de full',
        precio: 0.85,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 37,
        nombre: 'Palmera',
        precio: 0.85,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 100,
        nombre: 'Pasta fresca',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pasta/enciam/tonyina/olives'
    },
    {
        id: 101,
        nombre: 'Macarrons',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pasta/tomaquet/carn picada'
    },
    {
        id: 102,
        nombre: 'Amanida Verda',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'enciam/olives/tomaquet'
    },
    {
        id: 103,
        nombre: 'Llom amb patates',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'llom/patates'
    },
    {
        id: 104,
        nombre: 'Galta de porc amb patates',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'porc/patates'
    },
    {
        id: 105,
        nombre: 'Verdura',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'patates/pastanaga/coliflor'
    },
    {
        id: 106,
        nombre: 'Fruita del dia',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: null,
        celiac: null,
        ingredients: null
    },
    {
        id: 107,
        nombre: 'Natilles',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 108,
        nombre: 'Yogurt bacon',
        precio: 2,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: null,
        celiac: null,
        ingredients:null
    }
    ,
    {
        id: 109,
        nombre: 'Aigua',
        precio: 0.10,
        imagen: '/assets/img/sandwich/sandwich.png',
        categoria: 'menu',
        vegeteria: null,
        celiac: null,
        ingredients:null
    }
];


