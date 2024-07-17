const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from tipolibro', (err, tiposlibro) => {
            if (err) {
                res.json(err);
            }
            res.json(tiposlibro);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_tipolibro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from tipolibro where cod_tipolibro = ?', [cod_tipolibro], (err, tipolibro) => {
            res.json(tipolibro[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into tipolibro set ?', [data], (err, tipolibro) => {
            res.json(tipolibro);
        });
    })
};

controller.update = (req, res) => {

    const { cod_tipolibro } = req.params;
    const nuevo_tipolibro = req.body;

    req.getConnection((err, conn) => {
        conn.query('update tipolibro set ? where cod_tipolibro = ?', [nuevo_tipolibro, cod_tipolibro], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_tipolibro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from tipolibro where cod_tipolibro = ?', [cod_tipolibro], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
