import { Router } from 'express'

const routes = Router ()

const database = ['Peri']

routes.get('/users', (request, response) => {
    return response.status(200).json(database)
})

routes.post('/users', (request, response) => {
    console.request.body
})

// STATUS CODE 
//200 E 201
// 404 

// GET - ler os dados
// POST - criar os dados
// PUT/PATCH - editar os dados
// DELETE - deletar os dados

export { routes }

