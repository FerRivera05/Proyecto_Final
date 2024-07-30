const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select a.cod_libroautor as cod_libroautor, a.cod_autor as cod_autor, a.cod_libro as cod_libro, b.autor as autor, c.titulo as titulo from librosporautor a inner join autor b on a.cod_autor = b.cod_autor inner join libro c on a.cod_libro = c.cod_libro order by cod_libroautor;', (err, librosporautor) => {
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
