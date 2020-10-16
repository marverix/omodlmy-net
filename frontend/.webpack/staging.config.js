if (process.env.API_URL == null) {
  process.env.API_URL = 'https://staging.omodlmy.net';
}

const Config = require('./classes/BuildConfig');
const config = new Config();
module.exports = config.export();
