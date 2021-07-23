var axios = require('axios').default;

module.exports = async (url) => {
  let options = {
    method: 'GET',
    url: url,
    headers: {}
  };

  let resp = await axios(options).catch(error => { throw error; });
  return resp.data;
}