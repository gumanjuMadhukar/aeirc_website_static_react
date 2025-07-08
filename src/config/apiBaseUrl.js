const BASE_URL = import.meta.env.BASE_URL;
const PROD_BASE_URL = import.meta.env.BASE_URL;
const DEV_BASE_URL = import.meta.env.BASE_URL;
const MODE = import.meta.env.MODE;

const APP_URI =
    MODE === "production"
        ? PROD_BASE_URL
        : DEV_BASE_URL || BASE_URL;

export default APP_URI;