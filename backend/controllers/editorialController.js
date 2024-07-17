const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from editorial', (err, editoriales) => {
            if (err) {
                res.json(err);
            }
            res.json(editoriales);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_editorial } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from editorial where cod_editorial = ?', [cod_editorial], (err, editorial) => {
            res.json(editorial[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into editorial set ?', [data], (err, editorial) => {
            res.json(editorial);
        });
    })
};

controller.update = (req, res) => {

    const { cod_editorial } = req.params;
    const nueva_editorial = req.body;

    req.getConnection((err, conn) => {
        conn.query('update editorial set ? where cod_editorial = ?', [nueva_editorial, cod_editorial], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_editorial } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from editorial where cod_editorial = ?', [cod_editorial], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
