let peso=parseFloat(prompt("informe seu peso "));
let altura=parseFloat(prompt("informe sua altura "));
if(isNaN(peso)|| isNaN(altura)||peso<=0||altura<=0){
document.write("por favor informe valores válidos!!!");
}else{
  let imc=(peso/(altura*altura)).toFixed(2)
  console.log(imc)
  document.write("o seu imc é igual a: ",imc);
  document.write("<br>")
  if(imc < 18) {
    document.write("Abaixo do peso normal ");}
    else if(imc>=18 && imc <=24.99){
      document.write("peso normal");
    }     
     else if (imc>=25 && imc<=29.99){
      document.write("Acima do peso");
    }
    else if(imc>=30 && imc<=34.99){
      document.write("Obesidade grau I");
    }
    else if(imc>=35 && imc<=39.99){
        document.write("Obesidade grau II (severa)")
    }
    else if(imc<=40){
      document.write("Obesidade grau III(Mórbida)")
    }

      
     
    }
  



