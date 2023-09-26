import { NewsPromoCard } from "../NewsPromoCard";
import { NewsPromoSectionStyled } from "./style";


export function NewsPromoSection({data, sectionName}){
    

    const news = data.filter((item) => item.section === 'Lançamentos/Promoções')

    const formatoMoeda = new Intl.NumberFormat('Brasil', {
        style: 'currency',
        currency: 'BRL',
      });

    return(
        <NewsPromoSectionStyled>
            <h1>{sectionName}</h1>
            <ul>
                {news.map((item) => (
                    <li key={item.id}><NewsPromoCard imgPath={item.img} description={item.description} price={formatoMoeda.format(item.price)} payment={item.payment} /></li>
                ))}
            </ul>

            <img className="group15" src="/Group 15.svg" alt="" />
                
        </NewsPromoSectionStyled>
    )
}