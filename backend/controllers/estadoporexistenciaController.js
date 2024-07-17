const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from estadoporexistencia', (err, estadosporexistencia) => {
            if (err) {
                res.json(err);
            }
            res.json(estadosporexistencia);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_estadoexistencia } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from estadoporexistencia where cod_estadoexistencia = ?', [cod_estadoexistencia], (err, estadoporexistencia) => {
            res.json(estadoporexistencia[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into estadoporexistencia set ?', [data], (err, estadoporexistencia) => {
            res.json(estadoporexistencia);
        });
    })
};

controller.update = (req, res) => {

    const { cod_estadoexistencia } = req.params;
    const nuevo_estadoporexistencia = req.body;

    req.getConnection((err, conn) => {
        conn.query('update estadoporexistencia set ? where cod_estadoexistencia = ?', [nuevo_estadoporexistencia, cod_estadoexistencia], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_estadoexistencia } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from estadoporexistencia where cod_estadoexistencia = ?', [cod_estadoexistencia], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
