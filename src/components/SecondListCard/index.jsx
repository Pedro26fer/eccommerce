import { StyleCartIcon, StyledStarIcon } from "../Header_Two/style";
import { SecondListStyledCard } from "./style";

export function SecondListCard({imgPath,description,price,payment}){
    return(
        <SecondListStyledCard>
            <section>
                <StyledStarIcon/>
                <StyleCartIcon/>
            </section>
            <img src={imgPath} alt="foto" />
            <h2>{description}</h2>
            <div>
                <p>{price}</p>
                <span>{payment}</span>
            </div>
        </SecondListStyledCard>
    )
}