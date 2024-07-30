const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT A.COD_LIBROAREA as cod_libroarea, A.COD_LIBRO AS cod_libro, A.COD_AREA AS cod_area, B.AREA AS area, C.TITULO AS titulo FROM LIBROSPORAREA A INNER JOIN AREA B ON A.COD_AREA = B.COD_AREA INNER JOIN LIBRO C ON A.COD_LIBRO = C.COD_LIBRO order by cod_libroarea;', (err, librosporarea) => {
            if (err) {
                res.json(err);
            }
            res.json(librosporarea);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_libroarea } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from librosporarea where cod_libroarea = ?', [cod_libroarea], (err, libroporarea) => {
            res.json(libroporarea[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into librosporarea set ?', [data], (err, libroporarea) => {
            res.json(libroporarea);
        });
    })
};

controller.update = (req, res) => {

    const { cod_libroarea } = req.params;
    const nuevo_libroporarea = req.body;

    req.getConnection((err, conn) => {
        conn.query('update librosporarea set ? where cod_libroarea = ?', [nuevo_libroporarea, cod_libroarea], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_libroarea } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from librosporarea where cod_libroarea = ?', [cod_libroarea], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
