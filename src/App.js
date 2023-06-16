import './App.css';
import React, {useState, useEffect} from 'react';
import Rewards from './Rewards';
import response from './Api/transaction.json';
 
function calculatePoints(amount) {
  let points = 0;
  if(amount > 100) {
    points = 2*(amount-100)+50
  } else if(amount > 50 && amount <=100) {
    points = amount -50;
  } else {
    points = 0;
  }
  return points;
}

function App() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const data = response.data.map((val) => {
      const value = {...{points: calculatePoints(val.amount)},...val};
      return value;
    });
    setRewards(data);
  },[]);

  return (
    <div className="App">
       <Rewards rewards={rewards}/>
    </div>
  );
}

export default App;
