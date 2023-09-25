import { CardDiv } from "../FirstListCard/style";
import { FirstListCardStyles } from "./style";

export function FirstListCard({pathImage,category}){
    return(
        <CardDiv>
            <FirstListCardStyles>
                <img src={pathImage} alt="" />
            </FirstListCardStyles>
            <h3>{category}</h3>
        </CardDiv>
    )
}