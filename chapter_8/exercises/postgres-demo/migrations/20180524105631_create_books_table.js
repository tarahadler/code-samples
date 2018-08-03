
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('books', function(table) { 
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('author_id').notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books');
};
