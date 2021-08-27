import db from "../database/";
const mostrarUsuarios = async (req, res) => {
    try {
        const results = await db.user.findAll();
        res.status(200).send(results);
    } catch (error) {
        res.status(200).send({

        });
    }
};
const insertarUsuarios = async (req, res) => {
    try {
        await db.user.create({
            title: req.body.title,
            description: req,body,description,
            published: req,body,published,
        });
        res.status(200).send({
            message: "registrado satisfactoriamente",
        });
    } catch (error) {
    res.status(200).send({
        message: error.message,
         });
    }
};
const actualizarUsuarios = async (req, res) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}
const eliminarUsuarios = async (req, res) => {
    console.log("estas insertando un usuario");
    res.status(200).send({
        message: 'estas insertando un usuario'
    });
}
export {
    mostrarUsuarios,
    insertarUsuarios,
    actualizarUsuarios,
    eliminarUsuarios,
}