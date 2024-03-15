let vendas = prompt("valor de vendas até 5 unidades")
let valor1 = prompt("valor da primeira venda") *1
let valor2 = prompt("valor da segunda venda")  *1
let valor3 = prompt("valor da terçeira venda") *1
let valor4 = prompt("valor da quartavenda")    *1
let valor5 = prompt("valor da quinta venda")   *1

function somaFrete(){
    let soma=valor1 + valor2 + valor3 + valor4 + valor5
        if(soma>=100){
          
            return alert (`o preço da compra foi ${soma}, voce ganhou um frete grats`)

        }
        
        else{

                let frete = soma + 20
                return alert (`o preço da sua compra foi ${frete}, quer sem frete?, compre mais, o frete ficou 20 reais`)

    

        }

}
somaFrete()