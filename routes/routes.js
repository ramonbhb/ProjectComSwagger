const { Router } = require('express');
const routes = Router();

routes.get('/', (req,res) => {    
    // #swagger.tags = ['ROTA PRINCIPAL']
    // #swagger.description = 'Uma rota que retorna um Hello World'

    /* #swagger.responses[200] = {
        schema: { mensagem: 'Hello World' },
        description: 'Mensagem enviada com sucesso'
    }
    
      #swagger.responses[401] = {
          schema: { mensagem: 'Não Autorizado' },
          description: 'Rota não autorizou o acesso'
      }
    */
    res.status(200).json({mensagem: "Hello World"})
});

routes.get('/time/:id', (req,res) => {
    // #swagger.tags = ['Time']
    // #swagger.description = 'Rota que retorna um time por ID'

    /* #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Time' },
        description: 'Retorna um time'
    } */
    
    /*  #swagger.parameters['id'] = {
          type: 'Integer',
          description: 'Id do Time'
      }

    */

    const id = req.params.id;
    const q = req.query.q;
    if (q) {
        
        res.status(200).json({mensagem: "Parametro ok"})
    }
    else {
        res.status(404).json({mensagem: "Faltam parâmetros"})
    }
});

routes.post('/time', (req,res) => {
    /*
        #swagger.tags = ['Time']
        #swagger.description = 'Endpoint para adicionar um time'

    */
    /*
        #swagger.parameters['novoTime'] = {
            in: 'body',
            description: 'Dados do Time',
            required: 'True',
            type: 'object',
            schema: {
                $ref: '#/definitions/Time'
            }
        }
    */

    const novoTime = req.body;

    if (time) {
        /* #swagger.responses[201] = { 
            description: 'Criado com sucesso'
        } */
        res.status(201).json(novoTime)
    }
    else {
        res.status(500) // #swagger.responses[500]
    }
});

module.exports = routes;