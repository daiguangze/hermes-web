'use client'
import {useState} from 'react'
import { Home , Screen} from './pages/home/home';
export default function App() {
  const [count,setCount]  = useState(0)
    return (
        <>
        <Home/>
        </>
    );
}