const { User } = require('../models');

const userData = [
  {
    username: 'ShowManSam',
    password: 'SportzRule',
  },
  {
    username: 'CrazyConnor',
    password: 'CrayCray',
  },
  {
    username: 'SportzFan',
    password: 'SportzRule',
  },
  {
    username: 'HockeyHank',
    password: 'Penguins',
  },
  {
    username: 'FootballFrank',
    password: 'Steelers',
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
