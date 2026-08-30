import express from "express";
import cors from "cors";
import envConfig from "./config/envConfig.js";
import { logger } from "./middlewares/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import configureRoutes from "./routers/index.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGINS,
  }),
);

app.use(logger);
configureRoutes(app);
app.use(errorHandler);

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});
