import dotenv from 'dotenv'
dotenv.config();


const envConfig = {
    PORT: process.env.PORT || 5000,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:3009',
};

export default envConfig;