const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('select * from area', (err, areas) => {
            if (err) {
                res.json(err);
            }
            res.json(areas);
        });
    });
};

controller.edit = (req, res) => {

    const { cod_area } = req.params;

    req.getConnection((err, conn) => {
        conn.query('select * from area where cod_area = ?', [cod_area], (err, area) => {
            res.json(area[0]);
        });
    });
};

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('insert into area set ?', [data], (err, area) => {
            res.json(area);
        });
    })
};

controller.update = (req, res) => {

    const { cod_area } = req.params;
    const nueva_area = req.body;

    req.getConnection((err, conn) => {
        conn.query('update area set ? where cod_area = ?', [nueva_area, cod_area], (err, rows) => {
            res.json({ message: "Registro Actualizado" });
        });
    });
};

controller.delete = (req, res) => {

    const { cod_area } = req.params;

    req.getConnection((err, conn) => {
        conn.query('delete from area where cod_area = ?', [cod_area], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    })
};

module.exports = controller;
