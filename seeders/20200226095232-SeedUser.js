'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let data = JSON.parse(fs.readFileSync('./seeders/user.json', 'utf8'))
    data = data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Users', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
