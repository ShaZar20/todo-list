import './styles/styles.scss';
import React from 'react';
import { Header } from './components/Header';
import Task from './components/Task';
import AllTasks from './components/AllTasks';
import axios from 'axios';


export default class app extends React.Component {
  state = {
    
  };


  render(){
    return (
      <div className="App">
        <Header />
        <AllTasks />
        
      </div>
    );
  }
}


// {/* <button
//         onClick = {() => {
//           axios.get('http://localhost:4000/task/read-all').then((res) => {console.log(res)})
//           axios.post('http://localhost:4000/task',{name: "shay"}).then((res) => {console.log(res)})
//         }}>check</button> */}