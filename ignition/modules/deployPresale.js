const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { env } = require('../../.env');
require('dotenv').config(env);


const OWNER = Public_key;
const AavastariToken = AavastariToken;
const Price = 0.1;
const TokenForSale = 1000;

module.exports = buildModule("LockModule",  (m) => {
    const owner = m.getParameter("owner", OWNER);
    const aavastariToken = m.getParameter("aavastariToken", AavastariToken);
    const price = m.getParameter("price", Price);
    const tokenForSale = m.getParameter("tokenForSale", TokenForSale);

  
  const deploy =  m.contract("Presale_Aavastari",[aavastariToken,price, tokenForSale]);
  return { deploy };
});
