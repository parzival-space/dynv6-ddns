const get = require('./get.js');

const apiv4 = 'https://ip4.seeip.org/json';
const apiv6 = 'https://ip6.seeip.org/json';

module.exports = {
  
  /**
   * Fetches the current public IPv4 address.
   */
  getIPv4: async () => {
    let data = await get(apiv4).catch(error => { throw error; });
    return data.ip;
  },

  /**
   * Fetches the current public IPv6 address.
   */
  getIPv6: async () => {
    let data = await get(apiv6).catch(error => { throw error; });
    return data.ip;
  }

}