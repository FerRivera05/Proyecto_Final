const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select l.cod_libro as cod_libro, l.ISBN as ISBN, l.titulo as titulo, l.cod_editorial as cod_editorial, l.cod_pais as cod_pais, l.cod_tipolibro as cod_tipolibro, l.fechalanzamiento as fechalanzamiento, l.edicion as edicion, e.editorial as editorial, p.pais as pais, t.tipo as tipo from libro l inner join editorial e on l.cod_editorial = e.cod_editorial inner join pais p on l.cod_pais = p.cod_pais inner join tipolibro t on l.cod_tipolibro = t.cod_tipolibro order by cod_libro;', (err, libros) => {
            if (err) {
                res.json(err);
            }
            res.json(libros);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_libro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from libro where cod_libro = ?', [cod_libro], (err, libro) => {
            res.json(libro[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into libro set ?', [data], (err, libro) => {
            res.json(libro);
        });
    })
};

controller.update = (req, res) => {

    const { cod_libro } = req.params;
    const nuevo_libro = req.body;

    req.getConnection((err, conn) => {
        conn.query('update libro set ? where cod_libro = ?', [nuevo_libro, cod_libro], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_libro } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from libro where cod_libro = ?', [cod_libro], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
