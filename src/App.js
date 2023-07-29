import {useState,useEffect} from "react";
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Greet from './components/Greet';
import BasicTodo from './components/BasicTodo';
import HOC from './components/HOC'
import RenderProps from './components/RenderProps'

function App() {
  return (
    <>
      {/* <RegistrationForm/> */}
      {/* <BasicTodo/> */}
      <h1>Learn HOC</h1>
      <HOC/>
      <RenderProps/>
    </>
  );
}

export default App;
