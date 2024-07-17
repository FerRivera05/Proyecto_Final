const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from estado', (err, estados) => {
            if (err) {
                res.json(err);
            }
            res.json(estados);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_estado } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from estado where cod_estado = ?', [cod_estado], (err, estado) => {
            res.json(estado[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into estado set ?', [data], (err, estado) => {
            res.json(estado);
        });
    })
};

controller.update = (req, res) => {

    const { cod_estado } = req.params;
    const nuevo_estado = req.body;

    req.getConnection((err, conn) => {
        conn.query('update estado set ? where cod_estado = ?', [nuevo_estado, cod_estado], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_estado } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from estado where cod_estado = ?', [cod_estado], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
