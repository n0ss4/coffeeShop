const baseDeDatos = [
    {
        id: 1,
        nombre: 'Biquini de formatge',
        precio: 1.18,
        imagen: '/assets/img/sandwich/biquini-formatge.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'formatge/pernil'
    },
    {
        id: 2,
        nombre: 'Biquini barreta pavo planxa',
        precio: 2.75,
        imagen: '/assets/img/sandwich/sandwichpavo.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pavo'
    },
    {
        id: 3,
        nombre: 'Bacon amb formatge',
        precio: 2.85,
        imagen: '/assets/img/sandwich/baconqueso.png',
        categoria: 'biquini',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'bacon/formatge'
    },
    {
        id: 4,
        nombre: 'Llom amb formatge',
        precio: 2.90,
        imagen: '/assets/img/sandwich/lomoqueso.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'llom/formatge'
    },
    {
        id: 5,
        nombre: 'Burguer amb formatge',
        precio: 3.50,
        imagen: '/assets/img/sandwich/burgerambformatge.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'buerger/formatge'
    },
    {
        id: 6,
        nombre: 'Pernil Serrano amb formatge',
        precio: 4.00,
        imagen: '/assets/img/sandwich/pernilserranoformatge.png',
        categoria: 'llom',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'Pernil Serrano/formatge'
    },
    {
        id: 7,
        nombre: 'Truita de patates',
        precio: 2.35,
        imagen: '/assets/img/sandwich/bocadillodetortilla.png',
        categoria: 'truita',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'ou, patates'
    },
    {
        id: 8,
        nombre: 'Truita Francesa',
        precio: 2.90,
        imagen: '/assets/img/sandwich/truitatfrancesa.jpg',
        categoria: 'truita',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'ou/formatge'
    },
    {
        id: 9,
        nombre: 'Vegetal de Pollastre',
        imagen: '/assets/img/sandwich/vegetal-de-pollo.png',
        precio: 1.75,
        categoria: 'biquini',
        vegeteria: true,
        celiac: false,
        ingredients: 'pollastre/tomaquet/enciam/maionesa'
    },
    {
        id: 10,
        nombre: 'Cafè',
        precio: 0.95,
        imagen: '/assets/img/drinks/cafe.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients: null
    },
    {
        id: 11,
        nombre: 'Caffè Latte',
        precio: 1.15,
        imagen: '/assets/img/drinks/cafelate.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 12,
        nombre: 'Cafè cortado',
        precio: 1.00,
        imagen: '/assets/img/drinks/cafecortado.png',
        categoria: 'cafe',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 13,
        nombre: 'Te especial',
        precio: 0.95,
        imagen: '/assets/img/drinks/te.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 14,
        nombre: 'Got de llet',
        precio: 0.40,
        imagen: '/assets/img/drinks/gotdellet.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 15,
        nombre: 'Cocaolat',
        precio: 1.20,
        imagen: '/assets/img/drinks/cacaolat.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 16,
        nombre: 'Coca Cola',
        precio: 1.00,
        imagen: '/assets/img/drinks/cocacola.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 17,
        nombre: 'Fanta',
        precio: 1.00,
        imagen: '/assets/img/drinks/fanta.png',
        categoria: 'beguda',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 18,
        nombre: 'Aigua 50cl',
        precio: 0.75,
        imagen: '/assets/img/drinks/agua50cl.png',
        categoria: 'aigua',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 19,
        nombre: 'Aigua 1.5l',
        precio: 0.90,
        imagen: '/assets/img/drinks/agua1.5.png',
        categoria: 'aigua',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 20,
        nombre: 'Cervesa mitjana',
        precio: 1.00,
        imagen: '/assets/img/drinks/cervesa.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 21,
        nombre: 'Cervesa doble malta 1/3',
        precio: 1.40,
        imagen: '/assets/img/drinks/cervesadoblemalta.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 22,
        nombre: 'Cervesa sense alcohol 1/3',
        precio: 0.85,
        imagen: '/assets/img/drinks/cervesasinalcohol.png',
        categoria: 'cervesa',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 23,
        nombre: 'Suc de fruites 20cl',
        precio: 0.90,
        imagen: '/assets/img/drinks/zumodefrutas.png',
        categoria: 'suc',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 24,
        nombre: 'Donut',
        precio: 0.75,
        imagen: '/assets/img/deserts/donut.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 25,
        nombre: 'Donut de xocolata',
        precio: 1.00,
        imagen: '/assets/img/deserts/donut-chocolate.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 26,
        nombre: 'Triangle',
        precio: 1.00,
        imagen: '/assets/img/deserts/Triangulo-chocolate.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 27,
        nombre: 'Ensaïmada',
        precio: 0.65,
        imagen: '/assets/img/deserts/ensaimada.jpg',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 28,
        nombre: 'Croissant xocolata',
        precio: 0.90,
        imagen: '/assets/img/deserts/croissant-chocolate.jpg',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 29,
        nombre: 'Pasta de full',
        precio: 0.85,
        imagen: '/assets/img/deserts/hojaldre.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 30,
        nombre: 'Palmera',
        precio: 0.85,
        imagen: '/assets/img/deserts/palmera.png',
        categoria: 'altres',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 100,
        nombre: 'Amanida césar',
        precio: 2,
        imagen: '/assets/img/menu/ensaladacesar.jpg',
        categoria: 'menu',
        sub_categoria: 'first',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pasta/enciam/pa/césar'
    },
    {
        id: 101,
        nombre: 'Pasta amb pesto',
        precio: 2,
        imagen: '/assets/img/menu/pastaambpesto.jpg',
        categoria: 'menu',
        sub_categoria: 'first',
        vegeteria: 0,
        celiac: 0,
        ingredients: 'pasta/pesto'
    },
    {
        id: 102,
        nombre: 'Pure de patates',
        precio: 2,
        imagen: '/assets/img/menu/puredepatates.jpg',
        categoria: 'menu',
        sub_categoria: 'first',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'patates'
    },
    {
        id: 103,
        nombre: 'Salmo',
        precio: 2,
        imagen: '/assets/img/menu/salmon.jpg',
        categoria: 'menu',
        sub_categoria: 'second',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'salmo/patates'
    },
    {
        id: 104,
        nombre: 'Mandonguilles de carn',
        precio: 2,
        imagen: '/assets/img/menu/mandonguilles.jpg',
        categoria: 'menu',
        sub_categoria: 'second',
        vegeteria: 0,
        celiac: 1,
        ingredients: 'carn/tomaquet/ceba'
    },
    {
        id: 105,
        nombre: 'Paella "Marinera"',
        precio: 2,
        imagen: '/assets/img/menu/paella.png',
        categoria: 'menu',
        sub_categoria: 'second',
        vegeteria: 1,
        celiac: 1,
        ingredients: 'arros/gambes/musclos'
    },
    {
        id: 106,
        nombre: 'Pastis de xocolata',
        precio: 2,
        imagen: '/assets/img/menu/pasteldechcocolate.png',
        categoria: 'menu',
        sub_categoria: 'dessert',
        vegeteria: null,
        celiac: null,
        ingredients: null
    },
    {
        id: 107,
        nombre: 'Natilles',
        precio: 2,
        imagen: '/assets/img/menu/natilles.png',
        categoria: 'menu',
        sub_categoria: 'dessert',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 108,
        nombre: 'Coulant de xocolata',
        precio: 2,
        imagen: '/assets/img/menu/coulant.png',
        categoria: 'menu',
        sub_categoria: 'dessert',
        vegeteria: null,
        celiac: null,
        ingredients:null
    }
    ,
    {
        id: 109,
        nombre: 'Aigua',
        precio: 0.10,
        imagen: '/assets/img/drinks/agua50cl.png',
        categoria: 'menu',
        sub_categoria: 'drink',
        vegeteria: null,
        celiac: null,
        ingredients:null
    },
    {
        id: 111,
        nombre: 'Menú',
        imagen: '/assets/img/order/menu.png',
        precio: 6,
        categoria: 'menu',
        sub_categoria: 'menu',
        vegeteria: null,
        celiac: null,
        ingredients: null
    }

];


