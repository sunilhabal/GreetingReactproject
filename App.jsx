import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const currentTime = new Date().getHours();

const customStyle = {
  color:""
}

let greeting;
if(currentTime<12) {
  greeting ="Good Morning!"
  customStyle.color="red"
}else if (currentTime<18) {
  greeting="Good Afternoon!"
  customStyle.color="green"
}else{
  greeting="Good Evening!"
  customStyle.color="blue"
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={customStyle}>{greeting}</h1>
    </>
  )
}

export default App
