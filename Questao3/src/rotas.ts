import {Request,Response, Router, } from "express"

const minhasRotas = Router()

minhasRotas.post('/', (pedido:Request, resposta: Response)=>{
    resposta.status(200).send({mensagem: 'Usuário criado'})
})

minhasRotas.delete('/', (pedido:Request, resposta: Response)=>{
    resposta.status(200).send({mensagem: 'Usuário deletado'})
})

export { minhasRotas}