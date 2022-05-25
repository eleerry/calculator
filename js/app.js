// Constantes globais
const calcDisplay = document.getElementById('calcDisplay')
const buttonType = [
    "clean",
    "back",
    "operation",
    "number",
    "comma",
    "result"
]

const oparations = {
    "clean": function(){
        calcDisplay.value = ''
    },
    "back": function(){
        calcDisplay.value = calcDisplay.value.slice(0,-1)
    },
    "operation": function(value){
        
        if(calcDisplay.value.length === 0){
             return
        }
        
        calcDisplay.value += value
    },
    "number": function(value){
        calcDisplay.value += value
    },
    "comma": function(value){
        calcDisplay.value += value
    },
    "result": function(){
        let result = calcDisplay.value
        result = result.replaceAll(',','.')
        result = result.replaceAll('x', '*')
        result = result.replaceAll('÷', '/')
        result = eval(result).toString().replaceAll('.',',')
        calcDisplay.value = result
    }
}

// Evento para monitorar o clique do usuário
// chama a função app
window.addEventListener('click', app)

function app(e){
    // Verifica se o clique do usuário foi
    // em um elemento com atributo button-type
    
    if(e.target.getAttribute('button-type')){
        // Pega o valor do atributo button-type e armazena na constante
        
        const currentButtonType = e.target.getAttribute('button-type')
        const currentButtonValue = e.target.getAttribute('button-value')
        
        // loop para identificar se o valor do atributo button-type
        // existe no array buttonType
        
        buttonType.forEach( type => {
            // se o valor de type for o mesmo que currentButtonType
            if(type === currentButtonType){
                // se exitir um objeto type no objeto opartions
                if(oparations[type]){
                    // então, execute o objeto oparations na propriedade type
                    oparations[type](currentButtonValue)
                }
            }
        })
    }
}