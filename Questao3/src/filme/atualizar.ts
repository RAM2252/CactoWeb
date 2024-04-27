import { Request, Response, request, response } from "express";
import { Registro, getNewId,} from "../registro";


interface dadosFilme{
    [key: string]: string | number | undefined
    nome?: string,
    autor?: string,
    data?: string
}

export function atualizarFilme(Pedido:Request,resposta: Response){
    const {filmeId} = Pedido.params
    const {nome, autor, data}= Pedido.body
    const dadosFilme: dadosFilme = {nome ,autor, data}
        //remover valores undefined
    Object.keys(dadosFilme).forEach((key) => dadosFilme[key] === undefined && delete dadosFilme[key])

    for(const filme of Registro.Filmes){
        if(filme.ID === Number(filmeId)){
            Object.assign(filme, dadosFilme)
            return resposta.status(200).send(filme)
            break
        }
    }
    return resposta.status(404).send({ menssagem :'ID não encontrado'})
}