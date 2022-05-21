const { Produk } = require("./models");

Produk.destroy({
    where: {
        id: 1,
    },
}).then(() => {
    console.log("Data terhapus");
});