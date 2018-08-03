
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('boooks', function(table) {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()); 
    table.string('title').notNullable(); 
    table.integer('author_id').notNullable();    
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('boooks');  
};
