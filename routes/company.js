import { Sequelize } from "sequelize";
import express from 'express';
import fetch from 'node-fetch';
import { Company } from "../models/company.js";

const router = express.Router();

router.post('/find', async (req,res) => {

    try {
     const result = await fetch('https://www.zaubacorp.com/custom-search', {
             method: 'POST',
             body: JSON.stringify(req.body),
             headers: {
                 'Content-type': 'application/json',
             }
         })
         
        const data = await result.text();

        res.status(200).send({result: data});
 } catch (error) {
      console.log(error);
 }
})


//adding data to db
router.post('/add', async (req, res) => {
 try {
     const result = await Company.create(req.body);

     res.status(200).send({msg:'Successfully added', result: result});

 } catch (error) {
     console.log(error);
     res.status(400).send({msg: error.message});
 }
})


router.get('/list', async (req, res) => {
    try {
        const result = await Company.findAll();
        res.status(200).send({result: result});
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
})


export const companyRouter = router;