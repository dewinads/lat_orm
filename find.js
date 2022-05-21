const { Produk } = require("./models");

Produk.findAll().then((produk) => {
    console.log(produk);
});

Produk.findOne({
    where: {
        id: 1,
    },
}).then((produk) => {
    console.log(produk);
});