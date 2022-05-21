const { Produk } = require("./models");

Produk.create({
    nama_produk: "Holigrels Body Mist BPOM",
    deskripsi: "Wangi manis seperti toko kue dengan sedikit aroma Tiramisu. Cenderung Warm and Sweet",
    varian: "Vanilla Eclair",
    harga: 20000
})
.then((produk) => {
    console.log(produk);
});