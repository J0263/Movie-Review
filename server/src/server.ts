import express from 'express';
import dotenv from 'dotenv';
import routes from '../src/routes/api/user-routes';
import sequelize from '../src/config/connection'

dotenv.config();

const app =express()
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('../api/user-routes');

sequelize.sync().then(() => console.log('database connected'))

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
