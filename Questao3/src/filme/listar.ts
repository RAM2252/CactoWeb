import { Request, Response } from "express";
import { Registro } from "../registro";

export function listarFilmes(Pedido:Request, resposta: Response){
   return resposta.status(200).send({filmes: Registro.Filmes})
}