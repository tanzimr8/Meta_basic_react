import {useState,useRef} from "react";
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Greet from './components/Greet';
import BasicTodo from './components/BasicTodo';

function App() {
  return (
    <>
      <RegistrationForm/>
      <BasicTodo/>
    </>
  );
}

export default App;
