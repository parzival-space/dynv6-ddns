const { getIPv4, getIPv6 } = require('./lib/myIP');
const { update4, update6 } = require('./lib/dynv6');

// load config
const config = require('./config.json');

// store last IP address
var lastIPv4 = "";
var lastIPv6 = "";


// checks if the IP address has changed and updates the DNS record if required
async function updateIP() {

  // get current IP address
  let ipv4 = await getIPv4();
  let ipv6 = await getIPv6();

  // check if IPv4 address has changed. update if it has and enabled in config.json
  if (ipv4 != lastIPv4 && config.ipv4Enabled) {
    console.log(`%cInfo:`, 'color: white;', `New IPv4 Address detected.`);

    await update4(config.zone, ipv4, config.token)
      .then(() => console.log(`%cInfo:`, 'color: white;', `Updated IPv4 Address: ${ipv4}`))
      .catch(err => console.error(`%cError:`, 'color: red;', `${err.message}`));
    
    lastIPv4 = ipv4;
  }

  // check if IPv6 address has changed. update if it has and enabled in config.json
  if (ipv6 != lastIPv6 && config.ipv6Enabled) {
    console.log(`%cInfo:`, 'color: white;', `New IPv6 Address detected.`);

    await update6(config.zone, ipv6, config.token)
      .then(() => console.log(`%cInfo:`, 'color: white;', `Updated IPv6 Address: ${ipv6}`))
      .catch(err => console.error(`%cError:`, 'color: red;', `${err.message}`));

    lastIPv6 = ipv6;
  }

};

// update IP address every x hours (configured in config.json)
setInterval(updateIP, config.interval * 60 * 60 * 1000);

// spawn check on startup
updateIP();