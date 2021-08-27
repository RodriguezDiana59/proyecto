import morgan from "morgan";
import express from "express";
import router from "./routes/";
import db from "./database/";
import cors from "cors";

const servidor = express();

servidor.use(express.json());

servidor.use(express.urlencoded({ extended: true }));

servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(router);

db.sequelize.sync({force: false}).then(() => {
    console.log("Base de datos enlazada correctamente");
});

module.exports = servidor;