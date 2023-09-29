import { useContext } from "react";
import { StyleCartIcon, StyledStarIcon } from "../Header_Two/style";
import { NewsCardStyled } from "./style";
import { CounterContext } from "../../Providers";

export function NewsPromoCard({ imgPath, description, price, payment }) {

  const { addProduct } = useContext(CounterContext)

  return (
    <NewsCardStyled>
      <section>
        <StyledStarIcon />
        <StyleCartIcon onClick={addProduct} />
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
