import { CardDiv } from "./style";
import { FirstListCardStyles } from "./style";

export function CategoryList({ pathImage, category }) {
  return (
    <CardDiv>
      <FirstListCardStyles>
        <img src={pathImage} alt="" />
      </FirstListCardStyles>
      <h3>{category}</h3>
    </CardDiv>
  );
}
