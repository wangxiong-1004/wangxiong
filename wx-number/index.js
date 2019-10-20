if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/wx-number.min')
} else {
  module.exports = require('./dist/wx-number')
}
