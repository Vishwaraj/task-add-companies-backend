import { Sequelize } from "sequelize";
import { db } from "../db/sequelize.js";



//schema for company data
export const Company = db.define('companies', {
    cin: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
}, {timestamps: false})

