
let resultado = document.getElementById('resultado');
let resultadoFinal=''
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
  button.addEventListener('click', function() {
    let value = button.innerText;
    let numerosValidos=['1','2','3','4','5','6','7','8','9','0']
    let operadores=['+','-','/','*']

    switch (true) {
      case 'C':
        //Borrar texto y reiniciar variables
        resultado.innerText='0'
        resultadoFinal=''
        break;
      case value==='Borrar':
        resultado.innerText=resultado.innerText.slice(0,-1)
        if (resultado.innerText===''){
          resultado.innerText='0'
        }
        break;
      case value==='C':
        resultado.innerText='0'
        resultadoFinal=''
        break;
      case (numerosValidos.includes(button.innerText)):
        if (resultado.innerText === '0') {
          resultado.innerText = button.innerText;
        } else {
          resultado.innerText += button.innerText;
        }
        break;
      case (operadores.includes(button.innerText)):
        if (resultado.innerText!=='0'){
          resultadoFinal+=resultado.innerText+button.innerText
        }
        resultado.innerText='0'
        console.log(resultadoFinal)
        break;
      case button.innerText==='=':
        try{
          resultadoFinal+=resultado.innerText
          console.log(resultadoFinal)
          resultado.innerText=eval(resultadoFinal)
          resultadoFinal=''
          break;
        }
        catch{
          resultado.innerText="Error"
          break;
        }
      
      default:
        break;
    }
  })
})