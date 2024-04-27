import { Router} from "express";
import { criarFilme } from "./criar";
import { listarFilmes } from "./listar";
import { deletarFilmes } from "./deletar";
import { atualizarFilme } from "./atualizar";
import { buscarFilmePorID } from "./buscarPorID";

const rotasFilmes = Router()

rotasFilmes.post('/', criarFilme)
rotasFilmes.get('/', listarFilmes)
rotasFilmes.get('/filmeId', buscarFilmePorID)
rotasFilmes.delete('/:filmeId', deletarFilmes)
rotasFilmes.patch('/:filmeId', atualizarFilme)
export {rotasFilmes}