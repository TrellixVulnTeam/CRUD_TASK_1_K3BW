// Update with your config settings.

const option  = {
  client: 'mysql',
    connection: {
      server: 'localhost',
      port : 3306,
      database: 'CRUD-Task1',
      user:     'root',
      password: 'Password123#@!',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'nhanvien'
    },
    userParams: {
      userParam1: '451'
    },
};
const knex = require('knex')(option);
console.log("connect success");

module.exports = knex;
// const test = knex.from('NhanVien').select('*')
// .then((rows) => {
//   for (row of rows) {
//       console.log(`${row['id']} ${row['name']} ${row['price']}`);
//   }
// }).catch((err) => { console.log( err); throw err })
// .finally(() => {
//   knex.destroy();
// });
// console.log(test);

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {


//   development: {
//     client: 'mysql',
//     connection: {
//       server: 'localhost',
//       database: 'CRUD-Task1',
//       user:     'root',
//       password: 'Password123#@!'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'nhanvien'
//     }
//   },

  

// };