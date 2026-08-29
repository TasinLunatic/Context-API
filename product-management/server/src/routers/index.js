import baseRouter from "./base.js";
import productRouter from "./product.js";

const configureRoutes = (app) => {
    app.use('/api', baseRouter);
    app.use('/api/products', productRouter);
}

export default configureRoutes;