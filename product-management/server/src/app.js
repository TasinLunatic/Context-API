import express from 'express';
import cors from 'cors';

import envConfig from './config/envConfig.js';

import {mockProducts} from './mockdata.js'
const app = express()

app.use(express.json())
app.use(cors({
    origin :envConfig.ALLOWED_ORIGINS
})
);
    


app.get('/status', (req, res) => {
  res.json({
    message:'Hello World!'
   })
})

app.get('/api/products', (req, res) => {
  res.status(200).json(mockProducts)
});

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});