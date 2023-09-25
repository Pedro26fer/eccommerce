import { useEffect, useState } from "react";
import { SecondListCard } from "../SecondListCard";
import { ThirdSectionStyled } from "./style";
import axios from 'axios'

export function ThirdSection(){
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('src/data.json')
        .then((response) => {
            const data = response.data
            setData(data)
        })
        .catch((err) => console.log(err))       

    },[])

    const formatoMoeda = new Intl.NumberFormat('Brasil', {
        style: 'currency',
        currency: 'BRL',
      });

    return(
        <ThirdSectionStyled>
            <h1>LANÇAMENTOS</h1>

            <ul>
                {data.map((item) => (
                    <li key={item.id}><SecondListCard imgPath={item.img} description={item.description} price={formatoMoeda.format(item.price)} payment={item.payment} /></li>
                ))}
            </ul>
                
        </ThirdSectionStyled>
    )
}