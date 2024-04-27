import { Request, Response, request } from "express";
import { Registro, getNewId,} from "../registro";

export function deletarFilmes(pedido:Request, resposta:Response){

    const {filmeId} = pedido.params
    if(!filmeId){
        return resposta.status(400).send({mensagem:'insira os campos válidos: id'})
    }
    let itensDeletados = 0
    Registro.Filmes = Registro.Filmes.filter((item)=>{
        if(item.ID === Number(filmeId)){
            itensDeletados ++
            return false
        }
            return true
    })
    if(itensDeletados ===0){
        return resposta.status(404).send({mensagem: 'ID não encontrado'})
    }
    return resposta.status(204).send()
}