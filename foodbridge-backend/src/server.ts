import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    console.log(`🌿 Environment: ${process.env.NODE_ENV || 'development'}`);
  });
};

startServer();
