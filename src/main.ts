import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';;
const mongodbUrl = process.env.MONGODB_URL;
const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongodbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // enable CORS for all origins
  await app.listen(3000);
}
bootstrap();
