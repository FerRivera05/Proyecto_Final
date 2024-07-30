const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select a.cod_existencia as cod_existencia, a.cod_libro as cod_libro, b.titulo as titulo from librosporexistencia a inner join libro b on a.cod_libro = b.cod_libro order by cod_existencia;', (err, librosporexistencia) => {
            if (err) {
                res.json(err);
            }
            res.json(librosporexistencia);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_existencia } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from librosporexistencia where cod_existencia = ?', [cod_existencia], (err, libroporexistencia) => {
            res.json(libroporexistencia[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into librosporexistencia set ?', [data], (err, libroporexistencia) => {
            res.json(libroporexistencia);
        });
    })
};

controller.update = (req, res) => {

    const { cod_existencia } = req.params;
    const nuevo_libroporexistencia = req.body;

    req.getConnection((err, conn) => {
        conn.query('update librosporexistencia set ? where cod_existencia = ?', [nuevo_libroporexistencia, cod_existencia], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_existencia } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from librosporexistencia where cod_existencia = ?', [cod_existencia], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
