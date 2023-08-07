import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect:"sqlite",
    storage: "./Tasks.sqlite"
})

export { db }