const mongoose = require('mongoose') 

const Conn = () => {
  mongoose.connect()
}

module.exports = Conn