const connection = require('../database/connection');

module.exports = {

    async index (request, response) {

        const { page = 1 } = request.query; // Páginação: Exibiremos apenas 5 incidentes por página 

        const [count] = await connection('incidents').count(); // [count] é igual a count[0]

        console.log([count]);

        const incidents = await connection('incidents')
            .join('ongs','ongs.id','incident.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*',
                     'ongs.name',
                     'ongs.email',
                     'ongs.whastapp',
                     'ongs.city',
                     'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(incidents);

    },

    async create (request, response) {

        const { title, description, value} = request.body;
        const ong_id = request.headers.authorization; // Cabeçalho da requisição, quem esta autenticado esta aqui. Dentro do insomnia acesse "Headers" e configure como authorization um Id que você tenha cadastrado

        const [id] = await connection('incidents').insert({ //Como retorna um array de 1 elemento podemos colocar em uma variável com o []
                title,
                description,
                value,
                ong_id
        });

        return response.json({ id }); // E então passar o resultado como { id }
    },

    async delete (request, response) {

        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id){

            return response.status(401).json({

                error: 'Operation not allowed'
            }); // HTTP 401: Non authorized

        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); // 204 - OK deu sucesso mas no content

    }
    
};