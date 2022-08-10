import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }: HttpContextContract) => {
    return response.status(200).json({ name: 'Mahbub' })
})

Route.post('/create', async ({ request, response }: HttpContextContract) => {
    if (request.body()?.name) {
        return response.status(200).json({ isError: false, message: 'data successfully reached' })
    }
    return response.status(400).json({ isError: true, message: 'Name not provided' })
})

Route.patch('/update', async ({ request, response }: HttpContextContract) => {
    if (request.body()?.name) {
        return response.status(200).json({ isError: false, message: 'data successfully reached' })
    }
    return response.status(400).json({ isError: true, message: 'Name not provided' })
})

Route.delete('/remove/:name?/:age?', async ({ request, response }: HttpContextContract) => {
    if (request.param('name')) {
        return response.status(200).json({ isError: false, message: 'data successfully reached' })
    }
    return response.status(400).json({ isError: true, message: 'Name not provided' })
})
