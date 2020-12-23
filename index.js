const app = require('./src/app');
const config = require('./src/config/default.config.json');

app.listen(config.port, () => console.log(`The server is running on port ${config.port}`));