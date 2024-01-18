import { configDotenv } from 'dotenv';


// Load environmental variables only when on development environment
if (process.env.NODE_ENV !== 'production')
    configDotenv();

/**
 * Global app configuration options
 */
const AppConfig: any = {
    db: {
        url: process.env.MONGO_URL,
        // url: 'mongodb://localhost:27017/FileUpload',
        user: process.env.MONGO_USER,
        key: process.env.MONGO_PASSKEY
    },
    server: {
        port: process.env.PORT || 5000,
        url: process.env.BASE_API_URL
    }
}

export default AppConfig;