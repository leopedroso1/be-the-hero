// No modelo MVC temos que ter em um controller no máximo todas as operações CRUD. caso tenha por exemplo dois tipos de listagem, crie um novo controller.
// Controller responsável pelo perfil de uma ONG

const connection = require('../database/connection');


module.exports = {

    // Returns all incidents given one Ong_Id
    async index(request, response){

        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
                        .where('ong_id',ong_id)
                        .select('*');

        return response.json(incidents);
    }

}


    