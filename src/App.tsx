import {useState} from 'react'

export default function App(){

  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")
  const [aluno, setAluno] = useState("")
  const [alunoIdade, setAlunoIdade] = useState("")

  const [contador, setContador] = useState(0)

  function mostrarAluno(){
    setAluno(input);
   setAlunoIdade(idade);
  }

  function aumentar(){
    setContador(valorAtual => valorAtual +1)
  }

  function diminuir(){
    if(contador === 0){
      return;
    }
    setContador(valorAtual => valorAtual -1)
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>

      <input
      placeholder='Digite o nome' 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <br/>
      <input 
      placeholder='Digite a idade'
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      />

      <button onClick={mostrarAluno}>Mostrar</button>

      <h2>Bem-vindo: {aluno} </h2>
      <h2>Idade: {alunoIdade} </h2>

      <hr />

      <h1>Contador com useState</h1>

      <button onClick={aumentar}>+1</button> {contador} <button onClick={diminuir}>-1</button>

    </div>
  )
}


