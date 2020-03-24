// Para cada lógica dentro das rotas teremos um Controller para abstrair a lógica
const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    // Route 2 = Lógic: Listing an ONG 
    async index(request, response) {

        const ongs = await connection('ongs').select('*');
         
        return response.json(ongs); // Responderemos apenas o ID para a ONG pq será a chave dela de acesso
    
    },



    // Route 1 = Lógic: Creating an ONG 
    async create(request, response) { // Use async / await given the database scenario.

        const { name, email, whatsapp, city, uf } = request.body; // Assim pegamos cada variável do body individualmente e não em bloco

        const id = crypto.randomBytes(4).toString('HEX'); // Generating ID easily throug crypto from node.js
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        // JSON Example:     
        return response.json({ id }); // Responderemos apenas o ID para a ONG pq será a chave dela de acesso

    }

};