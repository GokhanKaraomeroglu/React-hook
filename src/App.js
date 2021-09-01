import React, {useState} from 'react';
import Header from './components/Header';
// import List from './components/List';
import fs from './assets/fs.png';
import aws from './assets/aws.png';


function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='App'>

      <Header/>
      <p>Counter: {counter} </p>
      <button onClick= {()=> setCounter (counter+1)} >Increase</button>

    </div>
  )
}
export default App;