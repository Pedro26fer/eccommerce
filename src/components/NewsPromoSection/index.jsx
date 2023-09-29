import { NewsPromoCard } from "../NewsPromoCard";
import { NewsPromoSectionStyled } from "./style";

export function NewsPromoSection({ data, sectionName, chi }) {
  const news = data.filter((item) => item.section === "Lançamentos/Promoções");

  const formatoMoeda = new Intl.NumberFormat("Brasil", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <NewsPromoSectionStyled>
      <h1>{sectionName.toUpperCase()}</h1>
      <ul>
        <img className="arrowRight" src="/Rectangle 49.svg" alt="" />
        {news.map((item) => (
          <li key={item.id}>
            <NewsPromoCard
              imgPath={item.img}
              description={item.description}
              price={formatoMoeda.format(item.price)}
              payment={item.payment}
            />
          </li>
        ))}
        <img className="arrowLeft" src="/Rectangle 50.svg" alt="" />
      </ul>

      <img className="group15" src="/Group 15.svg" alt="" />
    </NewsPromoSectionStyled>
  );
}
