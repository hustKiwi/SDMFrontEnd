const { Base64 } = require('js-base64');


module.exports.decodeQuery = (queryStr) => {
  let query;
  try {
    query = JSON.parse(Base64.decode(queryStr));
  } catch (err) {
    query = {};
  }
  return query;
};
