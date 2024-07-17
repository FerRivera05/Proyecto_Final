const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from libro', (err, libros) => {
            if (err) {
                res.json(err);
            }
            res.json(libros);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_libro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from libro where cod_libro = ?', [cod_libro], (err, libro) => {
            res.json(libro[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into libro set ?', [data], (err, libro) => {
            res.json(libro);
        });
    })
};

controller.update = (req, res) => {

    const { cod_libro } = req.params;
    const nuevo_libro = req.body;

    req.getConnection((err, conn) => {
        conn.query('update libro set ? where cod_libro = ?', [nuevo_libro, cod_libro], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_libro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from libro where cod_libro = ?', [cod_libro], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
