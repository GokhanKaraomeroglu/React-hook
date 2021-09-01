import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import List from './components/List';
import fs from './assets/fs.png';
import aws from './assets/aws.png';
import axios from 'axios';


function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [studentList, setStudentList] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

useEffect(() => {
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then ((res)=> setStudentList(res.data))


},[])

const handleText = (e) => {
  setText(e.target.value);
}

const handleSearch = () => {
  setSearch(text);
}
  return (
    <div className='App'>

      <Header img={img}/>
      <p>Counter: {counter} </p>
      <button onClick= {()=> setCounter (counter+1)} >Increase</button>
      <button onClick= {()=> setImg (fs)} >FS</button>
      <button onClick= {()=> setImg (aws)} >AWS</button>
      <button onClick= {()=> setImg (0)} >Reset</button>
      <hr/>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <List students = {studentList} />
    </div>
  )
}
export default App;