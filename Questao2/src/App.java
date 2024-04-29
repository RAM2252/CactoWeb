import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);
        List<String> Nome_aluno= new ArrayList<String>();
        List<String> Nota_aluno = new ArrayList<String>();
        boolean tarefa_finalizada = false;
        int ordem_nota;
        String ordem_nome;

            do{
                System.out.println("Acrescente o nome do aluno:");
                String nome = entrada.next();
                Nome_aluno.add(nome);

                System.out.println("coloque aqui a nota do aluno:");
                String nota = entrada.next();
                Nota_aluno.add(nota);
                    
                System.out.println("Deseja colocar mais um aluno?(y/n)");
                String fim = entrada.next();
                if(fim.equals("n")){
                    tarefa_finalizada = true;
                    }
                }while(tarefa_finalizada == false);
                        
                for(int loop = 0;loop < Nota_aluno.size()-1;loop++){
                      
                        for(int j=0; j < Nota_aluno.size() - 1;j++){
                            int nota1 = Integer.parseInt( Nota_aluno.get(j));
                            int nota2 = Integer.parseInt( Nota_aluno.get(j+1));
                            String nome1 = Nome_aluno.get(j);
                            String nome2 = Nome_aluno.get(j+1);   
                            
                            if(nota1 < nota2){
                            
                            ordem_nota = nota1;
                            nota1 = nota2;
                            nota2 = ordem_nota;

                            ordem_nome = nome1;
                            nome1 =nome2;
                            nome2 = ordem_nome;
                            
                            Nota_aluno.set(j, Integer.toString(nota1));
                            Nota_aluno.set((j + 1), Integer.toString(nota2));
                            
                            Nome_aluno.set(j, nome1);
                            Nome_aluno.set(j + 1, nome2);

                            }}}
                  
            
        System.out.println("Alunos com as maiores notas: "+ Nome_aluno.get(0)+"\n"+ Nome_aluno.get(1)+"\n"+ Nome_aluno.get(2));}
}