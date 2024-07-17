const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from tipoprestamo', (err, tiposprestamo) => {
            if (err) {
                res.json(err);
            }
            res.json(tiposprestamo);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_tipoprestamo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from tipoprestamo where cod_tipoprestamo = ?', [cod_tipoprestamo], (err, tipoprestamo) => {
            res.json(tipoprestamo[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into tipoprestamo set ?', [data], (err, tipoprestamo) => {
            res.json(tipoprestamo);
        });
    })
};

controller.update = (req, res) => {

    const { cod_tipoprestamo } = req.params;
    const nuevo_tipoprestamo = req.body;

    req.getConnection((err, conn) => {
        conn.query('update tipoprestamo set ? where cod_tipoprestamo = ?', [nuevo_tipoprestamo, cod_tipoprestamo], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_tipoprestamo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from tipoprestamo where cod_tipoprestamo = ?', [cod_tipoprestamo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
