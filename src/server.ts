import { initFileRouter } from 'node-file-router';
import bodyParser from 'body-parser';
import express from 'express';

async function run() {
  const app = express();

  app.use(bodyParser.json());

  const fileRouter = await initFileRouter({ baseDir: './src/api' });
  app.use(fileRouter);

  app.listen(4005, () => {
    console.log('Server http://localhost:4005 is running at port 4005');
  });
}

run();
