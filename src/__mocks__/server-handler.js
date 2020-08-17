import { rest } from 'msw'
import { TODO_URL } from '../Constants'

export const handlers =  [
    rest.get(TODO_URL, async (req, res, ctx) => {
        return res(ctx.json({userId: 1, id: 1, title: 'mock test', completed: false})) 
    })
]