const { Produk } = require("./models");

Produk.update(
    {
        varian: "vanilla",
    },
    {
        where: {
            id: 1,
        },
    }
)
.then(() => {
    console.log("Data berhasil di update");
    process.exit();
})
.catch((err) => {
    console.log("Gagal mengupdate data");
});