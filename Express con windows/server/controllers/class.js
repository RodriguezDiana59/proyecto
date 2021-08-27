const añadirClase = async (req, res) => {
    console.log("clase frameworks");
    res.status(200).send({
        message: 'clase frameworks'
    });
}
const entrarClase = async (req, res) => {
    console.log("estas en entrar a clase");
    res.status(200).send({
        message: 'estas entrar a clase'
    });
}
const cambiarClase = async (req, res) => {
    console.log("estas en cambiar de clase");
    res.status(200).send({
        message: 'estas cambiar de clase'
    });
}
const tareasClase = async (req, res) => {
    console.log("estas en las tareas de clase");
    res.status(200).send({
        message: 'estas en las tareas de clase'
    });
}
export {
    añadirClase,
    entrarClase,
    cambiarClase,
    tareasClase,
}