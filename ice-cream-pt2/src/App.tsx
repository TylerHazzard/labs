import { useState } from 'react'
import Header from './Header'
import './App.css'
import AdDesigner from './AdDesigner'
import Votes from './Votes'

const flavors = ['Vanilla', 'Chocolate', 'Strawberry']

const App = () => {
  const [lightTheme, darkTheme] = useState(false)
  return (
    <>
      <Header />
      <AdDesigner 
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        flavors={flavors}
      />
      <Votes 
      flavors={flavors}
      />
    </>
  )
}

export default App
