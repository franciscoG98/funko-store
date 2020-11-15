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
    name: "Capitán América",
    description: "Este es el funko del Capi",
    price: 100,
    imagen: "https://lafrikileria.com/14056-large_default/funko-pop-capitan-america-avengers.jpg",
    stock: 10,
  },
  {
    name: "Capitana Marvel",
    description: "Este es el funko de la Carol Danvers",
    price: 100,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtymm2PJTJ9HaNGaXrAl7u2vsWF3duGY7yFw&usqp=CAU",
    stock: 10,
  },
  {
    name: "Iron Man",
    description: "Este es el funko de I am Iron Man, alias Tony Stark",
    price: 100,
    imagen: "https://http2.mlstatic.com/funko-pop-marvel-avengers-infinity-war-iron-man-figura-de-vi-D_NQ_NP_723986-MCO31542984644_072019-F.jpg",
    stock: 10,
  },
  {
    name: "EL increíble Hulk",
    description: "Este es el funko de Hulk, alias Bruce Banner",
    price: 100,
    imagen: "https://deepsanddeeps.com/media/catalog/product/cache/3/image/750x750/9df78eab33525d08d6e5fb8d27136e95/d/e/deeps-and-deeps-funko-pop-avengers-age-of-ultron-el-increible-hulk--foto-completa-4776.jpg",
    stock: 10,
  },
  {
    name: "Wolverine",
    description: "Este es el funko de Wolverine, alias Logan",
    price: 100,
    imagen: "https://funkollection.es/wp-content/uploads/2019/10/img_159639_b8aa192ff58a991a1d18178ac1b44081_1.jpg",
    stock: 0,
  },
  {
    name: "Mystique",
    description: "Este es el funko de Mystique, alias Raven",
    price: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbjjleXM8YH2mcVYkY5lB_NuSCUB9yZpzvLA&usqp=CAU",
    stock: 10,
  },
  {
    name: "La Roca",
    description: "Este es el funko de La Roca",
    price: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAVZrXeMzx71HvELEyL9IyVrt_kLZnZjGLJA&usqp=CAU",
    stock: 10,
  },
  {
    name: "Mujer Invisible",
    description: "Este es el funko de Mujer Invisible",
    price: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPj9Fovd3ueQ44hVdQ-D8_hglvW11RhoxQqA&usqp=CAU",
    stock: 10,
  },
  {
    name: "Superman",
    description: "Este es el funko de Superman",
    price: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyePZg3n0dHjFUsCjS60nZUQ7TwF0nGbnIdA&usqp=CAU",
    stock: 10,
  },
  {
    name: "Batman con kiryptoarmadura",
    description: "Este es el funko de Batman con el traje de kryptonita de Batman vs Superman",
    price: 500,
    imagen: "https://i5.walmartimages.com/asr/c736dd92-c8c9-4b6f-9f0e-1963111de155_1.ff6517eacfd8aae94d837d5d0a911d64.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    stock: 10,
  },
  {
    name: "Batman",
    description: "Este es el funko de Batman",
    price: 500,
    imagen: "https://cdn.discordapp.com/attachments/774280442564182059/774714514465751080/61si8R5UMML.png",
    stock: 10,
  },
  {
    name: "Wonder Woman",
    description: "Este es el funko de Batman",
    price: 500,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxH10sds60X5PTPIGqJ_Xi2sEnVy9Bdo5MKw&usqp=CAU",
    stock: 10,
  },
  {
    name: "White Canary",
    description: "Este es el funko de White Canary alias Sara Lance",
    price: 500,
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
    fullname: "Ele Gonzalez",
    email: "ele@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: true
  },
  {
    fullname: "Pancho Gonzalez",
    email: "pancho@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: false
  },
  {
    fullname: "Homero Simpson",
    email: "homero@admin.com",
    phone: "123456789",
    address: "Av siempre viva 123",
    state: "Argentina",
    isAdmin: false
  }
];
let initialOrders = [
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
  },
  {
    productId: 2,
    orderId: 1,
    quantity: 3,
    price: 12,
  },
  {
    productId: 5,
    orderId: 2,
    quantity: 7,
    price: 2354,
  },
  {
    productId: 7,
    orderId: 2,
    quantity: 5,
    price: 123,
  },
  {
    productId: 12,
    orderId: 3,
    quantity: 3,
    price: 5022,
  },
  {
    productId: 11,
    orderId: 3,
    quantity: 1,
    price: 43,
  },
  {
    productId: 2,
    orderId: 3,
    quantity: 2,
    price: 2,
  },

]
module.exports = {
  initialCategories,
  initialProducts,
  categoryProducts,
  initialUsers,
  initialOrders,
  initialOrderlines,
};
