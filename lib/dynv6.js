const get = require('./get');

const api = 'https://dynv6.com/api';

module.exports = {

  /**
   * Updates the dynamic IPv4 address of the domain.
   * @param {string} zone The target zone (means the target domain).
   * @param {string} ip The new IPv4 address.
   * @param {string} token The API token.
   */
  update4: async (zone, ip, token) => {
    let resp = await get(`${api}/update?zone=${zone}&ipv4=${ip}&token=${token}`).catch(error => { throw error; });
    return resp.data == 'addresses updated';
  },

  /**
   * Updates the dynamic IPv6 address of the domain.
   * @param {string} zone The target zone (means the target domain).
   * @param {string} ip The new IPv6 address.
   * @param {string} token The API token.
   * @param {string} [prefix] The new IPv6 prefix.
   */
  update6: async (zone, ip, token, prefix = "") => {
    let resp = await get(`${api}/update?zone=${zone}&ipv6=${ip}&token=${token}&ipv6prefix=${prefix}`).catch(error => { throw error; });
    return resp.data == 'addresses updated';
  }
}