/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('nhanvien',table=>{
      table.increments('id');
      table.string('name').notNullable();
      table.string('age').notNullable();
      table.string('sex').notNullable();
      table.string('date').notNullable();
      table.string('email').notNullable().unique();
      table.string('address').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('nhanvien');
};
