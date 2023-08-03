//import logo from './logo.svg';
import './App.css';

//understending basic of React and  
//trying Function Component Structure

function App() {
  return (
    <div>
      <h1> Hello world </h1> 
    </div>
  );
}

function Msg() {
  return(
    <div>
      <h2> Message form Msg component </h2>
    </div>
  );
}

function Add() {
  let a=100 , b=200
  return(
    <div>
      <h3>addition of {a} and {b} is {a+b}</h3>
    </div>
  );
  
}

export default App;
export {Msg,Add};
