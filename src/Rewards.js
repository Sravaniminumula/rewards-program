import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function Rewards({rewards, ...props}) {
    console.log(rewards);
  return (
    <div className="App">
       <table border="1">
        <thead>
            <tr>
                <th>Transaction Date</th>
                <th>Amount</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            {rewards.map((val, index) => <tr key={index}>
                <td>{val.date}</td>
                <td>{val.amount}</td>
                <td>{val.points}</td>
            </tr>)}
        </tbody>
       </table>
    </div>
  );
}

export default Rewards;
