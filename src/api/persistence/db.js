const {Pool} = require('pg');

module.exports = new Pool({
  max: 10,
  connectionString: 'postgres://user:pass@postgres:35432/db'
});
