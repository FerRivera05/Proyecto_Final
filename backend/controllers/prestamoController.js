const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from prestamo', (err, prestamos) => {
            if (err) {
                res.json(err);
            }
            res.json(prestamos);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_prestamo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from prestamo where cod_prestamo = ?', [cod_prestamo], (err, prestamo) => {
            res.json(prestamo[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into prestamo set ?', [data], (err, prestamo) => {
            res.json(prestamo);
        });
    })
};

controller.update = (req, res) => {

    const { cod_prestamo } = req.params;
    const nuevo_prestamo = req.body;

    req.getConnection((err, conn) => {
        conn.query('update prestamo set ? where cod_prestamo = ?', [nuevo_prestamo, cod_prestamo], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_libro: cod_prestamo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from prestamo where cod_prestamo = ?', [cod_prestamo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
