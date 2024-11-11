import { User } from '../models/login.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'owen', email: 'oweng@gmail.com', password: 'password' },
    { username: 'brandon', email: 'brandon@gmail.com', password: 'password' },
    { username: 'miya', email: 'miya@gmail.com', password: 'password' },
    { username: 'jorge', email: 'jorge@gmail.com', password: 'password' },
  ], { individualHooks: true });
};
