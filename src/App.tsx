import Header from "./componets/header"
import { Aluno } from "./componets/aluno"

export default function App(){
  return(
    <div>
      <Header />
      <Aluno nome="Deivysson" idade={26}/>
      <Aluno nome="Emilly" idade={24}/>
    </div>
  )
}


