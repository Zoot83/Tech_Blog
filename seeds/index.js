const seedUser = require('./user-seed');
const seedComment = require('./comment-seed');
const seedPosting = require('./posting-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedComment();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosting();
  console.log('\n----- LISTING SEEDED -----\n');

  process.exit(0);
};

seedAll();
