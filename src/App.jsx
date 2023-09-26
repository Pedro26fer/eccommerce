import { useState, useEffect } from 'react'
import axios from 'axios'
import { HeaderOne } from './components/Header_One'
import { StyledApp } from './App'
import { HeaderTwo } from './components/Header_Two'
import { FirstSection } from './components/FirstSection'
import { CategoryMenu } from './components/CategoryMenu'
import { NewsPromoSection } from './components/NewsPromoSection'
import { Professionals } from './components/Professionals'
import { BlogSection } from './components/BlogSection'
import { ObjectivesSection } from './components/ObjectivesSection'
import { TopFooter } from './components/TopFooter'
import { AboutSection } from './components/AboutSection'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
      axios.get('src/data.json')
      .then((response) => {
          const data = response.data
          setData(data)
      })
      .catch((err) => console.log(err))       

  },[])

  return (
    <StyledApp>
      <HeaderOne/>
      <HeaderTwo/>
      <FirstSection/>
      <CategoryMenu/>
      <NewsPromoSection data={data} sectionName={'LANÇAMENTOS'}/>
      <Professionals data={data}/>
      <NewsPromoSection data={data} sectionName={'PROMOÇÕES'}/>
      <BlogSection data={data}/>
      <ObjectivesSection data={data}/>
      <TopFooter/>
      <AboutSection/>
    </StyledApp>

  )
}

export default App
