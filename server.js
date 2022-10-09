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

app.listen(PORT, () => {
    console.log('Server running on ' + PORT);
})

app.get('/', async (req, res) => {
res.status(200).send({msg: 'Hello from backend'});
});


app.use('/companies', companyRouter);


//testing connection;
db.authenticate()
.then(() => console.log('DB Connected'))
.catch((err) => console.log(err));
