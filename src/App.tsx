import {useEffect, useState} from 'react';
import List from './components/List'
const INITIAL_STATE = [
  {
    nick: 'Dapelu',
    subMonths:3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description:'Dapelu hace de moderador'
  },
  {
    nick: 'Silvi Rodriguez',
    subMonths: 7,
    avatar:'https://i.pravatar.cc/150?u=silvi'
  }
]
interface Sub {
  nick: string
  avatar:string
  subMonths: number
  description?:string
}
interface AppState {
  subs:Sub[]
  newSubsNumber:number
}

function App() {
  const [subs, setSubs]= useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])
  
  return (
    <div className="App">
    <h1>Midu Subs</h1>
    <List subs={subs}/>
    </div>
  );
}

export default App;
