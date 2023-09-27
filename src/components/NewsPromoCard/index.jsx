import { StyleCartIcon, StyledStarIcon } from "../Header_Two/style";
import { NewsCardStyled } from "./style";

export function NewsPromoCard({ imgPath, description, price, payment }) {
  return (
    <NewsCardStyled>
      <section>
        <StyledStarIcon />
        <StyleCartIcon />
      </section>
      <img src={imgPath} alt="foto" />
      <h2>{description}</h2>
      <div>
        <p>{price}</p>
        <span>{payment}</span>
      </div>
    </NewsCardStyled>
  );
}
