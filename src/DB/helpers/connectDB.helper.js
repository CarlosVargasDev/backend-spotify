// URI LOCAL(DEV)
const DEV_DB_SERVER_URL = 'localhost'
const DEV_DB_PORT  = 10101;
const DEV_DB_NAME  = 'spotifyApp';
let DEV_URI_CONNECTION= `mongodb://${DEV_DB_SERVER_URL}:${DEV_DB_PORT}/${DEV_DB_NAME}`;


// URI DEV
const PROD_DB_SERVER_URL = process.env.DB_SERVER_URL;
const PROD_DB_PORT = process.env.DB_PORT || 10101;
const PROD_DB_USER = process.env.DB_USER || "";
const PROD_DB_PASSWORD = process.env.DB_PASSWORD || "";
const PROD_DB_NAME = process.env.DB_NAME || "spotifyApp";

const PROD_URI_CONNECTION  = `mongodb://${PROD_DB_USER}:${PROD_DB_PASSWORD}@${PROD_DB_SERVER_URL}:${PROD_DB_PORT}/${PROD_DB_NAME}`;    



module.exports = {
    PROD_URI_CONNECTION,
    DEV_URI_CONNECTION
}