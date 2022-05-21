const express = require("express");
const { Produk } = require("./models")

const app = express()
const PORT = 3000;

app.use(express.json());

//GET all Product
app.get('/produk', (req,res) => {
    Produk.findAll()
    .then(produk => {
        res.status(200).json(produk)
    });
});

//GET by ID
app.get('/produk/:id', (req, res) => {
    Produk.findOne({
        where: { id: req.params.id }
    })
    .then(produk => {
        res.status(200).json(produk)
    })
})

//POST produk
app.post('/produk', (req, res) => {
    Produk.create({
        nama_produk: req.body.nama_produk,
        deskripsi: req.body.deskripsi,
        varian: req.body.varian,
        harga: req.body.harga
    })
    .then(produk => {
        res.status(201).json(produk)
    }) .catch(err => {
        res.status(422).json("Can't create product")
    })
});

//PUT produk
app.put('/produk/:id', (req, res) => {
    Produk.update(
        {
            nama_produk: req.body.nama_produk,
            deskripsi: req.body.deskripsi,
            varian: req.body.varian,
            harga: req.body.harga
        },
        {
            where: { id: req.params.id },
        }
    )
    .then(() => {
        res.status(200).json({ message: "Produk berhasil di update" });
    })
    .catch((err) => {
        res.status(422).json("Produk gagal di update");
    });
});

//DELETE produk
app.delete('/produk/:id', (req, res) => {
    Produk.destroy({
        where: { id: req.params.id },
    })
    .then(() => {
        res.sendStatus(204)
    })
    .catch(err => {
        res.status(422).json("Produk gagal dihapus");
    });
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});