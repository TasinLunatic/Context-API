import express from 'express';
import cors from 'cors';

import envConfig from './config/envConfig.js';

import configureRoutes from './routers/index.js';

const app = express()

app.use(express.json())
app.use(cors({
    origin :envConfig.ALLOWED_ORIGINS
})
);
    

configureRoutes(app);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});