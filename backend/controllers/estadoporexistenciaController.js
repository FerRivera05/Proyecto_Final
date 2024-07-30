const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select a.cod_estadoexistencia as cod_estadoexistencia, a.cod_existencia as cod_existencia, a.cod_estado as cod_estado, b.estado as estado, d.titulo as titulo from estadoporexistencia a inner join estado b on a.cod_estado = b.cod_estado inner join librosporexistencia c on a.cod_existencia = c.cod_existencia inner join libro d on c.cod_libro = d.cod_libro order by cod_estadoexistencia;', (err, estadosporexistencia) => {
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
