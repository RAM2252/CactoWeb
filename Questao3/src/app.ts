import express from 'express'
import { rotasFilmes } from './filme/rotas'


const app = express()
app.use(express.json())
app.use('/filmes', rotasFilmes)

export{app} 