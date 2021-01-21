import axios from "axios";

const {
    REACT_APP_PROTOCOL: APP_PROTOCOL,
    REACT_APP_DOMEN: APP_DOMEN,
    REACT_APP_PORT: APP_PORT,
} = process.env;

export default axios.create({
    baseURL: `${APP_PROTOCOL}://${APP_DOMEN}:${APP_PORT}/api`,
});