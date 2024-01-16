'use client'
import {useState} from 'react'
import { Home , Screen} from './components/home';
export default function App() {
  const [count,setCount]  = useState(0)


  function aaa(){
    setCount(count + 1)
  }

    return (
        <>
        <Home/>
        </>
    );
}