const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from autor', (err, autores) => {
            if (err) {
                res.json(err);
            }
            res.json(autores);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_autor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from autor where cod_autor = ?', [cod_autor], (err, area) => {
            res.json(area[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into autor set ?', [data], (err, autor) => {
            res.json(autor);
        });
    })
};

controller.update = (req, res) => {

    const { cod_autor } = req.params;
    const nuevo_autor = req.body;

    req.getConnection((err, conn) => {
        conn.query('update autor set ? where cod_autor = ?', [nuevo_autor, cod_autor], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_autor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from autor where cod_autor = ?', [cod_autor], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
