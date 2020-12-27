import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [lists, setLists] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    //db데이터들을 가져온다. 
    axios.get('/api/values')
      .then(response => {
        console.log('response', response);
        setLists(response.data)
      })
  },[]);

  const changeHandler = (e) => {
    setValue(e.currentTarget.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('/api/value', {value: value})
      .then(response => {
        if(response.data.success){
          console.log('response', response);
          setLists([...lists, response.data]);
          setValue("");
        }else {
          alert('값을 db에 넣는데 실패 했습니다.')          
        }
      })
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className="container">
          {lists && lists.map((list,index) => (
            <li key={index}>{list.value}</li>
          ))}



          <form className="example" onSubmit={submitHandler}>
            <input type="text" placeholder="입력해주세요..." onChange={changeHandler} value={value} />
            <button type="submit">확인</button>
          </form>

        </div>
      </header>
    </div>
  );
}

export default App;
