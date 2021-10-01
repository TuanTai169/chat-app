const day = require("dayjs")
function formatMessage(username, text) {
  return {
    username,
    text,
    time: day().format(" h:mm a"),
  }
}

module.exports = formatMessage
