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
import { Info } from './components/Info/index'
import { Footer } from './components/Footer'


function App() {
  const[products, setProducts] = useState([])
  const [data, setData] = useState([])

  useEffect(()=>{
      axios.get('/data.json')
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
      <NewsPromoSection data={data} sectionName={'Lançamentos'}/>
      <Professionals data={data}/>
      <NewsPromoSection data={data} sectionName={'Promoções'}/>
      <BlogSection data={data}/>
      <ObjectivesSection data={data}/>
      <TopFooter/>
      <AboutSection/>
      <Info/>
      <Footer/>
    </StyledApp>

  )
}

export default App
