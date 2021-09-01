import React, {useState} from 'react';
import Header from './components/Header';
// import List from './components/List';
import fs from './assets/fs.png';
import aws from './assets/aws.png';


function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();

  return (
    <div className='App'>

      <Header img={img}/>
      <p>Counter: {counter} </p>
      <button onClick= {()=> setCounter (counter+1)} >Increase</button>
      <button onClick= {()=> setImg (fs)} >FS</button>
      <button onClick= {()=> setImg (aws)} >AWS</button>
      <button onClick= {()=> setImg (0)} >Reset</button>

    </div>
  )
}
export default App;