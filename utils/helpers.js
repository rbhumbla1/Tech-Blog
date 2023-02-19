const {Blog, Comment} = require("../models")

module.exports = {

  format_time:(string) => {
    return string.toLocaleDateString()
  },


};
