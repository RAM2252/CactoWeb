import java.util.Scanner;

public class App {


    public static void main(String[] args) throws Exception {
        boolean tarefa_finalizada = false;
        int base = 9;
        while (tarefa_finalizada == false) {
            Scanner analise = new Scanner(System.in);
            System.out.println("Digite o numero que sera ordenado");
            String lista[] = analise.nextLine().split("");
            analise.close();
            try{
                for(int i = 0; i < lista.length; i++ ){
                    if(Integer.parseInt(lista[i]) < base){
                        base = Integer.parseInt(lista[i]);
                    }
                }   
                System.out.println(base);
                tarefa_finalizada = true;

            }catch(Exception e ){
                System.out.println("por favor, digite apenas numeros no input.");
            }
    }
    }
}
