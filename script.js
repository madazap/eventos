let monedas=[0,0,0,0,0,0];
let valores=[50,20,10,5,2,1]
let monedas_texto=[];

//let retorno=prompt("Digita el valor a retornar")
let contador;
let residuo;

let boton = document.getElementById("enviar");
boton.addEventListener("click", iniciar());

function iniciar() {
  let retorno = document.getElementById("numero_ret").value;
  console.log("se supone va el retorno" + retorno);
}

class Calculadora{
    
    constructor(retorno, valores){
            this.retorno=parseInt(retorno);
            this.valores=valores;
    }

    getCoins(){
        let n=0;
        
        while(n<5){

            let moneda=retorno/valores[n];
            contador=parseInt(moneda);
            monedas[n]=contador;
            residuo=retorno - (contador*valores[n])

                if(residuo==0){
                  break;
                }
                else{
                  retorno = residuo;
                }
      
           
            n++;

        }
            
            this.getTexto_monedas(monedas);
           
    }

    getTexto_monedas(monedas_final){
      
        
        for(let i=0; i<monedas_final.length; i++){

          if(monedas_final[i]!=0){

          monedas_texto[i]=monedas_final[i] + " monedas de " + valores[i];
            
          }
        
        }

        document.getElementById(`resultado`).innerHTML =monedas_texto;
    }


}

//const vueltas = new Calculadora(retorno, valores);
//vueltas.getCoins();
  










