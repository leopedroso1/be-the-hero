
exports.up = function(knex) {
  
    return knex.schema.createTable('incidents', function(table){

        table.increments(); // Auto generated PK. For each incident, the system automatically will create a PK

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // Relacionamento com a tabela de ONG pois cada ONG tem vários incidentes. Então criamos o campo 'ong_id' nessa tabela

        table.foreign('ong_id').references('id').inTable('ongs'); // Creating FK and establishing connection with other migration
    });
};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');

};
