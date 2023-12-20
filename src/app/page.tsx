'use client'
import { MyButton, MyComponent, Test } from "./components/test/test";
import {useState} from 'react'
export default function App() {
  const [count,setCount]  = useState(0)


  function aaa(){
    setCount(count + 1)
  }

    return (
        <>
            <MyButton count={count} onClick={()=>aaa()}/>
            <MyButton count={count} onClick={()=>aaa()}/>
        </>
    );
}