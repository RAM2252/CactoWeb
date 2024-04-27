
interface registro{
  Filmes: filme[]
}

interface filme{
    ID: number,
    data:Date,
    nome:string,
    autor:string
}

let id = 1;

export function getNewId(){
  return id++
}

export const Registro: registro={
    Filmes:[]
}