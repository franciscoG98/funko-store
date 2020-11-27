const initialCategories = [
  {
    name: "Marvel",
    description: "Categoría Marvel",
  },
  {
    name: "DC Comics",
    description: "Categoría DC Comics",
  },
  {
    name: "Avengers",
    description: "Categoría Avengers",
  },
  {
    name: "X-Men",
    description: "Categoría X-Men",
  },
  {
    name: "Fantastic Four",
    description: "Categoría Fantastic Four",
  },
  {
    name: "Justice League",
    description: "Categoría Justice League",
  },
  {
    name: "Legend",
    description: "Categoría Legend",
  },
  {
    name: "Young Titans",
    description: "Categoría Young Titans",
  },
];
const initialProducts = [
  {
    name: "Captain America",
    description: "Captain America",
    price: 75,
    imagen: "https://inst-1.cdn.shockers.de/hs_cdn/out/pictures/master/product/1/avengers-endgame-captain-america-funko-pop-figur-37039.jpg",
    stock: 0,
  },
  {
    name: "Captain Marvel",
    description: "Carol Danvers",
    price: 60,
    imagen: "https://s1.thcdn.com/productimg/1600/1600/12219168-2454704917695557.jpg",
    stock: 10,
  },
  {
    name: "Iron Man",
    description: "Iron Man, alias Tony Stark",
    price: 95,
    imagen: "https://tienda.stripmarvel.com/wp-content/uploads/2020/02/x_fk47756.jpg",
    stock: 10,
  },
  {
    name: "Incredible Hulk",
    description: "Hulk, alias Bruce Banner",
    price: 55,
    imagen: "https://deepsanddeeps.com/media/catalog/product/cache/3/image/750x750/9df78eab33525d08d6e5fb8d27136e95/d/e/deeps-and-deeps-funko-pop-avengers-age-of-ultron-el-increible-hulk--foto-completa-4776.jpg",
    stock: 10,
  },
  {
    name: "Wolverine",
    description: "Wolverine, alias Logan",
    price: 150,
    imagen: "https://funkollection.es/wp-content/uploads/2019/10/img_159639_b8aa192ff58a991a1d18178ac1b44081_1.jpg",
    stock: 4,
  },
  {
    name: "Mystique",
    description: "Mystique, alias Raven",
    price: 99,
    imagen: "https://d26lpennugtm8s.cloudfront.net/stores/841/670/products/mystique-638-sola1-a41fb9cc88b2a20a3416016884983272-1024-1024.jpg",
    stock: 10,
  },
  {
    name: "The Rock",
    description: "The Rock",
    price: 120,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAVZrXeMzx71HvELEyL9IyVrt_kLZnZjGLJA&usqp=CAU",
    stock: 10,
  },
  {
    name: "Invisible Woman",
    description: "Invisible Woman",
    price: 180,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPj9Fovd3ueQ44hVdQ-D8_hglvW11RhoxQqA&usqp=CAU",
    stock: 10,
  },
  {
    name: "Superman",
    description: "Superman",
    price: 45,
    imagen: "https://i5.walmartimages.com/asr/57ecbd76-8180-478a-b16e-b4d3c8235c26.9fb16ef98d7033d4c4c51765ebcfc72d.png",
    stock: 10,
  },
  {
    name: "Batman Kryptonite Suit",
    description: "Batman Kryptonite Suit (Batman vs Superman)",
    price: 70,
    imagen: "https://i5.walmartimages.com/asr/c736dd92-c8c9-4b6f-9f0e-1963111de155_1.ff6517eacfd8aae94d837d5d0a911d64.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    stock: 10,
  },
  {
    name: "Batman Grim Knight",
    description: "Batman Grim Knight",
    price: 89,
    imagen: "https://http2.mlstatic.com/funko-pop-heroes-batman-arkham-knight-batman-71-D_Q_NP_958692-MLA40973694734_032020-F.webp",
    stock: 10,
  },
  {
    name: "Wonder Woman",
    description: "Wonder Woman",
    price: 105,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxH10sds60X5PTPIGqJ_Xi2sEnVy9Bdo5MKw&usqp=CAU",
    stock: 10,
  },
  {
    name: "White Canary",
    description: "White Canary alias Sara Lance",
    price: 400,
    imagen: "https://hottopic.scene7.com/is/image/HotTopic/10720103_av1?$pdp_hero_large$",
    stock: 10,
  },

];

const categoryProducts = [
  { categoryId: 1, productId: 1 },
  { categoryId: 1, productId: 2 },
  { categoryId: 1, productId: 3 },
  { categoryId: 1, productId: 4 },
  { categoryId: 1, productId: 5 },
  { categoryId: 1, productId: 6 },
  { categoryId: 1, productId: 7 },
  { categoryId: 1, productId: 8 },
  { categoryId: 2, productId: 9 },
  { categoryId: 2, productId: 10 },
  { categoryId: 2, productId: 11 },
  { categoryId: 2, productId: 12 },
  { categoryId: 2, productId: 13 },
  { categoryId: 3, productId: 1 },
  { categoryId: 3, productId: 2 },
  { categoryId: 3, productId: 3 },
  { categoryId: 3, productId: 4 },
  { categoryId: 4, productId: 5 },
  { categoryId: 4, productId: 6 },
  { categoryId: 5, productId: 7 },
  { categoryId: 5, productId: 8 },
  { categoryId: 6, productId: 9 },
  { categoryId: 6, productId: 10 },
  { categoryId: 6, productId: 11 },
  { categoryId: 6, productId: 12 },
  { categoryId: 7, productId: 13 },
];
let initialUsers = [
  {
    id: -1,
    username: "Guest",
    fullname: "Invitado",
    email: "guest@funkos.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: false,
    password: "password"
  },
  {
    username: "Ele",
    fullname: "Elena Gonzalez",
    email: "ele@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: true,
    password: "password"
  },
  {
    username: "Panchito",
    fullname: "Francisco Gonzalez",
    email: "pancho@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: false,
    password: "SoyPancho"
  },
  {
    username: "Homero",
    fullname: "Homero Simpson",
    email: "homero@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: false,
    password: "LisaNecesitaFrenos"
  }
];
let initialOrders = [
  {
    id: -1,
    total: 0,
    state: "cart",
    userId: -1
  },
  {
    total: 1000,
    state: "cart",
    userId: 1
  },
  {
    total: 2000,
    state: "created",
    userId: 1
  },
  {
    total: 1000,
    state: "processing",
    userId: 1
  },
  {
    total: 1000,
    state: "canceled",
    userId: 1
  },
  {
    total: 1000,
    state: "completed",
    userId: 1
  },
  {
    total: 1000,
    state: "cart",
    userId: 2
  },
  {
    total: 1000,
    state: "canceled",
    userId: 2
  },
  {
    total: 1000,
    state: "cart",
    userId: 3
  },
  {
    total: 1000,
    state: "canceled",
    userId: 3
  },
  {
    total: 1000,
    state: "completed",
    userId: 3
  },
]

let initialOrderlines = [
  {
    productId: 3,
    orderId: 1,
    quantity: 6,
    price: 50,
    subtotal: 300
  },
  {
    productId: 2,
    orderId: 1,
    quantity: 3,
    price: 20,
    subtotal: 60
  },
  {
    productId: 5,
    orderId: 2,
    quantity: 7,
    price: 25,
    subtotal: 175
  },
  {
    productId: 7,
    orderId: 2,
    quantity: 5,
    price: 100,
    subtotal: 500
  },
  {
    productId: 12,
    orderId: 3,
    quantity: 3,
    price: 300,
    subtotal: 900
  },
  {
    productId: 11,
    orderId: 3,
    quantity: 1,
    price: 50,
    subtotal: 50
  },
  {
    productId: 2,
    orderId: 3,
    quantity: 2,
    price: 20,
    subtotal: 40
  },

]

let initialRates = [

  {
    id: 1,
    qualification: 1, // wolverine
    description: 'un capo el logan se la re banca quien pudiera tener adamantium en el cuerpo',
    prodId: 5,
    userId: 1,
  }

]


module.exports = {
  initialCategories,
  initialProducts,
  categoryProducts,
  initialUsers,
  initialOrders,
  initialOrderlines,
};
