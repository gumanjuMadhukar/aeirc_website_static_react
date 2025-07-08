const BASE_URL = import.meta.env.VITE_BASE_URL;
const PROD_BASE_URL = import.meta.env.VITE_PROD_BACKEND_URL;
const DEV_BASE_URL = import.meta.env.VITE_DEV_BACKEND_URL;
const MODE = import.meta.env.VITE_MODE;

const APP_URI =
    MODE === "production"
        ? PROD_BASE_URL
        : DEV_BASE_URL || BASE_URL;

export default APP_URI;