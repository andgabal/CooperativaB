const bcrypt = require ('bcryptjs');
const e = require('express');
const helpers = {};


helpers.encryptPassword = async (password) => {
   const salt = await bcrypt.getSalt(20);
   const hash = await bcrypt.hash(password, salt);
   return hash;
};

helpers.matchPassword = async (password, savedPassword) => {

    try {
       return await bcrypt.compare(password, savedPassword);
    } catch (e) {
        console.log(e);
    }
}
module.exports = helpers;