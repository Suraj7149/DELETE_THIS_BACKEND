import * as mysql from 'mysql2/promise';

async function fix() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'car_rental_db'
  });

  try {
    console.log('Dropping cars table...');
    await connection.query('DROP TABLE IF EXISTS cars;');
    console.log('Table dropped successfully.');
  } catch (err) {
    console.error('Error dropping table:', err);
  } finally {
    await connection.end();
  }
}

fix();
