import { Request, Response, request } from "express";
import { Registro, getNewId, } from "../registro";

export function criarFilme(Pedido:Request, resposta: Response){
    const { nome, autor, data } = Pedido.body
    if(!nome|| !autor || !data){
        return resposta.status(400).send({mensagem:'insira os campos válidos: nome, autor, data'})
    }
    
        const filme = { ID: 0,nome, autor, data}
    Registro.Filmes.push({ ...filme, ID: getNewId()})
    return resposta.status(201).send("Filme adicionado")
}