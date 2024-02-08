const perguntas = [
    {
      pergunta: "Qual é a função da palavra-chave 'let' ao declarar uma variável em JavaScript?",
      respostas: [
        "Definir uma variável constante",
        "Criar uma variável com escopo de bloco",
        "Inicializar uma variável global",
      ],
      correta: 1
    },
    {
      pergunta: "O que representa o operador '!== ' em JavaScript?",
      respostas: [
        "Diferença de valor e tipo",
        "Igualdade de valor e tipo",
        "Diferença de valor apenas",
      ],
      correta: 0
    },
    {
      pergunta: "Como você comenta várias linhas em JavaScript?",
      respostas: [
        "/* Comentário */",
        "// Comentário",
        "# Comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 10 + '5' em JavaScript?",
      respostas: [
        "'105'",
        "15",
        "Erro de tipo (TypeError)",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'toFixed()' faz em um número em JavaScript?",
      respostas: [
        "Arredonda para o número inteiro mais próximo",
        "Fixa um número específico de casas decimais",
        "Retorna a parte fracionária do número",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se uma variável é do tipo 'string' em JavaScript?",
      respostas: [
        "typeof myVar === 'string'",
        "myVar instanceof String",
        "myVar.isString()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um objeto em JavaScript?",
      respostas: [
        "Um tipo de dado para armazenar números",
        "Um conjunto de instruções condicionais",
        "Uma coleção de pares chave-valor",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador ternário em JavaScript?",
      respostas: [
        "Concatenação de strings",
        "Atribuição de valores",
        "Tomada de decisões com base em uma condição",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado para manipulação de datas",
        "Uma linguagem de programação para o navegador",
        "Uma interface para interagir com documentos HTML",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para minúsculas em JavaScript?",
      respostas: [
        "string.toLowerCase()",
        "string.upperCase()",
        "string.toLower()",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
   
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      dt.querySelector('input').value=item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta){
          corretas.add(item)        
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
    
  }