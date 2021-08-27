import { 
    mostrarUsuarios, 
    insertarUsuarios, 
    actualizarUsuarios,
    eliminarUsuarios, 
   } from "../controllers/user"; 
import {
    editarTarea,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
    } from "../controllers/homework"; 
import { Router } from "express";
const router = Router();

router.get('/usuarios', mostrarUsuarios);
router.post('/usuarios', insertarUsuarios);
router.put('/usuarios', actualizarUsuarios);
router.delete('/usuarios', eliminarUsuarios);

router.get('/tarea', actualizarTarea);
router.post('/tarea', agregarTarea);
router.delete('/tarea/:id', eliminarTarea);
router.put('/tarea/:id', editarTarea);


module.exports = router;