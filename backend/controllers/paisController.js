const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from pais', (err, paises) => {
            if (err) {
                res.json(err);
            }
            res.json(paises);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_pais } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from pais where cod_pais = ?', [cod_pais], (err, pais) => {
            res.json(pais[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into pais set ?', [data], (err, pais) => {
            res.json(pais);
        });
    })
};

controller.update = (req, res) => {

    const { cod_pais } = req.params;
    const nuevo_pais = req.body;

    req.getConnection((err, conn) => {
        conn.query('update pais set ? where cod_pais = ?', [nuevo_pais, cod_pais], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_pais } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from pais where cod_pais = ?', [cod_pais], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
