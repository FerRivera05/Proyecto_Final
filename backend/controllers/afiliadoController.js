const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from afiliado', (err, afiliados) => {
            if (err) {
                res.json(err);
            }
            res.json(afiliados);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_afiliado } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from afiliados where cod_afiliado = ?', [cod_afiliado], (err, afiliado) => {
            res.json(afiliado[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into afiliado set ?', [data], (err, afiliado) => {
            res.json(afiliado);
        });
    })
};

controller.update = (req, res) => {

    const { cod_afiliado } = req.params;
    const nuevo_afiliado = req.body;

    req.getConnection((err, conn) => {
        conn.query('update afiliado set ? where cod_afiliado = ?', [nuevo_afiliado, cod_afiliado], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_afiliado } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from afiliado where cod_afiliado = ?', [cod_afiliado], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
