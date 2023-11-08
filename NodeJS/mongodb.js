const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://panditsarthak1553:QCHieGp0NR1Nt6IB@cluster0.fnr3eyt.mongodb.net/?retryWrites=true&w=majority';


// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Call functions to perform CRUD operations
    await insertDocument();
    await findDocuments();
    await updateDocument();
    // await deleteDocument();

  } finally {
    // Close the client when done
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

// Function to insert a document
async function insertDocument() {
  const database = client.db('expressDB');
  const collection = database.collection('wt_codes');

  const documentToInsert = { name: 'Sarthak Pandit', age: 20 };

  const result = await collection.insertOne(documentToInsert);
  console.log(`Document inserted with ID: ${result.insertedId}`);
}

// Function to find documents
async function findDocuments() {
  const database = client.db('expressDB');
  const collection = database.collection('wt_codes');

  const documents = await collection.find({}).toArray();
  console.log('Documents found:', documents);
}


// Function to update a document
async function updateDocument() {
  const database = client.db('expressDB');
  const collection = database.collection('wt_codes');

  const filter = { name: 'John Doe' };
  const update = { $set: { name: 'Hitesh Pariani', age: 19} };

  const result = await collection.updateOne(filter, update);
  console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
}



// Function to delete a document
async function deleteDocument() {
  const database = client.db('expressDB');
  const collection = database.collection('wt_codes');

  const filter = { name: 'John Doe' };

  const result = await collection.deleteOne(filter);
  console.log(`Deleted ${result.deletedCount} document(s)`);
}


// Call the function to connect to MongoDB and perform CRUD operations
connectToMongoDB().catch(console.error);
