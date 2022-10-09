import express from 'express';
import { db } from './db/sequelize.js';
import cors from 'cors';
import fetch from 'node-fetch';
import { Company } from './models/company.js';
import { companyRouter } from './routes/company.js';


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;


//setting up server
app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})

//testing connection
db.authenticate()
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err));


//basic route for checking whether backend is connected
app.get('/', async (req, res) => {
res.status(200).send({msg: 'Hello from backend'});
});


//routing for companies route
app.use('/companies', companyRouter);




