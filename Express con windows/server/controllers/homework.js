import db from "../database/index";

const actualizarTarea = async (req, res) => {
    try {
        const results = await db.homework.findAll();
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({
            message:error.message,
        });
    }
}
const agregarTarea = async (req, res) => {
    try {
        let tarea = req.body;
        await db.homework.create(
            tarea
        );
        res.status(200).send(
            {
                message:"Creada"
            }
        );
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        )
    }
}
const eliminarTarea = async (req, res) => {
    try {
        await db.homework.destroy(
            {
                where: { id: req.params.id },
            }
        );
        res.status(200).send({message: "Ok"});
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}
const editarTarea = async (req, res) => {
    try {
        let tarea = req.body;
        await db.homework.update(
            tarea,
            {
                where:{ id: req.params.id},
            }
        );
        res.status(200).send(
            {
                message:"Actualziado correctamente"
            }
        )
    } catch (error) {
        res.status(500).send(
            {
                message:error.message,
            }
        );
    }
}

export {    
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
};