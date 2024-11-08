let peso=parseFloat(prompt("informe seu peso "));
let altura=parseFloat(prompt("informe sua altura "));
if(isNaN(peso)|| isNan(altura)||peso<=0||altura<=0){
document.write("por favor informe valores válidos!!!");
}else{
  let imc=(peso/(altura*altura))
  document.write("o seu imc é igual a: ");
  if(imc>=18 && imc<=24,9) {
    document.write(" peso ideal ");}
    else if(imc>24.9 && imc<=28){

    }
  }



