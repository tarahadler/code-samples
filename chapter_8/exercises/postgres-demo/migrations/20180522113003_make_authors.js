
exports.up = function(knex, Promise) {
    // inside of the 'up' fn, we write code 
    // that moves the db to its NEW structure
    return knex.schema.createTableIfNotExists('authors', function(table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now()); 
        table.string('name').notNullable(); 
    });
};

exports.down = function(knex, Promise) {
    // inside of the 'down' fn, we write code 
    // that moves the db to its OLD structure
    return knex.schema.dropTableIfExists('authors');
};
