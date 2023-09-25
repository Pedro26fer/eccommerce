import { useState } from 'react'
import { HeaderOne } from './components/Header_One'
import { StyledApp } from './App'
import { HeaderTwo } from './components/Header_Two'
import { FirstSection } from './components/FirstSection'
import { SecondSection } from './components/SecondSection'
import { ThirdSection } from './components/ThirdSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StyledApp>
      <HeaderOne/>
      <HeaderTwo/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </StyledApp>

  )
}

export default App
