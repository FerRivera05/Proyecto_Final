const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select p.cod_prestamo as cod_prestamo, p.cod_existencia as cod_existencia, p.cod_afiliado as cod_afiliado, p.fechaprestamo as fechaprestamo, p.horaprestamo as horaprestamo, p.cod_tipoprestamo as cod_tipoprestamo, p.fechaentrega as fechaentrega, p.horaentrega as horaentrega, t.tipoprestamo as tipoprestamo, b.titulo as titulo, a.nombre as nombre from prestamo p inner join tipoprestamo t on p.cod_tipoprestamo = t.cod_tipoprestamo inner join afiliado a on p.cod_afiliado = a.cod_afiliado inner join librosporexistencia l on p.cod_existencia = l.cod_existencia inner join libro b on l.cod_libro = b.cod_libro order by cod_prestamo;', (err, prestamos) => {
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

    const { cod_prestamo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from prestamo where cod_prestamo = ?', [cod_prestamo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
