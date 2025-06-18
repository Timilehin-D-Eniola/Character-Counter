import { useState } from 'react'
import Header from "./components/Header.jsx"
import TextArea from "./components/TextArea.jsx"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <section className='justify-center bg-[#12131a] text-[#e4e4ef]'>
    <Header />
    <TextArea />
   </section>
  )
}

export default App
