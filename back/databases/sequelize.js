import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: "cars",
    username: "root",
    password: "", // Assurez-vous que le mot de passe correspond bien à celui de votre configuration MySQL locale
    host: "localhost", // Remplacez 'mysql' par 'localhost'
    dialect: "mysql",
    port: 3306 // Assurez-vous que MySQL écoute bien sur ce port
});

export default sequelize;
