import { DataTypes } from "sequelize"
import { db } from "./db.mjs"

const Task = db.define("Task", {
    descripton: {
        type: DataTypes.TEXT,
    },
    finish:{
        type: DataTypes.BOOLEAN
    }
},
    {
        paranoid: true
    }
)

await db.sync({ alter: true })

export { Task }