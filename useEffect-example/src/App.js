import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react';

function App() {
  const [money, setMoney] = useState(0);
  const [grade, setGrade] = useState('');
  const [color, setColor] = useState('gray');

  useEffect(checkMoney, [grade]);
  useEffect(()=>{
    console.log("in useEffect - money=", money);
    if( money === 1000 ) {
      setGrade("하");
    }
    if( money === 2000 ){
      setGrade("중");
    }
    if( money === 3000 ){
      setGrade("상");
    }
  }, [money]);
  const saveMoney = ()=>{
    setMoney(money+100);
    console.log("+++money=", money);

  }

  useEffect(()=>{checkMoney()}, [grade]);

  function checkMoney() {
    console.log("등급 상승 !!!");
    if( grade === "하") setColor('green');
    else if( grade ==="중") setColor('yellow')
    else if( grade ==="상") setColor('red');
    
  }


  return (
    <div className="App" style={{backgroundColor:`${color}`}}>
      <button onClick={saveMoney} >클릭 한번에 100원</button>
      <h1 >당신의 현재 자산은 {money} 입니다.</h1>
      <h1>당신은 {grade} 등급 입니다.</h1>
    </div>
  );
}

export default App;
