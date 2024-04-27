import { Request, Response, request } from "express";
import { Registro, getNewId,} from "../registro";

export function buscarFilmePorID(pedido:Request, resposta:Response){
    const {filmeId} = pedido.params
    if(!filmeId){
        return resposta.status(400).send({mensagem:'insira os campos válidos: id'})
    }

    for(const filme of Registro.Filmes){
        if(filme.ID === Number(filmeId)){
            return resposta.status(200).send(filme)
        }
    }
    return resposta.status(404).send({mensagem: 'ID não encontrado'})
}