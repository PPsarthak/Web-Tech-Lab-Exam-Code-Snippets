const mysql = require('mysql2/promise');

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wt',
};

// Create a pool connection
const pool = mysql.createPool(dbConfig);

// Function to connect to MySQL and perform CRUD operations
async function connectToMySQL() {
  let connection;

  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    console.log('Connected to MySQL');

    // Call functions to perform CRUD operations
    await insertData(connection);
    await selectData(connection);
    await updateData(connection);
    // await deleteData(connection);
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  } finally {
    if (connection) {
      // Release the connection back to the pool
      connection.release();
      console.log('Disconnected from MySQL');
    }
  }
}

// Function to insert data into the database
async function insertData(connection) {
  const insertQuery = 
  'INSERT INTO tut(regid, name, age, id, mobile) VALUES ("629fe", "shubham", 19, 12110495, 0101010101)';
//   const values = ['value1', 'value2'];

  await connection.execute(insertQuery);
  console.log('Data inserted successfully');
}

// Function to select data from the database
async function selectData(connection) {
  const selectQuery = 'SELECT * FROM tut';

  const [rows] = await connection.execute(selectQuery);
  console.log('Selected data:', rows);
}

// Function to update data in the database
async function updateData(connection) {
  const updateQuery = 'UPDATE tut SET name = ? WHERE id = ?';
  const values = ['Shubham', 12110495];

  await connection.execute(updateQuery, values);
  console.log('Data updated successfully');
}

// Function to delete data from the database
async function deleteData(connection) {
  const deleteQuery = 'DELETE FROM tut WHERE name = ?';
  const values = ['Shubham'];

  await connection.execute(deleteQuery, values);
  console.log('Data deleted successfully');
}

// Call the function to connect to MySQL and perform CRUD operations
connectToMySQL();
