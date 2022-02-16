import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Header from './components/header/header';
import ListPeople from './components/listaDePessoas/listPeople';

const App = () => {
  const [visible, setVisible] = useState(true)
  const [dados, setDados] = useState([])
  
  return (
    <main className="App">
      <Header setVisible={setVisible}/>
      {visible ? <Form dados={dados} setDados={setDados}/> : <ListPeople key="" dados={dados} setDados={setDados}/>}
    </main>
  );
}

export default App;
