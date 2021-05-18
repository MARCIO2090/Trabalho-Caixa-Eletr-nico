function Verificar(){

//Capturando os elementos
 var txtNome = document.getElementById('txtNome');        
 var outResultado = document.getElementById('outResultado');

//Valor que o usuario quer retirar
System.out.println('Quanto deseja retirar ? ')
valor = usuario.nextInt();

//Notas disponiveis
int nota_100
int nota_50;
int nota_10;

//Valor da soma
if(nota_100 >= 0) {
nota_100 = valor / 100;
valor = valor % 100;
System.out.println(nota_100 + " notas de 100");}

if(nota_50 >= 0) {
nota_50 = valor / 50;
valor = valor % 50;
System.out.println(nota_50 + " notas de 50");}

if(nota_10 >= 0) {
nota_10 = valor / 10;
valor = valor % 10;
System.out.println(nota_10 + " notas de 10");}


}

document.getElementById('btnVerificar').addEventListener('click', verificar);