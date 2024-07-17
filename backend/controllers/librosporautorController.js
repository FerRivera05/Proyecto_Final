const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from librosporautor', (err, librosporautor) => {
            if (err) {
                res.json(err);
            }
            res.json(librosporautor);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_libroautor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from librosporautor where cod_libroautor = ?', [cod_libroautor], (err, libroporautor) => {
            res.json(libroporautor[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into librosporautor set ?', [data], (err, libroporautor) => {
            res.json(libroporautor);
        });
    })
};

controller.update = (req, res) => {

    const { cod_libroautor } = req.params;
    const nuevo_libroporautor = req.body;

    req.getConnection((err, conn) => {
        conn.query('update librosporautor set ? where cod_libroautor = ?', [nuevo_libroporautor, cod_libroautor], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_libroautor } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from librosporautor where cod_libroautor = ?', [cod_libroautor], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
