
exports.up = function(knex) { // Criar tabela
  
    return knex.schema.createTable('ongs', function(table){

        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //Tamanho 2
    });
};

exports.down = function(knex) { // Roll-back
  
    return knex.schema.dropTable('ongs');

};
